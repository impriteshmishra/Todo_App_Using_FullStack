/*
import mongoose from './node_modules/mongoose/types/index.d';
title: string,
description: string,
completed: boolean
 */

const mongoose = require("mongoose");
// const { String } = require("zod");
// mongodb url handle
//mongodb+srv://priteshmishra2125:HAfV8bgigMbakzQL@cluster0.gs66wbm.mongodb.net/todo-app
mongoose.connect("mongodb+srv://priteshmishra2125:HAfV8bgigMbakzQL@cluster0.gs66wbm.mongodb.net/todo-app").then(function(i){
    console.log(`databse is connected to ${i.connection.host}`);
})
const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const todo = mongoose.model("todos", todoSchema);

module.exports={
    todo
}