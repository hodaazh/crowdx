import Link from 'next/link';

import { Button } from '@/components/commons';
import { CommonConst } from '@/constants';

const Navbar = (): JSX.Element => {
  const { navLinks } = CommonConst;

  return (
    <nav className="xs:shadow-card">
      <div className="container relative z-30">
        <div className="flex items-center justify-between border-b py-6 xs:border-0">
          <div className="flex items-center gap-8">
            <Link href="/">
              <img
                alt="logo"
                src="/media/logo.svg"
                className="h-8 object-contain xs:h-8"
              />
            </Link>
            <div className="flex items-center gap-7 border-l pl-6 lg:hidden">
              {navLinks.map((item, index) => (
                <Button
                  {...item}
                  link
                  key={index}
                  className="!px-2 text-zinc-400 hover:text-base-1"
                  href={item.href}
                />
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button icon="menu" className="hidden lg:flex" type="secondary" />
            <div className="relative">
              <Button icon="notification" type="secondary" />
              <div className="absolute top-1 right-1 z-20 h-3 w-3 rounded-full bg-error shadow-notif"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
