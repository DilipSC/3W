import express from 'express'
import User from '../models/models.js'


export async function getLeaderboard(req,res){
    try{
        const user =  await User.find().sort({points:-1})
        res.status(200).json({
            "message":"Ok",
            users:user
        })
    }
    catch(e){
        console.log(`Error: ${e}`)
        res.status(500).json({"message":e})
    }
}