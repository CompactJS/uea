<h1 align="center">@compactjs/uea</h1>
<h2 align="center">Universal Element Accept</h2>
<h3 align="center">Allows a range of different ways to select HTML Elements</h3>
<p align="center">
  <a href="https://www.npmjs.com/package/@compactjs/uea" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@compactjs/uea.svg">
  </a>
  <a href="https://github.com/CompactJS/uea/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/CompactJS/uea" />
  </a>
</p>
<p align="center">
  ·
  <a href="https://github.com/CompactJS/uea#readme">Homepage</a>
  ·
  <a href="https://compactjs.github.io/uea/">View Demo</a>
  ·
  <a href="https://github.com/CompactJS/uea/issues">Report Bug / Request Feature</a>
  ·
</p>

You are writing a JavaScript library and need to receive one or more HTML elements? But you want to leave your users a broad choice, on how to select them? Then this might be for you.

## Table of Contents

- [What this is](#what-this-is)
- [Installation](#Install)
- [Usage](#usage)
- [Test](#run-tests)
- [Contact](#contact)
- [Contributing](#Contributing)
- [License](#license)

## What this is

Universal Element Accept (uea) allows you to accept a range of different inputs as HTML elements.

It accepts query selector strings, arrays, NodeLists and more (check out [usage](#usage)) and always returns either an array with HTMLElements or a single element, depending on the function you use.

## Install

### NPM:

```sh
npm install @compactjs/uea
```

### CDN:

```html
<script src="https://unpkg.com/@compactjs/uea/dist/index.umd.js"></script>
```

## Usage

### As module:

```javascript
import { select, selectOne } from '@compactjs/uea';
```

### Example:

```javascript
// select multiple elements
select('.my-classes');
select(document.getElementById('my-id'));
select(document.forms);

// or only select a single element
selectOne('.my-classes');
selectOne(document.getElementById('my-id'));
```

Check out the [demo](https://compactjs.github.io/uea/)
and the [examples file](https://github.com/CompactJS/uea/blob/main/example/index.html) for more examples.

### Doc:

```typescript
/**
 * Use a range of different ways to select HTML elements.
 * Always returns an array of elements.
 */
export function select(
  input: string | HTMLElement | HTMLElement[] | HTMLCollection | NodeList
): HTMLElement[];

/**
 * Use a range of different ways to select an HTMLElement.
 * Always returns a single HTMLElement.
 */
export function selectOne(selector: string | HTMLElement): HTMLElement | null;
```

## Run tests

```sh
npm run test
```

## Contact

👤 **Timo Bechtel**

- Website: https://timobechtel.com
- Twitter: [@TimoBechtel](https://twitter.com/TimoBechtel)
- GitHub: [@TimoBechtel](https://github.com/TimoBechtel)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />

1. Check [issues](https://github.com/CompactJS/uea/issues)
1. Fork the Project
1. Create your Feature Branch (`git checkout -b feat/AmazingFeature`)
1. Test your changes `npm run test`
1. Commit your Changes (`git commit -m 'feat: add amazingFeature'`)
1. Push to the Branch (`git push origin feat/AmazingFeature`)
1. Open a Pull Request

### Commit messages

This project uses semantic-release for automated release versions. So commits in this project follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) guidelines. I recommend using [commitizen](https://github.com/commitizen/cz-cli) for automated commit messages.

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Distributed under the [MIT](https://github.com/CompactJS/uea/blob/main/LICENSE) License.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
