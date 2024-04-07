
export const s3Uploader = {
    upload: async (filename: string)=> {
        //upload the file to s3
        console.log(`Uploading ${filename} to s3`);
        return true;
    },
};