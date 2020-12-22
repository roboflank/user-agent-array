# user-agent-array-ts

> An array of user agent strings, typescript supported.

[![npm](https://img.shields.io/npm/v/user-agent-array.svg)](https://www.npmjs.com/package/user-agent-array-ts)
![Node version](https://img.shields.io/node/v/user-agent-array.svg)
[![Build Status](https://travis-ci.org/ralphtheninja/user-agent-array.svg?branch=master)](https://travis-ci.org/ralphtheninja/user-agent-array)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```
$ npm i user-agent-array-ts
```

or

```
$ yarn add user-agent-array-ts
```

## Usage

```js
import { userAgents, randomUserAgent } from "user-agent-array-ts";
// or in JS
// const { userAgents, randomUserAgent } = require("user-agent-array-ts");

// List all user agents
console.log(userAgents);

// Generate random user agent
console.log(randomUserAgent);
```

## API

### `const { randomUserAgent } = require('user-agent-array-ts')`

Exports a random user agent string.

### `const { userAgents } = require('user-agent-array-ts')`

Exports an array of user agent strings.

## Kudos

This data was extracted from [`random-http-useragent`](https://github.com/hfreire/random-http-useragent).

## License

MIT
