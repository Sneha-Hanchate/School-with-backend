var db = require("../dbConnection");

var Test = {
  // getAllPresentAddressById: function (id2, callback) {
  //   return db.query(
  //     "select * from presentaddress where empno=?",
  //     [id2],
  //     callback
  //   );
  // },

  getAllTest: function (callback) {
    return db.query("select * from test", callback);
  },

  addTest: function (object, callback) {
    return db.query(
      "insert into test values(?,?,?,?,?,?,?,?,?)",
      [
        null,
        object.std,
        object.division,
        object.note,
        object.subject,
        object.papername,
        object.givendate,
        object.enddate,
        object.teachername,
      ],
      callback
    );
  },

  deleteTest: function (id, callback) {
    return db.query("delete from test where id=?", [id], callback);
  },

  editTest: function (object, id, callback) {
    return db.query(
      "update test set std=?, division=?, note=?, subject=?, papername=?, givendate=?, enddate=?, teachername=? where id=?",
      [
        object.std,
        object.division,
        object.note,
        object.subject,
        object.papername,
        object.givendate,
        object.enddate,
        object.teachername,
        id,
      ],
      callback
    );
  },
};
module.exports = Test;
