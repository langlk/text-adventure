import { Page } from './page.model';
import { Option } from './option.model';

export const PAGES: Page[] = [
  new Page(
    "This is the first page",
    [
      new Option("Go to second page", 2, 2),
      new Option("Go to Third Page", 3, -1)
    ],
    1
  ),
  new Page(
    "This is the second page",
    [
      new Option("Go to third page", 3, 2),
      new Option("Go to first Page", 1, -1)
    ],
    2
  ),
  new Page(
    "This is the third page",
    [
      new Option("Go to second page", 2, -1),
      new Option("Go to first Page", 1, -2)
    ],
    3
  )
];
