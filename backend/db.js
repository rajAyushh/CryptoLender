const mongoose = require('mongoose')
const db = "mongodb+srv://ashwin:Atlas0512@cluster0.2z2fuz5.mongodb.net/Bookstore?retryWrites=true&w=majority"

async function connectDB() {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })

    console.log('MongoDB Atlas connected...')
  } catch (error) {
    console.error(error.message)
    process.exit(1)
  }
}

module.exports = connectDB