const router = require('express').Router();
const Workout = require('../../models/Workout');

// Get last workout
router.get('/workouts', async (req, res) => {
    try{
        const lastWorkout = await Workout.find({}).sort({ date: -1 }).limit(1);
        if(lastWorkout) {
            res.status(200).json(lastWorkout);
        } else {
            res.status(404).json({ response: "There are no workouts :("});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ response: "Something went wrong :(", error: err});
    }
});

// Add exercise
router.put('/workouts', async (req, res) => {
    // TODO
});

// Create Workout
router.post('/workouts', async (req, res) => {
    try {
        const workout = await Workout.create(req.body);
        res.status(200).json(workout);
    } catch (err) {
        console.log(err);
        res.status(500).json({response: "Something went wrong :(", error: err});
    }
});

// Get workouts in range (no range specified, present all workouts)
router.get('/workouts/range', async (req, res) => {
    // TODO
});

module.exports = router;