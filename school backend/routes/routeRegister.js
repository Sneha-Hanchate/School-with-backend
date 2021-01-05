var express = require("express");
var router = express.Router();
var Register = require("../Models/register");

router.get("/:mobile/:password", function (req, res, next) {
  if (req.params.mobile && req.params.password) {
    Register.getAllRegisterById(
      req.params.mobile,
      req.params.password,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } else {
    Register.getAllRegister(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});
router.get("/:mobile/:name/:std", function (req, res, next) {
  if (req.params.mobile && req.params.name && req.params.std) {
    Register.getAllRegisterByName(
      req.params.mobile,
      req.params.name,
      req.params.std,
      function (err, rows) {
        if (err) {
          res.json(err);
        } else {
          res.json(rows);
        }
      }
    );
  } else {
    Register.getAllRegister(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.get("/", function (req, res, next) {
  Register.getAllRegister(function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.post("/", function (req, res, next) {
  Register.addRegister(req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.delete("/:id", function (req, res, next) {
  Register.deleteRegister(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

router.put("/:id", function (req, res, next) {
  Register.editRegister(req.body, req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});
module.exports = router;
