import { cva } from 'class-variance-authority';
import React, { useEffect, useState } from 'react';

import type { InputTypes, SizeTypes } from '@/types';
import { textUtil } from '@/utils';

type InputElements = HTMLTextAreaElement | HTMLInputElement;
interface IProps {
  placeholder?: string;
  icon?: string;
  className?: string;
  formValue?: string;
  name?: string;
  suffix?: React.ReactElement | null;
  prefix?: React.ReactElement | null;
  autoDirection?: boolean;
  disable?: boolean;
  inputType?: InputTypes;
  size?: SizeTypes;
  maxLength?: number;
  reverse?: boolean;
  hasError?: boolean;
  min?: number;
  max?: number;
  onChange?: (val: string) => void;
  onEnter?: (val: string) => void;
  onBlur?: () => void;
  onFocus?: () => void;
}

const inputStyles = cva(
  'flex flex-1 w-full relative z-10 h-full resize-none text-gray-400 bg-transparent outline-none',
  {
    variants: {
      isRtl: { true: '!text-right' },
      inputType: {
        text: '',
        textarea: '',
        number: '',
        numberWithComma: '',
        password: '',
      },
      disable: {
        true: '!text-gray-150',
      },
      reverse: {
        true: '!flex-row-reverse',
      },
      size: {
        normal: 'typo-[18-normal] lg:typo-[14-noraml] xs:typo-[12-normal]',
        small: 'typo-[16-normal] lg:typo-[14-noraml] xs:typo-[12-normal]',
      },
      hasError: {
        true: '',
      },
      isActive: {
        true: '!text-base-1',
      },
      hasValue: {
        true: '!text-base-1',
      },
    },
    compoundVariants: [
      {
        hasError: true,
        isActive: false,
        className: '!text-rose-600',
      },
      {
        isRtl: true,
        hasValue: true,
        className: '!text-right',
      },
    ],
  }
);
const wrapperStyles = cva(
  'group flex z-0 box-border w-full transition duration-300 relative border-b-2 hover:border-base-1/5 gap-2',
  {
    variants: {
      inputType: {
        textarea: 'h-48 xs:h-40',
        text: '',
        number: '',
        numberWithComma: '',
        password: '',
      },
      isActive: {
        true: '!border-primary !bg-transparent',
      },
      reverse: {
        true: '!flex-row-reverse',
      },
      disable: {
        true: '!bg-gray-50 !border-gray-50',
      },
      size: {
        normal: 'h-15 lg:h-14 xs:h-13 p-5',
        small: 'h-14 lg:!h-13 xs:h-12 px-5 py-3',
      },
      hasError: {
        true: '',
      },
    },
    compoundVariants: [
      {
        size: 'small',
        inputType: 'textarea',
        className: '!h-24',
      },
      {
        hasError: true,
        isActive: false,
        className: '!border-rose-600',
      },
    ],
  }
);

const iconStyles = cva(
  'transition duration-300 bg-transparent flex items-center text-lg text-gray-400',
  {
    variants: {
      size: {
        small: '',
        normal: '',
      },
      hasError: {
        true: '!text-rose-600',
      },
      disable: {
        true: '!text-gray-150',
      },
      isActive: {
        true: '!text-primary',
      },
      hasValue: {
        true: '!text-primary',
      },
    },
    compoundVariants: [
      {
        hasValue: true,
        isActive: false,
        disable: false,
        hasError: false,
        className: '!text-gray-600',
      },
      {
        isActive: true,
        disable: false,
        hasError: false,
        className: '!text-secondary-1',
      },
    ],
  }
);

const passwordStyles = cva(
  'transition duration-300 flex items-center text-xl xs:text-lg text-gray-400 hover:text-gray-700 cursor-pointer px-1',
  {
    variants: {
      showPass: {
        true: '!text-secondary-2 icon-hide',
        false: 'icon-show',
      },
      disable: {
        true: '!text-gray-150',
      },
    },
  }
);

const Input = ({
  placeholder,
  icon,
  className = '',
  name,
  suffix = null,
  prefix = null,
  autoDirection = true,
  disable = false,
  reverse = false,
  inputType = 'text',
  size = 'normal',
  maxLength,
  min,
  max,
  onChange = () => false,
  onBlur = () => false,
  onFocus = () => false,
  onEnter = () => false,
  formValue,
  hasError,
}: IProps): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(false);
  const [showPass, setShowPass] = useState<boolean>(false);
  const isRtl: boolean = autoDirection && false;
  let inputMode: React.HTMLAttributes<HTMLLIElement>['inputMode'] = 'text';
  const numericInput =
    inputType === 'number' || inputType === 'numberWithComma';

  useEffect(() => {
    if (typeof formValue !== 'string') return;
    if (formValue !== value) setValue(formValue);
  }, [formValue, value]);

  const changeValue = (newValue: string): void => {
    let val = newValue;
    val = inputType === 'numberWithComma' ? val.split(',').join('') : val;
    val = textUtil.toEnglishDigits(val);
    if (
      (inputType === 'numberWithComma' || inputType === 'number') &&
      Number.isNaN(Number(val))
    )
      return;
    onChange(val);
    setValue(val);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onEnter(value);
    }
  };

  const printValue = (): string => {
    let val = value;
    val = inputType === 'numberWithComma' ? textUtil.putCommas(val) || '' : val;
    return val;
  };

  const props = {
    disable,
    maxLength,
    name,
    className: inputStyles({
      className,
      inputType,
      disable,
      reverse,
      isRtl,
      size,
      isActive,
      hasError,
      hasValue: Boolean(value),
    }),
    type: 'text',
    pattern: '',
    value: printValue(),
    onChange: ({ target }: React.ChangeEvent<InputElements>) =>
      changeValue(target.value),
    onFocus: () => {
      onFocus();
      setIsActive(true);
    },
    onBlur: () => {
      setIsActive(false);
      onBlur();
    },
  };

  switch (inputType) {
    case 'numberWithComma':
    case 'number':
      inputMode = 'numeric';
      props.pattern = '[0-9]*';
      break;
    case 'password':
      props.type = showPass ? 'text' : 'password';
      break;
    default:
      break;
  }

  useEffect(() => {
    if (
      numericInput &&
      max !== undefined &&
      min !== undefined &&
      !isActive &&
      value
    ) {
      if (Number(value) > max) {
        changeValue(String(max));
      }
      if (Number(value) < min) {
        changeValue(String(min));
      }
    }
  }, [value, isActive]);

  return (
    <div
      className={wrapperStyles({
        className,
        inputType,
        isActive,
        size,
        disable,
        hasError,
        reverse,
      })}
    >
      {prefix}
      {icon && (
        <i
          className={iconStyles({
            className: [`icon-${icon}`],
            disable,
            hasError,
            isActive,
            hasValue: Boolean(value),
          })}
        />
      )}
      <div className="relative flex flex-1 items-center">
        {inputType === 'textarea' ? (
          <textarea {...props} placeholder={placeholder} />
        ) : (
          <input
            {...props}
            onKeyDown={handleKeyDown}
            inputMode={inputMode}
            placeholder={placeholder}
          />
        )}
      </div>
      {inputType === 'password' ? (
        <i
          onClick={() => setShowPass(!showPass)}
          className={passwordStyles({ showPass, disable, className })}
        />
      ) : null}
      {suffix}
    </div>
  );
};

export { Input };
