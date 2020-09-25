const express = require('express')
const upload = require('express-fileupload')
var fs = require('fs');

const app = express()

app.use(upload())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    if(req.files){
        //console.log(req.files)
        var length = req.files.file.length
        if(!length)
        length = 1
        for(var i = 0 ; i< length;i++){       
            var file = req.files.file[i]
            var filename = file.name
        }        
        file.mv('./uploads/'+ filename, function(err){
            if(err){
                res.send(err)
            } else{
                return res.send("File Uploaded")                
            }
        })
    }
})
   
console.log(filename)

app.listen(5000)

/*

const signer = require('node-signpdf').default;
const fs = require('fs');
const { plainAddPlaceholder } = require('node-signpdf/dist/helpers');
const { PDFDocument, StandardFonts, rgb } = require('pdf-lib')


const action = async () => {

    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()

    // Embed the Times Roman font
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)

    // Add a blank page to the document
    const page = pdfDoc.addPage();

    // Get the width and height of the page
    const { width, height } = page.getSize()

    // Draw a string of text toward the top of the page
    const fontSize = 30
    page.drawText('Creating PDFs in JavaScript is awesome!', {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
    })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()
    fs.writeFileSync('./test11.pdf', pdfBytes);

    pdfBuffer = './uploads/'+ filename[0]
    let p12Buffer = './uploads/'+ filename[1]

    pdfBuffer = plainAddPlaceholder({
    pdfBuffer,
    reason: 'Tamper Proofing',
    signatureLength: 3000,
    });
    pdfBuffer = signer.sign(pdfBuffer, p12Buffer, { passphrase: '1234' });

    app.get('/receive-pdf', (req, res) => {
        var stream = fs.readStream('/location/of/pdf');
        // Be careful of special characters

        pdfBuffer = encodeURIComponent(pdfBuffer);
        // Ideally this should strip them

        res.setHeader('Content-disposition', 'inline; filename="' + pdfBuffer + '"');
        res.setHeader('Content-type', 'application/pdf');

        stream.pipe(res);
    })
}

action();

*/

