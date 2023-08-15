import { cva } from 'class-variance-authority';
import Link from 'next/link';
import type { HTMLAttributeAnchorTarget } from 'react';

import { Spinner } from '@/components/commons/Spinner';

type ButtonType = 'normal' | 'primary' | 'secondary' | 'link';
type ButtonSize = 'normal' | 'small' | 'tiny';

interface ButtonProps {
  title?: string;
  titleClassName?: string;
  icon?: string;
  iconClassName?: string;
  className?: string;
  loading?: boolean;
  reverse?: boolean;
  noPadding?: boolean;
  link?: boolean;
  iconPath?: number;
  theme?: 1;
  disable?: boolean;
  type?: ButtonType;
  size?: ButtonSize;
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  innerRef?: any;
  onChange?: (val: File) => void;
  onClick?: (
    event:
      | React.MouseEvent<HTMLAnchorElement> &
          React.MouseEvent<HTMLButtonElement>
  ) => void;
}

const buttonStyles = cva(
  'group flex items-center justify-center box-border gap-2 cursor-pointer z-20 transition duration-300 active:duration-100 relative',
  {
    variants: {
      type: {
        normal: 'py-1 px-1',
        primary:
          'bg-primary text-white rounded-full shadow-primaryButton hover:shadow-none',
        secondary:
          'border bg-white border-zinc-200/90 hover:border-zinc-400/80 rounded-full shadow-card hover:shadow-none',

        link: 'hover:text-gray-400 !h-auto py-2',
      },
      theme: {
        1: '',
      },
      disable: {
        true: ' bg-gray-400',
      },
      reverse: {
        true: '!flex-row-reverse',
      },
      noPadding: {
        true: '!px-0 !py-0 !h-auto',
      },
      justIcon: {
        true: '!px-0 !min-w-min',
      },
      size: {
        normal: 'h-15 px-9 xs:h-13',
        small: 'h-13 px-8 xs:h-12',
        tiny: 'h-12 px-6 xs:h-11',
        no: '',
      },
    },
    compoundVariants: [
      {
        size: 'normal',
        justIcon: true,
        className: 'w-15 xs:w-13',
      },
      {
        size: 'small',
        justIcon: true,
        className: 'w-13 xs:w-12',
      },
      {
        size: 'tiny',
        justIcon: true,
        className: 'w-12 xs:w-11',
      },
    ],
  }
);
const iconStyles = cva('z-10', {
  variants: {
    size: {
      tiny: 'text-lg xs:text-base',
      small: 'text-xl xs:text-lg',
      normal: 'text-2xl xs:text-xl',
    },
    loading: {
      true: '!opacity-0',
    },
  },
});
const titleStyles = cva('z-10 leading-none', {
  variants: {
    size: {
      tiny: 'typo-[14-bold]',
      small: 'typo-[16-bold]',
      normal: 'typo-[18-bold]',
    },
    loading: {
      true: '!opacity-0',
    },
    underline: {
      true: 'underline underline-offset-4',
    },
    icon: {
      true: '-mb-0.5',
    },
  },
});

const Button = ({
  title,
  titleClassName,
  icon,
  iconClassName,
  className = '',
  href,
  type = 'normal',
  size = 'normal',
  theme,
  iconPath,
  loading = false,
  reverse = false,
  link = false,
  disable = false,
  noPadding = false,
  target,
  onClick = () => false,
  innerRef,
}: ButtonProps): JSX.Element => {
  // eslint-disable-next-line no-nested-ternary
  const Container = link ? Link : href ? 'a' : 'button';

  const renderContent = () => (
    <>
      {title && (
        <span
          className={titleStyles({
            className: titleClassName,
            size,
            loading,
            icon: Boolean(icon),
            underline: Boolean(type === 'link'),
          })}
        >
          {title}
        </span>
      )}
      {icon && (
        <i
          className={iconStyles({
            className: [`icon-${icon}`, iconClassName],
            size,
            loading,
          })}
        >
          {[...Array(iconPath || 0)].map((_, index) => (
            <span key={index + 1} className={`path${index + 1}`}></span>
          ))}
        </i>
      )}
    </>
  );

  return (
    <Container
      className={buttonStyles({
        className,
        type,
        disable,
        reverse,
        noPadding,
        size: type === 'normal' ? 'no' : size,
        theme,
        justIcon: Boolean(!title && icon),
      })}
      disabled={disable || loading}
      type="submit"
      target={target}
      href={href || ''}
      onClick={onClick}
      ref={innerRef}
    >
      {renderContent()}
      {loading && (
        <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center mix-blend-difference">
          <Spinner small />
        </div>
      )}
    </Container>
  );
};

export { Button };
export type { ButtonProps, ButtonType };
