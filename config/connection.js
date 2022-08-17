const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||
   'mongodb://127.0.0.1:27017/socialMedia',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;


// const { connect, connection } = require('mongoose');

// const connectionString =
//   process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

// connect(connectionString, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = connection;
