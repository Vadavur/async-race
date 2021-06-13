import './button.scss';
import { BaseComponent } from '../base-component';

export class Button extends BaseComponent {
  constructor(styles: string[], buttonLabel = '') {
    super('button', styles);
    this.element.innerHTML = buttonLabel.toUpperCase();
  }
}
