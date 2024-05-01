const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      require: true,
      trimmed: true,
    },

    email: {
      type: String,
      require: true,
      unique: true,
      match: [/.+@.+\..+/],
    },

    thoughts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "thought",
      },
    ],

    friends: [
      {
        type: mongoose.Schema.type.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
