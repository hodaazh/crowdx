import cn from 'classnames';

type IProps = {
  color?: string;
  className?: string;
  small?: boolean;
};

const Spinner = ({
  color = '#00D0FF',
  small = false,
  className,
}: IProps): JSX.Element => {
  const size = small ? 25 : 33;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('animate-spin', className)}
    >
      <path
        d="M0.999997 17.5671C0.999997 14.3803 1.91542 11.2611 3.63651 8.58346C5.35761 5.90584 7.81132 3.78346 10.7035 2.47077C13.5957 1.15808 16.8035 0.710787 19.9425 1.18253C23.0814 1.65428 26.0183 3.02503 28.4009 5.13045C30.7835 7.23587 32.5108 9.98661 33.3756 13.0529C34.2405 16.1191 34.2062 19.3707 33.2769 22.4179C32.3476 25.4651 30.5627 28.1785 28.1362 30.2328C25.7097 32.2871 22.7446 33.5951 19.5964 34"
        stroke={color}
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M17.5005 0.999999C21.0783 0.999999 24.5592 2.16292 27.4185 4.3135C30.2778 6.46408 32.3606 9.48578 33.353 12.9232C34.3454 16.3606 34.1937 20.0274 32.9206 23.3711C31.6475 26.7147 29.3222 29.554 26.2949 31.4609C23.2677 33.3679 19.7026 34.2392 16.1371 33.9436C12.5715 33.6479 9.19863 32.2014 6.5268 29.8219C3.85497 27.4424 2.02896 24.2589 1.32398 20.7512C0.618992 17.2436 1.07323 13.6018 2.61824 10.3748"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export { Spinner };
