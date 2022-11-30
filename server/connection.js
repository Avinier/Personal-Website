const { MongoClient } = require("mongodb");

ATLAS_URI =
  "mongodb+srv://Aditya:fTNzi1BR4YM4V4Lk@personalwebsite.zxkuyna.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(ATLAS_URI);

async function run() {
  try {
    await client.connect();

    const database = client.db("Personal-Website");
    const skillsCollection = database.collection("skills");

    const query = { title: "skills" };
    const skills = await skillsCollection.find(query);

    console.log(skills);

    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
