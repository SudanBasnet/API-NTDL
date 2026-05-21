import express from "express";
import {
  deleteTask,
  getTask,
  insertTask,
  updateTask,
} from "../models/taskModel/taskSchema.js";

const router = express.Router();

//!Create item
router.post("/", async (req, res, next) => {
  try {
    //do your code
    //? insert task

    const result = await insertTask(req.body);
    console.log(result);
    // console.log(req.body);
    res.json({
      message: "success",
      status: "New Task has been added Successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.get("/", async (req, res, next) => {
  //do your code
  //db.c.find()
  const tasks = await getTask();
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
  const result = await updateTask(_id, rest);
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
  const result = await deleteTask(_id);

  res.json({
    message: "success",
    status: "response from delete",
    result,
  });
});

export default router;
