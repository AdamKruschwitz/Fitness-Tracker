const router = require('express').Router();
const Workout = require('../../models/Workout');
const ObjectId = require('mongoose').Types.ObjectId;

// Get last workout
router.get('/workouts', async (req, res) => {
    try{
        const lastWorkout = await Workout.findOne({}).sort({ date: -1 }).limit(1);
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
router.put('/workouts/:id', async (req, res) => {
    try {
        // get the workout
        const workout = await Workout.findOne({"_id": new ObjectId(req.params.id)});
        if(workout) {
            workout.exercises.push(req.body);
            workout.markModified("exercises");
            console.log(workout);
            const workoutResult = await workout.save();
            console.log(workoutResult);
            res.status(200).json(workout);
        } else {
            res.status(404).json({response: "That workout doesn't exist :("});
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({response: "Something went wrong :(", error: err});
    }
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
// Needs: 
router.get('/workouts/range', async (req, res) => {
    try {
        const workouts = await Workout.find();
        res.status(200).json(workouts);
    } catch (err) {
        res.status(500).json({response: "Something went wrong :(", error: err});
    }
});

module.exports = router;