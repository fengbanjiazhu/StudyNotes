---
sidebar_position: 4
---

# 数据库

使用了 Mongoose 链接 MongoDB，与之前 MERN Stack 的操作类似。

起初我以为是不同的，结果就是在 graphQL 中，使用 Model 来操作数据库。

即使用 `Model.find()` 读取，使用 `Model.create()` 创建。

## 链接数据库

```JS title="App.js"
const express = require("express");

const app = express();

...

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<password>", process.env.DATABASE_PASSWORD);

mongoose
  .connect(DB, {
    // some options
    dbName: "graphQL",
  })
  .then(() => console.log("DB connection successful"))
  .catch((err) => console.log("Connection ERROR💥:", err));

app.listen(3000);
```

## 创建 Model

不再赘述，与之前相同。

```js title="EventModal.js"
const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  creator: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

eventSchema.pre(/^find/, function (next) {
  this.populate({
    path: "creator",
    select: "-password -createEvents",
  });

  next();
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
```

## 创建 Resolver

将 MongoDB 的操作方法写到 graphQL 的 Resolver。

```js title="eventResolver.js"
const Event = require("../../models/event");
const User = require("../../models/user");

module.exports = {
  // query
  events: async () => {
    try {
      const allEvents = await Event.find();
      return allEvents;
    } catch (error) {
      return error;
    }
  },

  singleEvent: async (args) => {
    const { eventID } = args;
    try {
      const event = await Event.findById(eventID);
      return event;
    } catch (error) {
      return error;
    }
  },

  // mutation
  createEvent: async (args, req) => {
    if (!req.isAuth) throw new Error("You are not logged in, please login first");

    const { _id: userId } = req.user;
    const { title, description, price, date } = args.eventInput;
    try {
      const newEvent = await Event.create({
        title,
        description,
        price,
        date: new Date(date),
        creator: userId,
      });

      await User.findByIdAndUpdate(userId, {
        $push: { createEvents: newEvent._id },
      });

      return newEvent;
    } catch (error) {
      return error;
    }
  },
};
```
