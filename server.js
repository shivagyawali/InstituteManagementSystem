const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
const port = 3000;

app.use(express.json());

//check if the database is connected
prisma
  .$connect()
  .then((response) => {
    console.log("Connected to the database!");
  })
  .catch((error) => {
    console.error("Failed to connect to the database.", error);
  });

//routes CRUD OPERATION
app.get("/", async (req, res) => {
  await prisma.user
    .findMany()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  await prisma.user
    .findFirst({
      where: { id: Number(id) },
    })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/user", async (req, res) => {
  const { name } = req.body;
  const user = await prisma.user.create({
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
  console.log(`Server listening on port ${port}`);
});
