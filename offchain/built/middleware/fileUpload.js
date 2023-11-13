/*import { S3Client } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
import multer from "multer";
import multers3 from 'multer-s3';
dotenv.config();
// Set up an AWS client
let s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY
    },
    acl: 'public-read',
    region: "eu-north-1"
});
// Set up multer with aws s3
const s3Storage = multers3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    metadata: (req, file, cb) => {
        cb(null, { fieldname: file.fieldname });
    },
    key: (req, file, cb) => {
        const filename = Date.now() + "_" + file.fieldname + "_" + file.originalname;
        cb(null, filename);
    }
});
// export upload
export const upload = multer({
    storage: s3Storage
});
//# sourceMappingURL=fileUpload.js.map*/