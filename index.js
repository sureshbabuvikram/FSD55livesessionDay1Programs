import express from 'express';

const app= express();
const PORT=4000;   //http://localhost:4000

app.get('/', (req,res)=>{
    res.status(200).json({message:"Hai my dear team, we will become a FSD Developer"})
})
app.get('/get-data', (req,res)=>{
    res.status(200).json({message:"data", data:{name:"suresh"}})
})
app.listen(PORT, ()=>{
    console.log(`App is running in the port  ${PORT}`);
}) // running

 