# Discord AI Bot Project

This is a **Discord AI bot** project designed to interact with users in a fun and engaging way. The bot leverages **Google Gemini** for AI-powered responses, providing clear and concise answers with a unique personality.

## Features

- **AI-Powered Responses**: The bot uses **Google Gemini** to generate intelligent and context-aware responses.
- **Personality-Driven Interaction**: Inspired by a cheerful and adventurous character, the bot adds a touch of fun to every conversation.
- **Emoji Support**: The bot uses Discord emojis (e.g., `:emoji:`) to enhance its responses and make interactions more engaging.
- **Simple and Direct**: The bot is designed to provide straightforward answers without unnecessary complexity.

## Technologies Used

- **Bun**: A fast all-in-one JavaScript runtime used for running and building the bot.
- **Google Gemini**: A powerful AI model for generating responses. The specific model used is **`gemini-1.5-flash-latest`**.
- **Seyfert**: Discord framework to take the bot development to a next level.

## Prerequisites

Before setting up the bot, ensure you have the following:

1. **Bun**: Install Bun by following the official guide: [Bun Installation](https://bun.sh/docs/installation).
2. **Google Gemini API Key**: Get your API key from the [Google AI Studio](https://makersuite.google.com/app/apikey).
3. **Discord Bot Token**: Create a bot on the [Discord Developer Portal](https://discord.com/developers/applications) and get your bot token.

## Setup

1. **Clone the Repository**:

```bash
  git clone https://github.com/sdilonedev/discord-ai-bot.git
  cd discord-ai-bot
```

2. **Install Dependecies**:

```bash
  bun install
```

3. **Set Up Environment Variables**:

```
  DISCORD_TOKEN=your_discord_bot_token
  GEMINI_API_KEY=your_gemini_api_key
```

4. **Run the Bot**:

```bash
  bun start
```

## Usage

Once the bot is running, invite it to your Discord server and start interacting with it using the `/ask` slash command.

### Example Commands

- **Ask a Question**:

```
  /ask What’s the capital of France?
```

**Response**: ¡Claro! La capital de Francia es París 🗼. ¡Un lugar genial para una aventura! 🚀

- **Greet the Bot**:

```
    /ask Hola, ¿quién eres?
```

**Response**: ¡Hola! Soy tu bot aventurero 😄. Estoy aquí para responder tus preguntas y hacer que todo sea más divertido. ¿En qué puedo ayudarte hoy? 🏴‍☠️

## Contributing

Contributions are welcome! If you'd like to improve the bot or add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/sdilonedev/discord-ai-bot/LICENSE) file for details.
