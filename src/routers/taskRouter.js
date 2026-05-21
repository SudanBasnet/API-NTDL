import express from "express";
import mongoose from "mongoose";

const router = express.Router();
// router.all("/", (req, res, next) => {

//   //do your code
//   //   res.json({
//   //     message: "success",
//   //     status: "response from all",
//   //   });
//   next();
// });

//!database table selecting

const taskSchema = new mongoose.Schema({}, { strict: false });
const taskCollection = mongoose.model("Task", taskSchema);

//* schema creating

//!Create item
router.post("/", async (req, res, next) => {
  //do your code
  //? insert task
  console.log(req.body, "------");

  const result = await taskCollection(req.body).save();
  console.log(result);
  console.log(req.body);
  res.json({
    message: "success",
    status: "New Task has been added Successfully",
  });
});

router.get("/", async (req, res, next) => {
  //do your code
  //db.c.find()
  const tasks = await taskCollection.find();
  res.json({
    message: "success",
    status: "response from get",
    tasks,
  });
});

router.patch("/", async (req, res, next) => {
  //do your code
  const { _id, ...rest } = req.body;
  console.log(req.body);
  const result = await taskCollection.findByIdAndUpdate(_id, rest);
  res.json({
    message: "success",
    status: "response from put: your task has been updated successfully",
  });
});

//!delete
router.delete("/:_id", async (req, res, next) => {
  //do your code
  const { _id } = req.params;
  console.log(typeof id);
  const result = await taskCollection.findByIdAndDelete(_id);

  res.json({
    message: "success",
    status: "response from delete",
    result,
  });
});

export default router;
