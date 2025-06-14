import express from 'express'
import { sql } from '../config/db.js'
import {createTransactions, getTransactionsByUserId, deleteTransactions, getSummaryByUserId} from '../controllers/transactionController.js'

const router = express.Router()

router.get("/:userId" , getTransactionsByUserId);

router.post('/' , createTransactions)

router.delete('/:id', deleteTransactions )

router.get('/summary/:userId', getSummaryByUserId )

export default router;