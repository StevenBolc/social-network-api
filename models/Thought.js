const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max: 280
    },
    createdAt: {
      date: Date,
      default: Date.now
    },
    username: {
      type: String,
      required: true
    },
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'reaction',
      //reactionSchema
    }],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

postSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
