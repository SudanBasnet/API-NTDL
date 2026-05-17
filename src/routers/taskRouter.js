import express from "express";

const router = express.Router();
// router.all("/", (req, res, next) => {
//   //do your code
//   //   res.json({
//   //     message: "success",
//   //     status: "response from all",
//   //   });
//   next();
// });

let fakeDB = [];
router.post("/", (req, res, next) => {
  //do your code
  fakeDB.push(req.body);
  console.log(fakeDB);
  console.log(req.body);
  res.json({
    message: "success",
    status: "response from post",
  });
});
router.get("/", (req, res, next) => {
  //do your code
  res.json({
    message: "success",
    status: "response from get",
  });
});

router.put("/", (req, res, next) => {
  //do your code
  res.json({
    message: "success",
    status: "response from put",
  });
});
router.delete("/", (req, res, next) => {
  //do your code
  res.json({
    message: "success",
    status: "response from delete",
  });
});

export default router;
