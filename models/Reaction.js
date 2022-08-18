const { Schema, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');



const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
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
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
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
