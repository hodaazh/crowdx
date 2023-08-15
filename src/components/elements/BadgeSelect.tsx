import 'swiper/css/free-mode';

import cn from 'classnames';
import { useEffect, useState } from 'react';

import type { CategoryT } from '@/types';

interface IProps {
  disabled?: boolean;
  options?: CategoryT[];
  className?: string;
  itemClassName?: string;
  formValue?: number | null;
  onChange?: (val: number | null) => void;
}

const BadgeSelect = ({
  options,
  onChange = () => false,
  disabled,
  formValue,
  itemClassName,
}: IProps): JSX.Element => {
  const [selected, setSelected] = useState<number | null>(null);
  useEffect(() => {
    if (JSON.stringify(formValue) !== JSON.stringify(selected)) {
      setSelected(Number(formValue));
    }
  }, [formValue, options]);

  const handleChange = (val: number) => {
    if (disabled) return;
    if (formValue === val) {
      setSelected(null);
      onChange(null);
    } else {
      setSelected(val);
      onChange(val);
    }
  };

  return (
    <div className="flex gap-2">
      {options?.map(({ title, id }, index) => (
        <button
          key={index}
          onClick={() => handleChange(id)}
          className={cn(
            'flex items-center justify-center gap-2 rounded-full bg-base-1/5 py-1 px-3 self-start transition duration-300',
            {
              '!bg-primary': formValue === id,
              'shadow-primaryButton': formValue === id,
              itemClassName,
            }
          )}
        >
          <span
            className={cn('text-base-1/40 transition duration-300', {
              '!text-white': formValue === id,
            })}
          >
            {title}
          </span>
        </button>
      ))}
    </div>
  );
};

export { BadgeSelect };
