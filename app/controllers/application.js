import Controller from '@ember/controller';
import { getOwner } from '@ember/application';
import { action } from '@ember/object';


export default class ApplicationController extends Controller {
  @action
  testMethod() {
    console.log('Test');
    let applicationInstance = getOwner(this);
    let logger = applicationInstance.lookup('logger:main');
    console.log('logger: ', logger);
  }
}
