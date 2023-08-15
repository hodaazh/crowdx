import type { NextPage } from 'next';

import { ContactHeader, ContactTouch } from '@/components/pages/contact';

const Contact: NextPage = () => {
  return (
    <div className="container mt-32 flex flex-col md:mt-18">
      <ContactHeader />
      <ContactTouch />
      <div className="relative mt-36 flex justify-end md:flex-col xs:mt-18">
        <img src="/media/map.svg" alt="" />
        <div className="absolute left-0 top-0 flex max-w-2xl flex-col pl-48 xl:pl-0 md:relative md:-order-10 md:w-full">
          <span className="mb-4">Where are we?</span>
          <h4 className="leading-none typo-[88-bold-heading] xs:typo-[36-bold-heading]">
            Invest in lands Now!
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
