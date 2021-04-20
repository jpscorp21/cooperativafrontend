export type Type =
  | 'text'
  | 'textarea'
  | 'template'
  | 'number'
  | 'datepicker'
  | 'checkbox'
  | 'select'
  | 'radio';

export interface IFormOptions {
  type?: Type;
  label: string;
  placeholder?: string;
  sm?: string;
  md?: string;
  lg?: string;
  value: string;
  class?: string;
  radioItems?: IRadioOptionItem[];
  selectOption?: ISelectOption;
}

export interface IRadioOptionItem {
  value: any;
  label: string;
}

export interface ISelectOption {
  items: any[];
  itemValue: string;
  itemLabel: string;
  itemDefault: string;
}
