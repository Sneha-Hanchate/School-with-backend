var db = require("../dbConnection");

var Notes = {
  // getAllPresentAddressById: function (id2, callback) {
  //   return db.query(
  //     "select * from presentaddress where empno=?",
  //     [id2],
  //     callback
  //   );
  // },

  getAllNotes: function (callback) {
    return db.query("select * from notes", callback);
  },

  addNotes: function (object, callback) {
    return db.query(
      "insert into notes values(?,?,?,?,?,?,?,?,?)",
      [
        null,
        object.std,
        object.division,
        object.note,
        object.pdf,
        object.img,
        object.subject,
        object.givendate,
        object.teachername,
      ],
      callback
    );
  },

  deleteNotes: function (id, callback) {
    return db.query("delete from notes where id=?", [id], callback);
  },

  editNotes: function (object, id, callback) {
    return db.query(
      "update notes set std=?, division=?, note=?, pdf=?, img=?, subject=?, givendate=?, teachername=? where id=?",
      [
        object.std,
        object.division,
        object.note,
        object.pdf,
        object.img,
        object.subject,
        object.givendate,
        object.teachername,
        id,
      ],
      callback
    );
  },
};
module.exports = Notes;
