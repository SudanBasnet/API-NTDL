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

let fakeDB = [
  { id: 1, task: "coding", hr: 20, type: "entry" },
  { id: 2, task: "gaming", hr: 4, type: "entry" },
  { id: 3, task: "sleeping", hr: 7, type: "entry" },
];

//!Create item
router.post("/", (req, res, next) => {
  //do your code
  fakeDB.push(req.body);
  console.log(fakeDB);
  // console.log(req.body);
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
    tasks: fakeDB,
  });
});

router.patch("/", (req, res, next) => {
  console.log(req.body);
  //do your code
  const { id, type } = req.body;
  fakeDB = fakeDB.map((item) => {
    if (item.id === id) {
      item.type = type;
      return item;
    } else {
      return item;
    }
  });
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

  fakeDB = fakeDB.filter((item) => item.id !== +id);
  res.json({
    message: "success",
    status: "response from delete",
  });
});

export default router;
