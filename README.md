# If Browser
![npm (scoped)](https://img.shields.io/npm/v/@jharrilim/if-browser-component.svg?style=for-the-badge)
![GitHub](https://img.shields.io/github/license/jharrilim/if-browser-component.svg?style=for-the-badge)

Will render children only in browser; useful for components that make use of `window`.

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
