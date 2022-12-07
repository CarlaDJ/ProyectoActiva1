"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const insertStudent_js_1 = require("../handlers/student/insertStudent.js");
const getStudents_js_1 = require("../handlers/student/getStudents.js");
const getOneStudent_js_1 = require("../handlers/student/getOneStudent.js");
const getStudentsFiltered_js_1 = require("../handlers/student/getStudentsFiltered.js");
const checkLogin_js_1 = require("../handlers/student/checkLogin.js");
const addReward_js_1 = require("../handlers/student/addReward.js");
const getRewards_js_1 = require("../handlers/student/getRewards.js");
<<<<<<< HEAD
const getReceivedReward_js_1 = require("../handlers/student/getReceivedReward.js");
=======
const getReceivedRewards_js_1 = require("../handlers/student/getReceivedRewards.js");
const getRanking_js_1 = require("../handlers/student/getRanking.js");
const getUserRankingPosition_js_1 = require("../handlers/student/getUserRankingPosition.js");
const getSocialHistory_js_1 = require("../handlers/student/getSocialHistory.js");
>>>>>>> cec4f5d16908dc058ce930b051b9c635435fdb5b
const router = express_1.default.Router();
exports.router = router;
router.post("/students", insertStudent_js_1.insertStudent);
router.get("/students", getStudents_js_1.getStudents);
router.get("/students/:id_student", getOneStudent_js_1.getOneStudent);
router.get("/filtered", getStudentsFiltered_js_1.getStudentsFiltered);
router.post("/login", checkLogin_js_1.checkLogin);
router.post("/addreward", addReward_js_1.addReward);
router.post("/receivereward", getReceivedReward_js_1.getReceiveRewards);
router.get("/rewards", getRewards_js_1.getRewards);
router.get("/received", getReceivedRewards_js_1.getReceivedRewards);
router.get("/top5", getRanking_js_1.getRankingTop5);
router.get("/currentpos", getUserRankingPosition_js_1.getUserRankingPosition);
router.get("/social", getSocialHistory_js_1.getSocialHistory);
