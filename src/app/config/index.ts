import dotenv from "dotenv";
// dotenv.config({path:path.join(process.cwd(),".env")});
dotenv.config();
export default {
  port: process.env.PORT,
  db_url: process.env.DATABASE_URL,
};
