const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add an email']
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought',
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user',
    }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
     },
     id: false,
  }
);

userSchema.virtual('friendCount').get(function(){
  return this.friends.length;
});


const User = model('user', userSchema);

module.exports = User;








// app.get('/Thought', (req, res) => {
//   Thought.aggregate(
//     [
//       {
//         _id: thought,
//       },
//     ],
//     (err, result) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(result);
//       }
//     }
//   );

// });

// app.get('/User', (req, res) => {
//   User.aggregate(
//     [
//       {
//         _id: user,
//       },
//     ],
//     (err, result) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(result);
//       }
//     }
//   );

// })