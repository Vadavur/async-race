import './button.scss';
import { BaseComponent } from '../base-component';

export class Button extends BaseComponent {
  constructor(
    styles: string[],
    buttonLabel = '',
    buttonAction: (event: Event) => void
  ) {
    super('button', styles);
    this.element.innerHTML = buttonLabel.toUpperCase();
    this.element.addEventListener('click', buttonAction);
  }
}
