const express = require("express");
const mongoose = require("mongoose");

const app = express();

const graphqlHTTP = require("express-graphql");

app.use("/graphql", graphqlHTTP({}));

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

mongoose.connect('mongodb://localhost:27017/merndb',
  {
    useUnifiedTopology: true
  }
).then(()=>console.log('connected'))