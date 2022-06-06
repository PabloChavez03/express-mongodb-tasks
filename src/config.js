import dotevn from "dotenv";
dotevn.config();

export const DB_NAME = process.env.DB_NAME || 'mongodb://localhost/test';

export const PORT = process.env.PORT || 3000;