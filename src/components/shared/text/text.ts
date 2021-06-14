import './text.scss';
import { BaseComponent } from '../base-component';
import { TextTemplateInterface } from '../interfaces';

export class Text extends BaseComponent {
  constructor(styles: string[], textContent = '') {
    super('p', styles);
    this.element.innerText = textContent;
  }

  public static createTextFromTemplate(
    textTemplate: TextTemplateInterface,
    parameters: string[]
  ): string {
    let createdText: string = textTemplate.text;
    parameters.forEach((parameter, index) => {
      const replacedPartRegExp = new RegExp(
        textTemplate.parameterFields[index]
      );
      createdText = createdText.replace(replacedPartRegExp, parameter);
    });
    return createdText;
  }
}
