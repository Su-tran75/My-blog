const express = require('express');
const db = require("./config/db");
const cors = require('cors');

const app = express();

const PORT = 8081;

app.use(express.json());
app.use(cors());

app.get('/api/get', (req, res) => {
  db.query("SELECT * FROM posts", (err, result) => {
    if (err) {
      console.log(err)
    }
    
    res.send(result)
  })
});

app.post('/api/create', (req, res) => {

  const title = req.body.title;
  const text = req.body.text;

  db.query(
    "INSERT INTO posts (post_title, post_text) VALUES (?,?)",[title, text], (err, result) => {
      if (err) {
        console.log(err)
      }
 
      console.log(result)
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})




// db.query(
//   "INSERT INTO posts (post_title, post_text, user_name) VALUES ('a title', 'afaagrzzr', 'Su')");