var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import dotenv from 'dotenv';
dotenv.config();
const s3Client = new S3Client({
    region: "eu-north-1",
    credentials: {
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY
    },
});
import MyError from '../myError.js';
import { ErrorMessages } from '../constants.js';
dotenv.config();
export function getUrlFromFile(file, key) {
    return __awaiter(this, void 0, void 0, function* () {
        // Send the file to some system somewhere
        try {
            let data = yield s3Client.send(new PutObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: key,
                Body: file
            }));
            return data.ETag;
        }
        catch (err) {
            console.log(err);
            throw new MyError(ErrorMessages.NOT_PUBLISH_BOOK);
        }
    });
}
//# sourceMappingURL=getUrlFromFile.js.map