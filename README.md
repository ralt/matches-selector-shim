matches-selector-shim
===

Shim for matchesSelector in IE8.

Installation
---

    npm install matches-selector-shim

API
---

```javascript
var matchesSelector = require('matches-selector-shim'),
    byTag = require('dom-essentials/by').tag,
    lis = byTag('li');

console.log(matchesSelector(lis, 'li')); // true
```

Contributors
---

- [Florian Margaine](http://margaine.com)

License
---

MIT License.
