const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://youcode:salmonpoke@youcode24.7yn1u39.mongodb.net/?retryWrites=true&w=majority&appName=youcode24";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const youcode = client.db("youcode24");
const meal_log = youcode.collection("meal_log");
const ai_log = youcode.collection("ai_log");

async function connectMongoDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    //do actions here
    //await addEntryToMongoDB();

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
//call connectMongoDB
connectMongoDB().catch(console.dir);

async function addEntryToMealLog(mealType_str, date_date, mealContent_str, moodTags_str, reflection_str) {
    const doc = { mealType: mealType_str, date: date_date, mealContent: mealContent_str, moodTags: moodTags_str, 
        reflection: reflection_str };
    const result = await meal_log.insertOne(doc);
    console.log(
       `A document was inserted with the _id: ${result.insertedId}`,
    );
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




