var db = require("../dbConnection");

var Mark = {
  // getAllPresentAddressById: function (id2, callback) {
  //   return db.query(
  //     "select * from presentaddress where empno=?",
  //     [id2],
  //     callback
  //   );
  // },

  getAllMark: function (callback) {
    return db.query("select * from mark", callback);
  },

  addMark: function (object, callback) {
    return db.query(
      "insert into mark values(?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        null,
        object.std,
        object.division,
        object.rollno,
        object.name,
        object.subject,
        object.completeddate,
        object.outofmark,
        object.obtainedmark,
        object.mobileno,
        object.teachername,
        object.papername,
      ],
      callback
    );
  },

  deleteMark: function (id, callback) {
    return db.query("delete from mark where id=?", [id], callback);
  },

  editMark: function (object, id, callback) {
    return db.query(
      "update mark set std=?, division=?, rollno=?, name=?, subject=?, completeddate=?, outofmark=?, obtainedmark=?,mobileno=?, teachername=?, papername=? where id=?",
      [
        object.std,
        object.division,
        object.rollno,
        object.name,
        object.subject,
        object.completeddate,
        object.outofmark,
        object.obtainedmark,
        object.mobileno,
        object.teachername,
        object.papername,
        id,
      ],
      callback
    );
  },
};
module.exports = Mark;
