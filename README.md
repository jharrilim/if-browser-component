# If Browser

Will render children only in browser; useful for components that make use of `window`.

## Example

```js
import React from 'react';
import IfBrowser from '@jharrilim/if-browser';

const MyComponent = () => (
    <IfBrowser>
        <p>{window.innerWidth}</p>
    </IfBrowser>
);

```
