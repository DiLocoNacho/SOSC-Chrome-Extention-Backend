require("dotenv").config();

const Discord = require("discord.js");
const express = require("express");
const cors = require("cors");

const app = express();

// MongoDB & Mongoose
// const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose
//   .connect(process.env.DATABASEURL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Setup uses
app.use(cors());
app.use(express.json());

// Import API Routes
app.use(`/share`, require("./routes/share"));

// Export express app
module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`);
  });
}

// Create a new Discord client
// const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

// client.on("ready", () => {
//   // send a message to a channel witcontent "Hello World!"
//   const guild = client.channels.cache
//     .filter((channel) => {
//       return channel.type === "GUILD_TEXT";
//     })
//     .map((channel) => channel)[0]
//     .fetchOwner(se);
//   // .send({ content: "test" });
//   // .map((channel) => {
//   //   return { name: channel.name, id: channel.id };
//   // })[0];
//   console.log(guild);
// });
// client.login(process.env.BOT_TOKEN);

// console.log(
//   client.guilds.cache.map((guild) => {
//     guild;
//   })
// );
