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

//!Create item
router.post("/", (req, res, next) => {
  //do your code

  console.log(req.body);
  res.json({
    message: "success",
    status: "New Task has been added Successfully",
  });
});

router.get("/", (req, res, next) => {
  //do your code
  res.json({
    message: "success",
    status: "response from get",
    tasks: [],
  });
});

router.patch("/", (req, res, next) => {
  console.log(req.body);
  //do your code
  const { id, type } = req.body;
  console.log(id, type);
  res.json({
    message: "success",
    status: "response from put: your task has been updated successfully",
  });
});

//!delete
router.delete("/:id", (req, res, next) => {
  //do your code
  const { id } = req.params;
  console.log(typeof id);

  console.log(id);
  res.json({
    message: "success",
    status: "response from delete",
  });
});

export default router;
