import {
  Declare,
  Command,
  Options,
  type CommandContext,
  createStringOption,
} from "seyfert";

const COMMAND_NAME = "ask";
const COMMAND_DESCRIPTION = "Ask something to the AI";
const INPUT_OPTION_DESCRIPTION = "The input that will be sent to the AI";
const MAX_INPUT_LENGTH = 500;
const MAX_RESPONSE_LENGTH = 2000;

const commandOptions = {
  input: createStringOption({
    description: INPUT_OPTION_DESCRIPTION,
    required: true,
    max_length: MAX_INPUT_LENGTH,
  }),
};

@Declare({
  name: COMMAND_NAME,
  description: COMMAND_DESCRIPTION,
})
@Options(commandOptions)
export default class AskCommand extends Command {
  async run(ctx: CommandContext<typeof commandOptions>) {
    const userInput = ctx.options.input;

    // Generate AI response and ensure it doesn't exceed the maximum length
    const aiResponse = await ctx.gemini.generateResponse(
      "default-prompt",
      userInput
    );

    ctx.write({
      content:
        aiResponse.length > MAX_RESPONSE_LENGTH
          ? aiResponse.slice(0, MAX_RESPONSE_LENGTH - 3) + "..."
          : aiResponse,
    });
  }
}
