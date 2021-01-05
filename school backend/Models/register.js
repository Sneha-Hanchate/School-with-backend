var db = require("../dbConnection");

var Register = {
  getAllRegisterById: function (mobile, password, callback) {
    return db.query(
      "select * from register where mobile=? AND password=?",
      [mobile, password],
      callback
    );
  },
  getAllRegisterByName: function (mobile, name, std, callback) {
    return db.query(
      "select * from register where mobile=? OR name=? AND std=?",
      [mobile, name, std],
      callback
    );
  },

  getAllRegister: function (callback) {
    return db.query("select * from register", callback);
  },

  addRegister: function (object, callback) {
    return db.query(
      "insert into register values(?,?,?,?,?,?,?,?,?,?,?)",
      [
        null,
        object.std,
        object.division,
        object.name,
        object.address,
        object.rollno,
        object.dob,
        object.mobile,
        object.email,
        object.photo,
        object.password,
      ],
      callback
    );
  },

  deleteRegister: function (id, callback) {
    return db.query("delete from register where id=?", [id], callback);
  },

  editRegister: function (object, id, callback) {
    return db.query(
      "update register set std=?, division=?, name=?, address=?, rollno=?, dob=?, mobile=?,email=?, photo=?, password=? where id=?",
      [
        object.std,
        object.division,
        object.name,
        object.address,
        object.rollno,
        object.dob,
        object.mobile,
        object.email,
        object.photo,
        object.password,
        id,
      ],
      callback
    );
  },
};
module.exports = Register;
