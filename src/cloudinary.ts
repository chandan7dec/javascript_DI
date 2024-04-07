
export const clUploader = {
    upload: async (filename: string)=> {
        //upload the file to s3
        console.log(`Uploading ${filename} to cloudinary`);
        return true;
    },
};