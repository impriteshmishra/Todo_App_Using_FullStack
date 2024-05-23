//express boilerplate code,
// with express.json() middleware

const express = require('express');
const { createTodo, updateTodo} = require("./backend-todo/types.js");
const {todo}=require("./backend-todo/database.js");
const app = express();

app.use(express.json());

app.post("/todo", async function(req,res){
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong input",
        })
        return;
    }
    //put it in mongodb
   await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })

})

app.get("/todos", async function(req,res){
    const todos = await todo.find({});
    // console.log(todos); //promises
    res.json({
        todos
    })
})

app.put("/completed", async function(req,res){
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong input",
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },
    {
        completed: true
    });
    res.json({
        msg: "Todo marked as completed."
    })

})

app.listen(3000);