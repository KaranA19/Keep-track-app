import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv' 
 dotenv.config({ path : "./config.env"})

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(process.env.Atlas || "mongodb://localhost:27017/richDb",{ useNewUrlParser: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
