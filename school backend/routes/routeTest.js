var express = require("express");
var router = express.Router();
var Test = require("../Models/test");

// router.get("/:id2?", function (req, res, next) {
//   if (req.params.id2) {
//     Test.getAllTestById(
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
//     Test.getAllTest(function (err, rows) {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(rows);
//       }
//     });
//   }
// });

router.get("/", function (req, res, next) {
  Test.getAllTest(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function (req, res, next) {
  Test.addTest(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:id", function (req, res, next) {
  Test.deleteTest(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id", function (req, res, next) {
  Test.editTest(req.body, req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
