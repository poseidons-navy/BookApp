
import {S3Client, PutObjectCommand} from '@aws-sdk/client-s3';
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

export async function getUrlFromFile(file: Buffer, key: string): Promise<string> {
    // Send the file to some system somewhere
    try {
        let data = await s3Client.send(
            new PutObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME!,
                Key: key,
                Body: file
            })
        );
        return data.ETag!;
    } catch(err) {
        console.log(err)
        throw new MyError(ErrorMessages.NOT_PUBLISH_BOOK)
    }
    
}