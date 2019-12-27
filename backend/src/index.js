const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env" });
const createServer = require("./createServer");
const db = require("./db");

const server = createServer();

//TODO Use express middleware to handle cookies
server.express.use(cookieParser());
//TODO use express middleware to get current user

server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets =>
    console.log(`Server is now running on http://localhost:${deets.port}`)
);
