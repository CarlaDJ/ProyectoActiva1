"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
exports.findReceiveRewards = exports.findStudentsFiltered = exports.findOneStudent = exports.findAllStudents = exports.createStudent = exports.findRewards = exports.addNewReward = void 0;
=======
exports.findUserRankingPosition = exports.findRankingTop5 = exports.findStudentsFiltered = exports.findOneStudent = exports.findAllStudents = exports.createStudent = exports.findRewards = exports.findReceivedRewards = exports.addNewReward = exports.findSocialHistory = void 0;
>>>>>>> cec4f5d16908dc058ce930b051b9c635435fdb5b
const config_js_1 = require("../../config.js");
function findSocialHistory(callback) {
    const queryString = "select SN1.xp_points, SN1.description, SN1.date, SN1.rewarded_name, SN1.rewarded_first_surname, S2.first_surname as sender_first_surname, S2.name as sender_name from (select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name as rewarded_name, s.first_surname as rewarded_first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id) as SN1 inner join student S2 on SN1.id_user_sender = S2.id ORDER by SN1.date desc limit 10";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
exports.findSocialHistory = findSocialHistory;
function addNewReward(reward, callback) {
    const queryString = "INSERT INTO reward (id_user_sender, id_user_rewarded, xp_points, date, description) VALUES (?, ?, ?, ?, ?)";
    config_js_1.db.query(queryString, [reward.idUserSender, reward.idUserRewarded, reward.xpPoints, reward.date, reward.description], (err, result) => {
        if (err) {
            callback(err, null);
        }
        else {
            const insertId = result.insertId;
            callback(null, insertId);
        }
    });
}
exports.addNewReward = addNewReward;
;
function findUserRankingPosition(currentUserId, callback) {
    const queryString = "select * from (select *, ROW_NUMBER() OVER (ORDER BY (SELECT 1)) as position from (select r.id_user_rewarded, sum(r.xp_points) as all_xp_points, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id group by r.id_user_rewarded order by all_xp_points DESC) as SN1) as SN2 where SN2.id_user_rewarded = ?";
    config_js_1.db.query(queryString, [currentUserId], (err, result) => {
        if (err) {
            callback(err, null);
        }
        else {
            const rankingDetails = result[0];
            callback(null, rankingDetails);
        }
    });
}
exports.findUserRankingPosition = findUserRankingPosition;
function findRewards(currentUserId, callback) {
    const queryString = "select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id where r.id_user_sender = ? order by date DESC";
    config_js_1.db.query(queryString, [currentUserId], (err, result) => {
        if (err)
            callback(err, null);
        const rewards = result;
        callback(null, rewards);
    });
}
exports.findRewards = findRewards;
<<<<<<< HEAD
function findReceiveRewards(currentUserId, callback) {
    const queryString = "select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id where r.id_user_sender = ? order by date DESC";
=======
function findReceivedRewards(currentUserId, callback) {
    const queryString = "select r.id_user_sender, r.id_user_rewarded, r.xp_points, r.description, r.date, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id where r.id_user_rewarded = ? order by date DESC";
>>>>>>> cec4f5d16908dc058ce930b051b9c635435fdb5b
    config_js_1.db.query(queryString, [currentUserId], (err, result) => {
        if (err)
            callback(err, null);
        const rewards = result;
        callback(null, rewards);
    });
}
<<<<<<< HEAD
exports.findReceiveRewards = findReceiveRewards;
=======
exports.findReceivedRewards = findReceivedRewards;
function findRankingTop5(callback) {
    const queryString = "select r.id_user_rewarded, sum(r.xp_points) as all_xp_points, s.name, s.first_surname from reward as r inner join student as s on r.id_user_rewarded = s.id group by r.id_user_rewarded order by all_xp_points DESC limit 5";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const ranking = result;
        callback(null, ranking);
    });
}
exports.findRankingTop5 = findRankingTop5;
>>>>>>> cec4f5d16908dc058ce930b051b9c635435fdb5b
function createStudent(student, callback) {
    const queryString = "INSERT INTO student (name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code) VALUES (?, ?, ?, ?, ?, ?, ?)";
    config_js_1.db.query(queryString, [student.name, student.firstSurname, student.secondSurname, student.personalEmailAddress, student.activaEmailAddress, student.phoneNumber, student.zipCode], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const insertId = result.insertId;
        callback(null, insertId);
    });
}
exports.createStudent = createStudent;
;
function findAllStudents(callback) {
    const queryString = "SELECT id, name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
exports.findAllStudents = findAllStudents;
function findOneStudent(id, callback) {
    const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code FROM student WHERE id = ?";
    config_js_1.db.query(queryString, [id], (err, result) => {
        if (err) {
            callback(err, null);
        }
        ;
        const studentFound = result[0];
        callback(null, studentFound);
    });
}
exports.findOneStudent = findOneStudent;
function findStudentsFiltered(callback) {
    const queryString = "SELECT name, first_surname, second_surname, email_personal, email_activa, phone_number, zip_code " +
        "FROM student " +
        "WHERE second_surname is not null and email_personal like '%@gmail.com'";
    config_js_1.db.query(queryString, (err, result) => {
        if (err)
            callback(err, null);
        const students = result;
        callback(null, students);
    });
}
exports.findStudentsFiltered = findStudentsFiltered;
