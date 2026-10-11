const multer = require('multer');
const express = require('express');
const app = express();
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
   console.log(req.file); // Access uploaded file details
   res.send('File uploaded successfully!');
});


// file conversion example
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
       cb(null, 'uploads/');
   },
   filename: (req, file, cb) => {
       const uniqueName = `${Date.now()}-${file.originalname}`;
       cb(null, uniqueName);
   }
});
const storageUpload = multer({ storage });

app.post('/photos', storageUpload.array('photos', 5), (req, res) => {
   console.log(req.files); // Array of uploaded files
   res.send('Multiple files uploaded!');
});


const file = multer({
   dest: 'uploads/',
   fileFilter: (req, file, cb) => {
       if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
           cb(null, true);
       } else {
           cb(new Error('Only JPEG and PNG files are allowed!'), false);
       }
   }
});


app.post('/upload', upload.single('file'), (req, res, next) => {
   // Handle successful upload
}, (err, req, res, next) => {
   if (err instanceof multer.MulterError) {
       res.status(400).send(err.message); // Multer-specific errors
   } else {
       res.status(500).send('An unknown error occurred!');
   }
});