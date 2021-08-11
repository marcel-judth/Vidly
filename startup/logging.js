import winston from "winston";
import "winston-mongodb";
import "express-async-errors";
import config from "config";

export default function () {
  process.on("uncaughtException", (ex) => {
    winston.error(ex.message, ex);
    process.exit(1);
  });

  winston.exceptions.handle(
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", (ex) => {
    throw ex;
  });

  winston.add(
    new winston.transports.Console({
      level: "debug",
      handleExceptions: true,
      json: false,
      colorize: true,
      prettyPrint: true,
    })
  );
  winston.add(new winston.transports.File({ filename: "logfile.log" }));
  winston.add(
    new winston.transports.MongoDB({
      db: config.get("db"),
      level: "error",
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    })
  );
}
