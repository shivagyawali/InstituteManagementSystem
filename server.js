const express = require("express");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload")
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
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

//routes CRUD OPERATION
app.get("/", async (req, res) => {
  await prisma.userLogin
    .findMany({
      include: {
        role: true,
      },
    })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/role/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.role
    .findFirst({
      where: { id: String(id) },
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/role", async (req, res) => {
  const { name } = req.body;
  const user = await prisma.role.create({
    data: {
      name,
    },
  });
  res.json(user);
});

app.put("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const user = await prisma.user.update({
    where: { id: Number(id) },
    data: { name: name },
  });
  res.json(user);
});

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  const user = await prisma.user.delete({
    where: { id: Number(id) },
  });
  res.json(user);
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
