const express = require("express");
const {accessControl,defaultMiddleware} = require("./middleware")

const users = [
    { id:1, name:"Tacettin Kustu", place:"Adana"},
    { id:2, name:"Ali Kustu", place:"Ankara"},
]

const app = express();
const PORT = 5000;
app.use(express.json());

app.get("/users",[accessControl,defaultMiddleware],(req,res,next)=>{

    res.json({
        success: true,
        data: users
    });

});

app.post("/users",(req,res,next)=>{
    const user = req.body;
    users.push(user);
    res.json({
        success: true,
        data: users,
    });

});

app.put("/users/:id",(req,res,next)=>{
    const id = parseInt(req.params.id);
    for(let i= 0;i<users.length;i++){
        if(users[i].id===id){
            users[i]={
                ...users[i],
                ...req.body
            };
        }
    }
    res.json({
        success: true,
        data: users
    });

});

app.delete("/users/:id",(req,res,next)=>{
    const id = parseInt(req.params.id);
    for(let i= 0;i<users.length;i++){
        if(users[i].id===id){
            users.splice(i,1)
        }
    }

    res.json({
        success: true,
        data: users
    });

})

app.listen(PORT, ()=>{
    console.log("Server Started Port: " + PORT)
})