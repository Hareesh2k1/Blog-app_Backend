const { default: mongoose } = require('mongoose');
mongoose.connect(process.env.url)
.then(()=>{
    console.log('connected to mongodb Sucesfully');
})
.catch(()=>{
    console.log('Error!!! Cannot connect to the database');
})