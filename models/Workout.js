const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    date: {
        type: Date,
        default: Date.now,
    },
    // Duration in minutes
    totalDuration: {
        type: Number,
    },
    numExercises: {
        type: Number
    },
    totalWeight: {
        type: Number
    },
    totalSets: {
        type: Number
    },
    totalReps: {
        type: Number
    },
    totalDistance: {
        type: Number
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;