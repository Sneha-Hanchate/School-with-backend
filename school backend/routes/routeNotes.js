var express = require("express");
var router = express.Router();
var Notes = require("../Models/notes");

// router.get("/:id2?", function (req, res, next) {
//   if (req.params.id2) {
//     Notes.getAllNotesById(
//       req.params.id2,
//       function (err, rows) {
//         if (err) {
//           res.json(err);
//         } else {
//           res.json(rows);
//         }
//       }
//     );
//   } else {
//     Notes.getAllNotes(function (err, rows) {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(rows);
//       }
//     });
//   }
// });

router.get("/", function (req, res, next) {
  Notes.getAllNotes(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function (req, res, next) {
  Notes.addNotes(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:id", function (req, res, next) {
  Notes.deleteNotes(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id", function (req, res, next) {
  Notes.editNotes(req.body, req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
