# Kanta

[![npm](https://img.shields.io/npm/v/npm.svg)]()
[![macOS](https://img.shields.io/badge/os-macOS-green.svg?style=flat)]()
[![Linux](https://img.shields.io/badge/os-linux-green.svg?style=flat)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat)](https://opensource.org/licenses/MIT)
[![Twitter: @hellonaamio](https://img.shields.io/badge/contact-@hellonaamio-black.svg?style=flat)](https://twitter.com/hellonaamio)

**Kanta** provides a UI framework for web applications for [Naamio](https://github.com/Naamio) 
projects. Powered by [Vue](https://vuejs.org), **Kanta** simplifies the tooling for control 
flow between browser elements, supported by the **Naamio** SSR engine.

## Installation
**With Yarn:**
```bash
$ yarn add kanta
```
**With NPM:**
```bash
$ npm install kanta
```

## Builds
Tipu has four build versions: ES, CommonJS, AMD, and UMD.

**ES, CommonJS:**
```javascript
import * as log from 'kanta';
```
**AMD:**
```javascript
import * as log from 'kanta/index.amd';
```
**UMD:**
```javascript
import * as log from 'kanta/index.umd';
```

## Examples

### Initializing your first Kanta application.
```javascript
import { ApplicationController } from 'kanta';

class MyApplication extends ApplicationController {

}

let _: ApplicationController = new MyApplication();
```

## License

MIT, see [LICENSE](https://github.com/naamio/kanta/blob/master/LICENSE) for details.

