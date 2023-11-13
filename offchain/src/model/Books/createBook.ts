import { PrismaClient } from '@prisma/client';
import { ErrorMessages } from '../../constants.js';
import MyError from '../../myError.js';

const prisma = new PrismaClient();

interface BookFormData {
    title: string;
    description: string;
    genre: string;
    coverURL: string;
    bookURL: string;
    
}

export async function createBook(formData: BookFormData) {
  const {
    title,
    description,
    genre,
    coverURL: book_cover_url,
    bookURL: book_url,
    
  } = formData;

  try {
    // Insert the details into the database
    const createdBook = await prisma.Publication.create({
      data: {
        
        title,
        description,
        genre,
        book_cover_url,
        book_url,
        
      },
    });

    return createdBook;
  } catch (err) {
    console.error(err);
    throw new MyError(ErrorMessages['INTERNAL_SERVER_ERROR']);
  }
}
