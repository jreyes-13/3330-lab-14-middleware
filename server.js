import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) =>{
  res.sendFile("index.html");
});

app.post("/users", (req, res) => { 
  console.log("json", req.body); 
  res.send(`Hello, ${req.body.name}`);

});

app.post('/users-form', (req, res) => { 
  console.log("form: ", req.body);
  res.send(`Hello, ${req.body.name}`);
});

app.listen(port, ()=> {
    console.log(`Server started listening on port ${port}`);
});