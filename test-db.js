const { MongoClient } = require('mongodb');

async function testConnection() {
  const uri = "mongodb+srv://nileagencyafrica_db_user:jf2y0dLmetfak6GI@cluster0.fl2ppdk.mongodb.net/nile_booking_2026";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("SUCCESS");
  } catch (e) {
    console.error("FAIL", e.message);
  } finally {
    await client.close();
  }
}

testConnection();
