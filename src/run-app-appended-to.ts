import { PageField } from './components/page-field/page-field';
import { PagesService } from './components/services/pages-service';

export function runAppAppendedTo(rootElement: HTMLElement): void {
  const pageField = new PageField();
  const pagesHandler = new PagesService(pageField);
  pagesHandler.showGarageField();
  rootElement.appendChild(pageField.element);
}

// TODOs:

// delete TODOs
