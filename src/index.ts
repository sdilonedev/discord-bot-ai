import { Client, extendContext, ParseClient } from "seyfert"; // setting off: verbatimModuleSyntax
import { AIService } from "./services/ai-service";

// Extend the context to include the AI service
const context = extendContext(() => {
  return {
    gemini: new AIService(),
  };
});

const client = new Client({ context });

// Start the bot and upload commands
client.start().then(() => client.uploadCommands());

declare module "seyfert" {
  interface UsingClient extends ParseClient<Client<true>> {}

  interface ExtendContext extends ReturnType<typeof context> {}
}
