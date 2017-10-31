import { Page } from './page.model';

export const PAGES: Page[] = [
  new Page("This is the first page", {"Go to second page": 2, "Go to Third Page": 3}, 1),
  new Page("This is the second page", {"Go back to first page": 1, "Onward to third page": 3}, 2),
  new Page("This is the third page", {"Skip back to first page": 1, "Go back to second page": 2}, 3)
];
