import mongoose from "mongoose";
import User from "../models/models.js";

export async function addUser(req,res){
    try{
        const {username} = req.body
    
    if(!username){
        res.status(400).json({"message":"Username required"})
    }

    const user = new User({
        username,
        points:0
    })

    await user.save()

    res.status(201).json({"message":"Ok","user":user})
    }
    catch(e){
        console.log(`Error : ${e}`)
        res.status(500).json({"error":"server error"})
    }
}