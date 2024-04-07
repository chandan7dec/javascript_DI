import { Request, Response} from 'express';



interface Uploader {
    upload: (filename: string) => Promise<boolean>;
}

export const fileController = {
    upload:async (req:Request, res:Response, {uploader} : {uploader : Uploader}) => {

        await uploader.upload('test.txt');
        res.json({message: 'hello world'});
    }
}