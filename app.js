const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connection Successful..."))
  .catch((err) => console.log(err));

// What is schema?
// A mongoose schema defines the structure of the document, default values, validators, etc.

// defining schema
const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ctype: String,
  videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    default: Date.now,
  },
});

// Model -> A mongoose model is a wrapper on the Mongoose schema.
// A mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc.

// Use Pascal Case(Capital) for collection creation
const Playslist = new mongoose.model("Playlist", playListSchema);

// Creating/Inserting Document

const createDocument = async () => {
  try {
    const jsPlaylist = new Playslist({
      name: "JavaScript",
      ctype: "Front End",
      videos: 90,
      author: "Thapa Technical",
      active: true,
    });

    const mongoPlaylist = new Playslist({
      name: "Mongo DB",
      ctype: "Database",
      videos: 20,
      author: "Thapa Technical",
      active: true,
    });

    const mongoosePlaylist = new Playslist({
      name: "Mongoose",
      ctype: "Database",
      videos: 25,
      author: "Thapa Technical",
      active: true,
    });

    const expressPlaylist = new Playslist({
      name: "Express",
      ctype: "Back End",
      videos: 20,
      author: "Thapa Technical",
      active: true,
    });

    const result = await Playslist.insertMany([
      jsPlaylist,
      mongoPlaylist,
      mongoosePlaylist,
      expressPlaylist,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
