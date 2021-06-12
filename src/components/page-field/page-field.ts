import './page-field.scss';
import { BaseComponent } from '../shared/base-component';
import {} from '../shared/constants';

export class PageField extends BaseComponent {
  private readonly headerField: HeaderField;

  private readonly rootField: RootField;

  constructor() {
    super('div', ['page-field']);
    this.headerField = new HeaderField();
    this.rootField = new RootField();
    this.element.appendChild(this.headerField.element);
    this.element.appendChild(this.rootField.element);
    window.history.pushState(
      ROUTE_PATHS.aboutMe,
      MM_GAME.title,
      ROUTE_PATHS.aboutMe
    );
    const router = new Router(this.headerField.navField);
    router.changeRootField();
  }
}
