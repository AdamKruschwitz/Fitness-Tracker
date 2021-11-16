const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date().getDate(),
    },
    exercises: {
        type: mongoose.SchemaTypes.Mixed,
        default: [],
    }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;