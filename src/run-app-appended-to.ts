import { PageField } from './components/page-field/page-field';
import { ViewService } from './components/services/view-service';

export function runAppAppendedTo(rootElement: HTMLElement): void {
  const pageField = new PageField();
  const viewHandler = new ViewService(pageField);
  viewHandler.showGarageField();
  rootElement.appendChild(pageField.element);
}

// TODOs:

// delete TODOs
