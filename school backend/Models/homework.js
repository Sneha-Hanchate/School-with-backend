var db = require("../dbconnection");

var Homework = {
  getAllPresentAddressById: function (id, callback) {
    return db.query("select * from homework where id=?", [id], callback);
  },

  getAllhomework: function (callback) {
    return db.query("select * from homework", callback);
  },

  addhomework: function (object, callback) {
    return db.query(
      "insert into homework values(?,?,?,?,?,?,?,?)",
      [
        null,
        object.std,
        object.division,
        object.note,
        object.subject,
        object.givendate,
        object.enddate,
        object.teachername,
      ],
      callback
    );
  },

  deletehomework: function (id, callback) {
    return db.query("delete from homework where id=?", [id], callback);
  },

  edithomework: function (object, id, callback) {
    return db.query(
      "update homework set std=?, division=?, note=?, subject=?, givendate=?, enddate=?, teachername=? where id=?",
      [
        object.std,
        object.division,
        object.note,
        object.subject,
        object.givendate,
        object.enddate,
        object.teachername,
        id,
      ],
      callback
    );
  },
};
module.exports = Homework;
