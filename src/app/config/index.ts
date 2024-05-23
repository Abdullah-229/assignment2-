import dotenv from 'dotenv'
import path from 'path';
// dotenv.config({path:path.join(process.cwd(),".env")});
dotenv.config()
export default{
    port:process.env.PORT,
    db_url:process.env.DATABASE_URL,
}