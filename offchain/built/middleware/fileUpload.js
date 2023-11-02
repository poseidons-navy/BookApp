import dotenv from "dotenv";
import multer from "multer";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";
dotenv.config();
const s3 = new S3Client({
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY,
    },
    acl: "public-read",
    region: "eu-north-1",
});
const s3storage = multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    // acl: "public-read",
    metadata: (req, file, cb) => {
        cb(null, { fieldname: file.fieldname });
    },
    key: (req, file, cb) => {
        const filename = Date.now() + "_" + file.fieldname + "_" + file.originalname;
        cb(null, filename);
    }
});
export const upload = multer({
    storage: s3storage
});
//# sourceMappingURL=fileUpload.js.map