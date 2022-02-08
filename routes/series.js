const { Router } = require("express");
const { check } = require("express-validator");
const {
  getAllSeries,
  getAllSeriesCMS,
  uploadSerieImg,
  getAllSeriesArko,
  getAllSeriesCMSArko,
  disableAllseries,
} = require("../controllers/serie");
const { validateCampos } = require("../middlewares/validateCampos");
const { validateJwt } = require("../middlewares/validateJwt");

const router = Router();

router.get("/", getAllSeries);

router.get("/cms", getAllSeriesCMS);

router.get("/arko", getAllSeriesArko);

router.get("/cms/arko", getAllSeriesCMSArko);

router.get("/disabledall", [], disableAllseries);

//? azure
// router.post(
//   "/upload-img",
//   [validateCampos],
//   uploadSerieImg
// );


module.exports = router;
