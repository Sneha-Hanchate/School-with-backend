var express = require("express");
var router = express.Router();
var Notice = require("../Models/notice");

// router.get("/:id2?", function (req, res, next) {
//   if (req.params.id2) {
//     Notice.getAllNoticeById(
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
//     Notice.getAllNotice(function (err, rows) {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(rows);
//       }
//     });
//   }
// });

router.get("/", function (req, res, next) {
  Notice.getAllNotice(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function (req, res, next) {
  Notice.addNotice(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:id", function (req, res, next) {
  Notice.deleteNotice(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id", function (req, res, next) {
  Notice.editNotice(req.body, req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
