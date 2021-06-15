import './input-component.scss';
import { BaseComponent } from '../base-component';

export class InputComponent extends BaseComponent {
  constructor(attributes: { [type: string]: string }) {
    super('input', ['input']);
    Object.entries(attributes).forEach((attr) => {
      this.element.setAttribute(attr[0], attr[1]);
    });
  }
}
