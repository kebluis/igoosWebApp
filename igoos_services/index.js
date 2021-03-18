import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './src/routes/home.routes.js';


const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
app.use(express.urlencoded({ extended: true }));



const uri = "mongodb+srv://igoos-user-1:sayplease@igoos-cluster.4gwel.mongodb.net/igoos-website-database?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once('open', () => {
  console.log("success");
});

app.use("/api", router);

// Handle Production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

// listen on the port
app.listen(port, () => console.log(`Server running on port ${port}`));
