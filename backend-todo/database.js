/*
import mongoose from './node_modules/mongoose/types/index.d';
title: string,
description: string,
completed: boolean
 */

const mongoose = require("mongoose");
const { String } = require("zod");
// mongodb url handle
//mongodb+srv://priteshmishra2125:HAfV8bgigMbakzQL@cluster0.gs66wbm.mongodb.net/todo-app
mongoose.connect("mongodb+srv://priteshmishra2125:HAfV8bgigMbakzQL@cluster0.gs66wbm.mongodb.net/todo-app");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports={
    todo
}