import express from 'express';
import {
  getUsers,
  getUserFriends,
  addRemoveFriend,
} from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* Read */
router.get('/:id', verifyToken, getUsers);
router.get('/:id/friends', verifyToken, getUserFriends);

/* Update */
router.patch('/:id/friendID', verifyToken, addRemoveFriend);

export default router;