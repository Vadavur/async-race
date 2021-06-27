import './text-component.scss';
import { BaseComponent } from '../base-component';
import { TextComponentTemplateInterface } from '../interfaces';

export class TextComponent extends BaseComponent {
  constructor(styles: string[], textContent = '') {
    super('p', styles);
    this.element.innerText = textContent;
  }

  public static createTextFromTemplate(
    textTemplate: TextComponentTemplateInterface,
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
