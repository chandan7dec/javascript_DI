import express from 'express';
import { fileController } from './file-controller';
import { s3Uploader } from './s3-uploader';
import { clUploader } from './cloudinary';

const app = express();

app.get('/file-upload', (req, res)=> {
    const uploaderStr = req.query.uploader;
    if(uploaderStr === 's3') {
        fileController.upload(req,res, {uploader :s3Uploader});
        return;
    }else if (uploaderStr === 'cloudinary') {
        fileController.upload(req, res, {uploader: clUploader});
        return;
    }else {
        res.status(400).json({message: 'Invalid uploader'});
        return;
    }
        
        
    });

export default app;
