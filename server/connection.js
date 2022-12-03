const { MongoClient } = require("mongodb");

ATLAS_URI = "mongodb+srv://Aditya:fTNzi1BR4YM4V4Lk@personalwebsite.zxkuyna.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(ATLAS_URI);
const db = client.db("Personal-Website")
const col = db.collection("skills")

async function mongoRetrieve(title) {
    const filteredDoc = await col.findOne({ "title": title });
    return filteredDoc
}

//methods call
async function mongoInitialize(){
  await client.connect();
}

async function run(){
  await mongoInitialize();
  const skills = await mongoRetrieve("skills")
  console.log(JSON.stringify(skills))
}

run();