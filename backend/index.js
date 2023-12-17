// index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://hassaanqaisar2:I1bYIsoY7AJK4hev@cluster0.i6519ta.mongodb.net/weblab', 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  ghLink: String,
  demoLink: String,
});

const Project = mongoose.model('Project', projectSchema);

app.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
