import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

const users = [
  { id: 1, name: "Ben" },
  { id: 2, name: "Eduardo" }
];

app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  res.send(`Hello, ${user.name}`);
});

app.listen(port, ()=> {
    console.log(`Server started listening on port ${port}`);
});

// POSTMAN test
// GET http://localhost:3000/users/1
// GET http://localhost:3000/users/9