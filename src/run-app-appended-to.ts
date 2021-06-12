import { PageField } from './components/page-field/page-field';

export function runAppAppendedTo(rootElement: HTMLElement): void {
  const pageField = new PageField();
  rootElement.appendChild(pageField.element);
}

// TODOs:

// delete TODOs
