const { AoiClient } = require("aoi.js");

const client = new AoiClient({
    token: process.env['token'],
    prefix: "!",
    intents: ["MessageContent", "Guilds", "GuildMessages"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("@aoijs/aoi.db"),
        dbType: "KeyValue",
        tables: ["main"],
        securityKey: process.env['sk']
    }
});

client.loadCommands("./commands");
