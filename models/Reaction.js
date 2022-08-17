const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');


const reactionSchema = new mongoose.Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      date: Date,
      //default: Date.now
    },
    toJSON: {
      getters: false,
    },
    id: false,
  }
);




// const Reaction = mongoose.model('Reaction', reactionSchema);

// const handleError = (err) => console.error(err);

// Reaction.getTimestamp(`${createdAt}`, (err) =>
//   err ? handleError(err) : console.log('no timestamp found')
// );



module.exports = reactionSchema;
