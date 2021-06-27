import './plug-field.scss';
import { BaseComponent } from '../shared/base-component';

export class PlugField extends BaseComponent {
  constructor() {
    super('div', ['plug-field']);
    this.element.innerHTML = 'PLUG!';
    console.log('plug');
  }
}
