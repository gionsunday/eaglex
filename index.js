require('dotenv').config()
require('express-async-errors')
const cors = require('cors')
const nodeMailer = require('nodemailer')

const express= require('express')
const path = require('path')
const app = express()

//middleware
const notFoundMiddleware = require('./middleware/notfound')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const authenticateUser =  require('./middleware/auth')
const connectDB = require('./db/dbCon')
 
//transporter


//routes
const authRouter =  require('./routes/AuthRoutes')
const bioRouter = require('./routes/bio')
const positionRouter = require('./routes/positions')
const experienceRouter = require('./routes/experience')
const pictureRouter = require('./routes/pictures')
const insightPubRouter = require('./routes/insight_publications')
const activeAffiliateRouter = require('./routes/activities_affiliations')

app.use('/', express.static(path.join(__dirname,'public')))
app.use(express.json())

app.use(cors())

app.use('/eaglex', authRouter)
app.use('/eaglex/bio', bioRouter)
app.use('/eaglex/positions', positionRouter)
app.use('/eaglex/experience', experienceRouter)
app.use('/eaglex/pictures', pictureRouter)
app.use('/eaglex/insight_publications', insightPubRouter)
app.use('/eaglex/activities_affiliations', activeAffiliateRouter)


//errorhandllers
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


const port = process.env.PORT || 8000
const start = async () =>{
    await connectDB(process.env.CONNECTION_STRING)
    try {
        app.listen(port, console.log(`Server is Live at port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()
