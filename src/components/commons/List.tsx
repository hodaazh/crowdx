import cn from 'classnames';
import React from 'react';

import type { PaginateT } from '@/types';

import { Button } from './Button';
import { Spinner } from './Spinner';

type IProps = {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  withLoadmore?: boolean;
  isEmpty?: boolean;
  fetchNextPage?: () => void;
  pagination?: PaginateT;
  empty?: {
    title?: string;
    desc?: string;
    button?: string;
    image?: string;
    onClick?: () => void;
  };
};

const List = ({
  children,
  className,
  isLoading,
  isEmpty,
  pagination,
  withLoadmore = false,
  fetchNextPage = () => false,
  empty,
}: IProps): JSX.Element => {
  const { title, desc, button, onClick, image } = {
    title: 'List is Empty',
    desc: '',
    ...(empty || {}),
  };
  // const scrollBar = useContext(ScrollbarContext);

  // const handleScroll = () => {
  //   const {
  //     scrollHeight = document.body.offsetHeight,
  //     clientHeight = window.innerHeight,
  //     scrollTop = window.scrollY,
  //   } = scrollBar.parentScrollbar || {};
  //   if (Math.abs(scrollTop + clientHeight - scrollHeight) < 50) {
  //     fetchNextPage();
  //   }
  // };

  // useEffect(() => {
  //   if (!withLoadmore) window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     if (!withLoadmore) window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className={cn('flex flex-1 flex-col', className)}>
      {children}
      {isLoading && (
        <div className="flex flex-1 items-center justify-center py-10">
          <Spinner />
        </div>
      )}
      {withLoadmore && pagination?.current_page !== pagination?.total_pages && (
        <div className="mt-4 flex items-start">
          <Button
            title="Show More"
            type="link"
            size="tiny"
            onClick={() => {
              fetchNextPage();
            }}
            disable={isLoading}
          />
        </div>
      )}
      {isEmpty && !isLoading && (
        <div className="mt-16 mb-28 flex flex-col items-center justify-center">
          {image && <img src={image} alt="empty image" className="" />}
          {title && <span className="tp-display1 mt-3">{title}</span>}
          {desc && (
            <span className="tp-body1 mt-2 mb-4 text-gray-600">{desc}</span>
          )}
          {button && <Button title={button} onClick={onClick} />}
        </div>
      )}
    </div>
  );
};

export { List };
