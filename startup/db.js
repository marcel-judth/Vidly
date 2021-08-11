import mongoose from "mongoose";
import winston from "winston";
import config from "config";

export default async function () {
  const db = config.get("db");
  await mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => winston.info(`Connected to ${db}...`));
}
