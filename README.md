# Pretty JS Logger

See pretty javascript logs in the console.

## Installation

```sh
npm i pretty-js-logger
```

### Usage

#### Simple log messages

```js
import { log, info, success, error, warn } from 'pretty-js-logger';

// Simple log with log message.
log('Simple log message.');

info('Info log message');

success('Success log message');

error('Error log message');

warn('Warn log message');
```

#### Log with additional data

```js
import { log, info, success, error, warn } from 'pretty-js-logger';

const data = {
    isLoggedIn: true
};

// Simple log with log message.
log('Simple log message.', data );

info('Info log message', data );

success('Success log message', data);

error('Error log message', data);

warn('Warn log message', data);
```