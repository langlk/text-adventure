import { Option } from './option.model';

export class Page {
  constructor (public text: string, public options: Option[], public id: number) {}
}
