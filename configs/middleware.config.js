const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cors = require("cors");

const whitelist = [
  process.env.DOMAIN,
  process.env.DOMAIN_REMOTE,
  "http://localhost:3000",
  "http://localhost:5000",
  "http://www.lospoemasdelaabuela.es",
  "https://www.lospoemasdelaabuela.es",
  "http://www.lospoemasdelaabuela.com",
  "https://www.lospoemasdelaabuela.com",
];

const corsOptions = {
  origin: (origin, cb) => {
    const originIsWhitelisted = whitelist.includes(origin);
    cb(null, originIsWhitelisted);
  },
  credentials: true,
};

module.exports = (app) => {
  app.use(logger("dev"));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  app.use(cors(corsOptions));
};
