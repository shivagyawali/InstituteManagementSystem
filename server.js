const express = require("express");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const { PrismaClient } = require("@prisma/client");
const cors = require("cors");
const prisma = new PrismaClient();

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors("*"));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
//check if the database is connected
prisma
  .$connect()
  .then((response) => {
    console.log("Connected to the mysql database..!");
  })
  .catch((error) => {
    console.error("Failed to connect to the database.", error);
  });

app.use("/api/v1/auth", require("./routes/authRoute"));
app.use("/api/v1/role", require("./routes/roleRoute"));
app.use("/api/v1/institute", require("./routes/instituteRoute"));
app.use("/api/v1/course", require("./routes/courseRoute"));
app.use("/api/v1/teacher", require("./routes/teacherRoute"));
app.use("/api/v1/staff", require("./routes/staffRoute"));
app.use("/api/v1/student", require("./routes/studentRoute"));
app.use("/api/v1/discount", require("./routes/discountRoute"));
app.use("/api/v1/fee", require("./routes/feeRoute"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
