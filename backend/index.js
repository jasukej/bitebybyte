const { MongoClient, ServerApiVersion } = require('mongodb');

const cohere = require("./cohere.js");
const cors = require('cors');

const uri = "mongodb+srv://youcode:salmonpoke@youcode24.7yn1u39.mongodb.net/?retryWrites=true&w=majority&appName=youcode24";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
let client = null;


let youcode = null;
let meal_log = null;
let ai_log = null;


async function connectMongoDB() {
  if (client){
    return;
  }
  try {
    // Connect the client to the server	(optional starting in v4.7)
    client = await MongoClient.connect(uri);
    await client.connect();

    youcode = client.db("youcode24");
    meal_log = youcode.collection("meal_log");
    ai_log = youcode.collection("ai_log");
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");

    //do actions here
    //await addEntryToMongoDB();
    // const entry = await addEntryToMealLog("dinner", new Date("2024-04-07"), "granola bar", "numb, happy", "i am hungry");
    // response = await cohere.getResponse("dinner", "granola bar", "numb, happy", "i am hungry");
    // console.log("CohereAI replies: " + response);
    // if we want to log the AI response in our database
    // await addEntryToAiLog(entry.insertedId, response);

  } catch (e) {
    console.log(e);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
//call connectMongoDB
// connectMongoDB().catch(console.dir);

async function formResponse(formData) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    await connectMongoDB();
    const entryID = await addEntryToMealLog(formData.mealType, Date(), formData.mealDescription, formData.mealFeeling.join(", "), formData.additionalNotes);
    response = await cohere.getResponse(formData.mealType, formData.mealDescription, formData.mealFeeling.join(", "), formData.additionalNotes);
    // await addEntryToAiLog(entryID, response);

    return response;

  } catch (e) {
    console.log({e})
  }  finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

async function addEntryToMealLog(mealType_str, date_date, mealContent_str, moodTags_str, reflection_str) {
  try {
    // await client.connect();
    const doc = {
      mealType: mealType_str, date: date_date, mealContent: mealContent_str, moodTags: moodTags_str,
      reflection: reflection_str
    };
    const result = await meal_log.insertOne(doc);
    console.log(
      `A document was inserted with the _id: ${result.insertedId}`,
    );

    return result.insertedId;

  } finally {
    // await client.close();
  }
}

async function removeEntryFromMealLog(mealType_str, date_date) {
    youcode.meal_log.findOneAndDelete({mealType: mealType_str, date: date_date});
}

async function returnAllEntriesMealLog() {
    var arr = [];
    const collectionElements = meal_log.find();
    for await (const doc of collectionElements) {
      arr.push({
        mealType: doc.mealType, 
        date: doc.date, 
        mealContent: doc.mealContent, 
        moodTags: doc.moodTags, 
        reflection: doc.reflection
      });
    }
    return arr;
}

async function addEntryToAiLog(input_id_objectid, response_str,) {
    const doc = { input_id: input_id_objectid, response: response_str };
    const result = await ai_log.insertOne(doc);
    console.log(
       `A document was inserted with the _id: ${result.insertedId}`,
    );
}

async function removeEntryFromAiLog(input_id_objectid) {
    youcode.ai_log.findOneAndDelete({input_id: input_id_objectid});
}

async function returnAllEntriesAiLog() {
    var arr = [];
    const collectionElements = ai_log.find();
    for await (const doc of collectionElements) {
      arr.push({
        input_id: doc.input_id, 
        response: doc.response
      });
    }
    return arr;
}





const port = 3001;

function start() {
  const express = require('express');
  const app = express();
  const bodyParser = require('body-parser');
  // let http = require('http').Server(app);
  //connectMongoDB().catch(console.dir);

  app.use(cors())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }));

  app.post('/api/form', async (req, res) => {
    console.log('Received POST request to /api/form');
    console.log(req.body);
    console.log('Printed body');
    const response = await formResponse(req.body);
    console.log(response);
    res.status(200).json(response);
  });

  app.get("/home", (req, res) => {
    console.log("yo");
    res.json({ message: "Hello from server!" });
  });

async function createFormHandler(req, res) {
  console.log(req.body);
  const formData = req.body;
  const response = await formResponse(formData);
  console.log(response);
  res.status(200).json(response);
}
  
  app.listen(port, () => {
    console.log('Backend server is running on port '+ port);
  // http.listen(app.get('port'), function() {
  //     console.log('listening on port', app.get('port'));
  });
}

start();