var db = require("../dbConnection");

var Notice = {
  // getAllPresentAddressById: function (id2, callback) {
  //   return db.query(
  //     "select * from presentaddress where empno=?",
  //     [id2],
  //     callback
  //   );
  // },

  getAllNotice: function (callback) {
    return db.query("select * from notice", callback);
  },

  addNotice: function (object, callback) {
    return db.query(
      "insert into notice values(?,?,?,?,?,?,?,?)",
      [
        null,
        object.std,
        object.division,
        object.note,
        object.subject,
        object.givendate,
        object.img,
        object.teachername,
      ],
      callback
    );
  },

  deleteNotice: function (id, callback) {
    return db.query("delete from notice where id=?", [id], callback);
  },

  editNotice: function (object, id, callback) {
    return db.query(
      "update notice set std=?, division=?, note=?, subject=?, givendate=?, img=?, teachername=? where id=?",
      [
        object.std,
        object.division,
        object.note,
        object.subject,
        object.givendate,
        object.img,
        object.teachername,
        id,
      ],
      callback
    );
  },
};
module.exports = Notice;
