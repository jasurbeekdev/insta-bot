import dotenv from 'dotenv';
dotenv.config();

const connectionString = process.env.DATABASE_URL;

export { connectionString };
