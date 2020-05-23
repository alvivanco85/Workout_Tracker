const router = require("express").Router();
const Fitness = require(`../models/index.js`);

router.post(`/api/workouts`, (req, res) => {
  Fitness.create({}).then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Fitness.findByIdAndUpdate(params.id, { $push: { exercises: body } }).then(
    (dbWorkouts) => {
      res.json(dbWorkouts);
    }
  );
});

router.get("/api/workouts", (req, res) => {
  Fitness.find().then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

router.get("/api/workouts/range", ({ query }, res) => {
  Fitness.find().then((dbWorkouts) => {
    res.json(dbWorkouts);
  });
});

module.exports = router;