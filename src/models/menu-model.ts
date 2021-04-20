export interface IMenu {
  icon: string;
  text: string;
  'icon-alt'?: string;
  url?: string;
  children?: IMenu[];
}
