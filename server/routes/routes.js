import express from 'express'

import { addUser, giveRandomPoints } from '../controllers/claimController.js'
import { getLeaderboard } from '../controllers/leaderboard.js';


const router = express.Router();


router.post('/add-user',addUser)
router.post('/give-points',giveRandomPoints)
router.get('/get-leaderboard',getLeaderboard)
export default router

