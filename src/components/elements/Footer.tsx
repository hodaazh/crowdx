import Link from 'next/link';

import { CommonConst } from '@/constants';

import { Button } from '../commons';

const Footer = (): JSX.Element => {
  const { footerMoreLinks, footerContactLinks, footerSocialLinks } =
    CommonConst;

  return (
    <footer className="mt-24 bg-white py-24 shadow-footer lg:py-16 sm:py-9">
      <div className="container flex flex-col">
        <div className="flex justify-between gap-14 lg:flex-wrap lg:justify-start sm:gap-y-0">
          <Link href="/" className="lg:w-full sm:mb-14">
            <img src="/media/logo.svg" alt="logo" className="w-36" />
          </Link>
          {footerMoreLinks.map((section) => (
            <div
              key={section.title}
              className="flex flex-col lg:w-1/3 xs:w-auto"
            >
              <h3 className="mb-6 typo-[16-bold]">{section.title}</h3>
              <div className="flex flex-col items-start gap-2">
                {section.items.map((item, index) => (
                  <Button
                    key={index}
                    className="text-zinc-700 hover:text-base-1"
                    titleClassName="!typo-[14-normal]"
                    {...item}
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="flex flex-col lg:w-1/3 sm:my-10 sm:w-full sm:border-y sm:py-10">
            <h3 className="mb-6 typo-[16-bold] sm:leading-none">Contact Us</h3>
            <div className="flex flex-col items-start gap-3">
              {footerContactLinks.items.map((item, index) => (
                <Button
                  key={index}
                  className="text-zinc-700 hover:text-base-1"
                  size="tiny"
                  titleClassName="text-left"
                  iconClassName="!text-xl !leading-none text-zinc-400/80"
                  reverse
                  {...item}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col lg:w-1/3 sm:w-full">
            <h3 className="mb-6 typo-[16-bold] sm:leading-none">Social</h3>
            <div className="-ml-1 flex items-start gap-6">
              {footerSocialLinks.items.map((item, index) => (
                <Button key={index} size="small" {...item} />
              ))}
            </div>
          </div>
        </div>
        <span className="mt-15 w-full border-t-2 border-zinc-200 pt-7 text-center opacity-60 typo-[14] sm:mt-10">
          © 2023 CrowdX | All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export { Footer };
