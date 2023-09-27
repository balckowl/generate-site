import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3000;

mongoose.connect("mongodb+srv://taihei2313:OQKwI5ojQ3ciUhxr@cluster0.bv2x9ag.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected to MongoDB"))


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})