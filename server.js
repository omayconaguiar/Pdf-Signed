const express = require('express')
const upload = require('express-fileupload')
const app = express()

app.use(upload())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    var copyFileName = []
    if(req.files){        
        var length = req.files.file.length
        if(!length)
        length = 1
        for(var i = 0 ; i< length;i++){       
            var file = req.files.file[i]                        
            var data = req.files.file[i].data
            var filename = file.name
            file.mv('./uploads/'+ filename, function(err){
                if(err){
                    res.send(err)
                } else{
                    console.log("works")
                }
            })
            var copyPassword = req.body.pass     
            copyFileName[i] = data            
        }        
        
        const signer = require('node-signpdf').default;
        const fs = require('fs');
        const { plainAddPlaceholder } = require('node-signpdf/dist/helpers');
        const { PDFDocument, StandardFonts, rgb } = require('pdf-lib')


        const action = async () => {

            const pdfDoc = await PDFDocument.create()

            const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

            const page = pdfDoc.addPage();

            const { width, height } = page.getSize()

            const fontSize = 30
            page.drawText('Creating PDFs in JavaScript is awesome!', {
                x: 50,
                y: height - 4 * fontSize,
                size: fontSize,
                font: timesRomanFont,
                color: rgb(0, 0.53, 0.71),
            })                        
            
            pdfBuffer = copyFileName[0]

            let p12Buffer =copyFileName[1]

            pdfBuffer = plainAddPlaceholder({
                pdfBuffer,
                reason: 'Tamper Proofing',
                signatureLength: 3000,
            });

            assinarPDF = signer.sign(pdfBuffer, p12Buffer, { passphrase: copyPassword });

            app.get('/receive-pdf', (req, res) => {
                res.set({ 'Content-Type': 'application/pdf', 'Content-Length': assinarPDF.length });
                res.send(assinarPDF);
            })                        
        }

        action();        

    return res.send("File Uploaded")

    }
})

app.listen(5000)
