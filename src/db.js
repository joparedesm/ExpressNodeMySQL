import { createPool } from "mysql2/promise";
import config from "./config.js";

export const pool = createPool({
    host: "127.0.0.1",
    user: "root",
    password: config.db_password,
    port: 3307,
    database: "pymesDB",
});

