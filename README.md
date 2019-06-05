# If Browser

[![npm]](https://www.npmjs.com/package/@jharrilim/if-browser-component)
[![GitHub]](https://github.com/jharrilim/if-browser-component)
[![Azure]](https://dev.azure.com/josephharrisonlim/josephharrisonlim/_build?definitionId=1)

Will render children only in browser; useful for components that make use of `window`.

## Install

```sh
npm i @jharrilim/if-browser-component
```

## Example

```js
import React from 'react';
import IfBrowser from '@jharrilim/if-browser-component';

const MyComponent = () => (
    <IfBrowser>
        <p>{window.innerWidth}</p>
    </IfBrowser>
);

```

[npm]: https://img.shields.io/npm/v/@jharrilim/if-browser-component.svg?style=for-the-badge
[Github]:https://img.shields.io/github/license/jharrilim/if-browser-component.svg?style=for-the-badge
[Azure]: https://img.shields.io/azure-devops/build/josephharrisonlim/josephharrisonlim/1.svg?style=for-the-badge