# redux-actions-namespace

Syntax sugar for using namespaces with [redux-actions](https://github.com/acdlite/redux-actions).

## Usage

```js
import { createNamespace } from 'redux-actions-namespace';

const { createAction, createActions } = createNamespace('UI/DROPDOWN/');
const toggle = createActions('TOGGLE');
const { show, hide } = createActions('SHOW', 'HIDE');
```

The code above is equivalent for this:

```js
import { createAction, createActions } from 'redux-actions';

const NS = 'UI/DROPDOWN/';
const toggle = createActions(`${NS}TOGGLE`);
const { show, hide } = createActions(`${NS}SHOW`, `${NS}HIDE`);
```

## License

MIT.
