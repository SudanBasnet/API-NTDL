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
    result?._id
      ? res.json({
          status: "success",
          message: "New Task has been added Successfully",
        })
      : res.json({
          message: "error",
          status: "can not add task",
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
    status: "success",
    message: "Tasks fetched successfully",
    tasks,
  });
});

router.patch("/", async (req, res, next) => {
  try {
    const { _id, ...rest } = req.body;

    const result = await updateTask(_id, rest);
    result?.id
      ? res.json({
          status: "success",
          message: "updated successfully",
          result,
        })
      : res.json({
          status: "error",
          message: "unable to update the task,try again later",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

//!delete
router.delete("/", async (req, res, next) => {
  try {
    const result = await deleteTask(req.body);
    console.log(result);
    result?.deletedCount
      ? res.json({
          status: "success",
          message: "task has been deleted successfully",
        })
      : res.json({
          status: "error",
          message: "task was not deleted ",
        });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
  //do your code

  // console.log(typeof _id);
});

export default router;
