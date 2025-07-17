import express from 'express'

import { addUser, giveRandomPoints } from '../controllers/claimController.js'


const router = express.Router();


router.post('/add-user',addUser)
router.post('/give-points',giveRandomPoints)

export default router

