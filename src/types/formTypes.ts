type FieldTypes =
  | 'hidden'
  | 'input'
  | 'select'
  | 'phoneNumber'
  | 'verification'
  | 'checkbox'
  | 'multipleSelect'
  | 'datepicker'
  | 'multiSelect'
  | 'switch';

type InputTypes =
  | 'text'
  | 'textarea'
  | 'number'
  | 'numberWithComma'
  | 'password';

type SizeTypes = 'normal' | 'small';

type OptionType = {
  value: number | string;
  label: string;
};

type Field = {
  type?: FieldTypes;
  name: string;
  label?: string;
  placeholder?: string;
  icon?: string;
  options?: OptionType[];
  range?: {
    min: number;
    max: number;
    steps: number;
    isTwoRange?: boolean;
  } | null;
  inputType?: InputTypes;
  size?: SizeTypes;
  value?: (val: any) => any;
  span?: number;
  min?: number;
  max?: number;
  validation?: string;
  prefix?: React.ReactElement | string | null;
  isClearable?: boolean;
  className?: string;
};

export type { Field, FieldTypes, InputTypes, OptionType, SizeTypes };
