import { MongoClient } from "mongodb";

const ATLAS_URI = "mongodb+srv://Aditya:fTNzi1BR4YM4V4Lk@personalwebsite.zxkuyna.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(ATLAS_URI);
const db = client.db("Personal-Website")
const col = db.collection("skills")

export const MAIN_DATA = [];
async function mongoRetrieve(title) {
    const filteredDoc = await col.findOne({ "title": title });
    return filteredDoc
}

//methods call
async function mongoInitialize(){
  await client.connect();
}

async function run(){
  try {
    await mongoInitialize();
    const skills = await mongoRetrieve("skills")
    MAIN_DATA.push(skills)
    console.log("Success✅")
  }
  finally {
    await client.close();
  }
}

run();