var logger = require('./index.js')('prefix', 'red');

logger.trace('example message');
logger.log('example message');
logger.warn('example message');

logger.trace('example message', {prefix: 'p', color: 'blue'});
logger.log('example message', {prefix: 'p', color: 'blue'});
logger.warn('example message', {prefix: 'p', color: 'blue'});

var logger2 = require('./index.js')();

logger.trace('example message');
logger.log('example message');
logger.warn('example message');

logger.trace('example message', {prefix: 'p', color: 'blue'});
logger.log('example message', {prefix: 'p', color: 'blue'});
logger.warn('example message', {prefix: 'p', color: 'blue'});