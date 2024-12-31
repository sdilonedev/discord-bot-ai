import { config } from "seyfert";

export default config.bot({
  token: process.env.DISCORD_BOT_TOKEN ?? "",
  locations: {
    base: "src",
    output: "src",
    commands: "commands",
    events: "events",
  },
  intents: ["Guilds"],
});
