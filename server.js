// GET /notes for returning the html file
const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
 res.sendFile(path.join(__dirname, '/db/db.json'))
}
);
app.post('/api/notes', (req, res) => {
  console.log(req.body);
  const { title, text } = req.body;
  if (req.body) {
    const newTip = {
      title,
      text
    };
    fs.readFileSync('/db/db.json').then((data) => res.json(JSON.parse(data)));
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
}
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

//`GET *` should return index.html
// Load the file(db.json) from line 16
// Modify the contents (add notes to the array). Note is in the body
// Save changed array into the db.json file.