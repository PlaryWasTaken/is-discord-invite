<div align="center">
    <h1>🌍・What is that?・🌍</h1>
    <p>
        <b>EN:</b> This npm package will check a string is an invitation to the Discord server.<br>
        <b>PL:</b> Ten moduł npm sprawdza ciąg znaków, czy znajduję się w nim zaproszenie na serwer Discord.
    </p>
    <a href="https://www.npmjs.com/package/is-discord-invite" target="_blank" title="is-discord-invite - npm" style="text-decoration:none">
        <img src="https://img.shields.io/npm/dt/is-discord-invite.svg?maxAge=3600" alt="npm downloads">
        <img src="https://img.shields.io/github/issues/sefinek24/is-discord-invite" alt="Issues">
        <img src="https://img.shields.io/github/last-commit/sefinek24/is-discord-invite" alt="Last commit">
        <img src="https://img.shields.io/github/commit-activity/w/sefinek24/is-discord-invite" alt="Commit activity">
        <img src="https://img.shields.io/github/languages/code-size/sefinek24/is-discord-invite" alt="Code size">
    </a>
</div>

## 📥 » Installation
> **$** npm install is-discord-invite

## 🤔 » Explanation
<img src="https://cdn.sefinek.net/images/is-discord-invite.png" alt="Regex visualizer">

## 📄 » Examples
```js
const isInvite = require('is-discord-invite');

// Example 1
isInvite('https://discord.gg/BAtT5MZJ'); // true
isInvite('https://sefinek.net'); // false

// Example 2 for Discord.js: https://www.npmjs.com/package/discord.js
const url = 'https://discord.gg/h9Y6FjUR';

if (isInvite(url)) {
    interaction.reply('✅ This is an invitation!');
} else {
    interaction.reply('❎ This is not an invitation.');
}
```

## 🤝 » Help
Open new [Issue](https://github.com/sefinek24/is-discord-invite/issues/new) on GitHub.

## ⭐ » Thank you
Give a star if you can on [GitHub](https://github.com/sefinek24/is-discord-invite) page.