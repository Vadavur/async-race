import './button-component.scss';
import { BaseComponent } from '../base-component';

export class ButtonComponent extends BaseComponent {
  constructor(styles: string[], buttonLabel = '') {
    super('button', styles);
    this.element.innerHTML = buttonLabel.toUpperCase();
  }
}
