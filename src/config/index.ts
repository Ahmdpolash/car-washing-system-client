import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  db_uri: process.env.DATABASE_URL,
  port: process.env.SERVER_PORT,
  salt_round: process.env.BRYCPT_SALT_ROUNDS,
};
