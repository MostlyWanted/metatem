require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');

const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    useTempFiles:true

}))

//connect MONGODB

const URI = process.env.MONGO_URL;

mongoose.connect(URI, {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});

//routes
app.use('/', require('./routes/contactRoute'));
app.use('/user', require('./routes/userRoute'));
app.use('/', require('./routes/aboutRoute'));
app.use('/', require('./routes/servicesRoute'));
app.use('/', require('./routes/ourworkRoute'));
app.use('/', require('./routes/projectRoute'));
app.use('/', require('./routes/upload'));



PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log(`server listening on port:${PORT}`);
})

