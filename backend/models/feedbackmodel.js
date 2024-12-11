const mongoose = require('mongoose')

const Feedback = mongoose.Schema({
    viewerName: String,
    email: {
        type: String,
        required: true
    },
    viewerGender: String,
    viewerFeedback: String,
    viewerNumber: Number
}, {
    timestamps: true
})


const Feedbackmodel = mongoose.model("feedback", Feedback)

module.exports = Feedbackmodel