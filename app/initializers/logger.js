import EmberObject from '@ember/object';

export function initialize(application) {
  let Logger = class LoggerClass {
    log(m) {
      console.log(m);
    }
  };

  application.register('logger:main', Logger);
}

export default {
  name: 'logger',
  initialize: initialize,
};
