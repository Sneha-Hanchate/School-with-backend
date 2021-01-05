var express = require("express");
var router = express.Router();
var Mark = require("../Models/mark");

// router.get("/:id2?", function (req, res, next) {
//   if (req.params.id2) {
//     Mark.getAllMarkById(
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
//     Mark.getAllMark(function (err, rows) {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(rows);
//       }
//     });
//   }
// });

router.get("/", function (req, res, next) {
  Mark.getAllMark(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function (req, res, next) {
  Mark.addMark(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:id", function (req, res, next) {
  Mark.deleteMark(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id", function (req, res, next) {
  Mark.editMark(req.body, req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
