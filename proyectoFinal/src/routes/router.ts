import express from 'express';
import {insertStudent} from "../handlers/student/insertStudent.js";
import {getStudents} from '../handlers/student/getStudents.js';
import {getOneStudent} from '../handlers/student/getOneStudent.js';
import { getStudentsFiltered } from '../handlers/student/getStudentsFiltered.js';
import { checkLogin } from '../handlers/student/checkLogin.js';
import { addReward } from '../handlers/student/addReward.js';
import { getRewards } from '../handlers/student/getRewards.js';
<<<<<<< HEAD
import { getReceiveRewards } from '../handlers/student/getReceivedReward.js';
=======
import { getReceivedRewards } from '../handlers/student/getReceivedRewards.js';
import { getRankingTop5 } from '../handlers/student/getRanking.js';
import { getUserRankingPosition } from '../handlers/student/getUserRankingPosition.js';
import { getSocialHistory } from '../handlers/student/getSocialHistory.js';
>>>>>>> cec4f5d16908dc058ce930b051b9c635435fdb5b

const router = express.Router();

router.post("/students",insertStudent);

router.get("/students", getStudents);

router.get("/students/:id_student", getOneStudent);

router.get("/filtered", getStudentsFiltered);

router.post("/login", checkLogin);

router.post("/addreward", addReward);

router.post("/receivereward", getReceiveRewards);

router.get("/rewards", getRewards);

router.get("/received", getReceivedRewards);

router.get("/top5", getRankingTop5);

router.get("/currentpos", getUserRankingPosition);

router.get("/social", getSocialHistory);

export {router};