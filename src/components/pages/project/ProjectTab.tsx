import 'react-circular-progressbar/dist/styles.css';

import cn from 'classnames';
import GoogleMapReact from 'google-map-react';
import { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

import { Button, TabBar } from '@/components/commons';
import { FakeConst, ProjectConst } from '@/constants';
import type { DocumentItemsT, FinancialTotalCostsT } from '@/types';

const Overview = (): JSX.Element => {
  return (
    <div>
      <h5 className="mb-12 typo-[24-bold] md:mb-8 xs:mb-5">DESCRIPTION</h5>
      <p className="mb-28 typo-[18]">
        Rolling Fork Timber Tract is a 3,209 acre property in Sevier County,
        Arkansas with mature hardwoods and well diversified age classes of
        planted pines. This tract is an opportunity to invest in a large,
        professionally managed forest whose size and diversity of tree species
        and age classes may provide investors with early harvest and cash flow
        potential. Consisting of 91% productive timberland, this property has
        approximately 1,183 acres of planted pine of various ages as well as
        1,730 acres of mature hardwoods of multiple species. This diversity of
        species and age classes offers the opportunity for harvest activity in
        multiple years of the hold period, and thus anticipated cash flow for
        investors. Rolling Fork Timber Tract has direct access to U.S. Highway
        70 and boasts an interior road system in good condition. It has received
        significant capital improvements in the past year undertaken by the
        present owner, including construction of a new main road and two new
        bridges. This property has historically been professionally managed by
        an established local forestry company with a large management footprint
        and institutional-grade data and inventory tracking. We expect to
        continue working with the current management company to maintain
        continuity and leverage local expertise. Rolling Fork Timber Tract lies
        in a strong wood basket with extensive mill infrastructure. The second
        largest softwood mill in the southern U.S. is located in the nearby town
        of Dierks, about 30 miles from the property, with additional nearby mill
        options for timber delivery. In addition, the Rolling Fork Little River
        flows through this property, supporting wildlife populations and
        enhancing recreational value. A timber tract of this size brings several
        potential investment benefits. Firstly, it allows for frequency and
        optionality of harvest activity and the ability to respond to trends in
        both softwood and hardwood markets. Additionally, ongoing management
        activities associated with regular thinning helps maintain and build
        long term value as an investable timber property. There is also
        flexibility and risk diversification with respect to exit strategy. A
        large tract like this one could ultimately be divided and sold in
        smaller parcels into the timber or recreational market. Alternatively,
        an aggregation strategy in which this tract is combined with another
        AcreTrader timber property in neighboring Howard County could prove
        marketable to institutional buyers.
      </p>
    </div>
  );
};

const Financials = (): JSX.Element => {
  const { financialPercent, financialCosts, financialTotals } = FakeConst;
  // i dont know this is correct or not or should be component and how about style?
  const renderFinancialPrice = ({ id, title, price }: FinancialTotalCostsT) => {
    return (
      <div
        key={id}
        className="flex items-center justify-between md:!w-full"
        style={{ width: 'calc((100% - 145px)/2)' }}
      >
        <span className="text-gray-400 typo-[16]">{title}</span>
        <span className="text-zinc-800 typo-[24-bold-heading]">{price}</span>
      </div>
    );
  };

  return (
    <div>
      <h5 className="mb-20 typo-[24-bold] md:mb-12 xs:mb-6">
        FINANCIAL ASSUMPTIONS
      </h5>
      {/* why mt-20 would not be accept to span */}
      <span className="typo-[20-bold]">Financial Highlights</span>
      <div className="mt-8 mb-6 flex gap-x-36 border-b pr-32 pb-6 lg:pr-0 md:flex-col md:gap-x-0">
        {financialPercent.map((item) => renderFinancialPrice(item))}
      </div>
      <p className="mb-20">
        (1) Should the value of the underlying land increase or decrease based
        on occasional appraisal, the cost of which the Company may bear,
        Acretrader Management may adjust the fee accordingly to maintain the fee
        as 0.75% of the total land value.
      </p>
      <div className="flex-col">
        <span className="typo-[20-bold]">Total Cost of Timberland</span>
        <div className="mt-8 mb-6 flex flex-wrap justify-between gap-x-36 gap-y-7 border-b pr-32 pb-6 lg:pr-0 md:pr-0">
          {financialCosts.map((item) => renderFinancialPrice(item))}
        </div>
      </div>
      <div className="mt-8 mb-6 flex flex-wrap justify-between gap-x-36 gap-y-7 border-b pr-32 pb-6 lg:pr-0 md:flex-col md:pr-0">
        {financialTotals.map(({ id, title, price }) => (
          <div
            key={id}
            className="flex items-center justify-between gap-8 md:!w-full"
            style={{ width: 'calc((100% - 145px)/2)' }}
          >
            <span className="text-slate-700 typo-[16-bold]">{title}</span>
            <span className="text-zinc-800 typo-[36-bold-heading] xs:typo-[28]">
              {price}
            </span>
          </div>
        ))}
      </div>
      <p className="mb-32 md:mb-14">
        (1) Should the value of the underlying land increase or decrease based
        on occasional appraisal, the cost of which the Company may bear,
        Acretrader Management may adjust the fee accordingly to maintain the fee
        as 0.75% of the total land value.(1) Should the value of the underlying
        land increase or decrease based on occasional appraisal, the cost of
        which the Company may bear, Acretrader Management may adjust the fee
        accordingly to maintain the fee as 0.75% of the total land value.(1)
        Should the value of the underlying land increase or decrease based on
        occasional appraisal, the cost of which the Company may bear, Acretrader
        Management may adjust the fee accordingly to maintain the fee as 0.75%
        of the total land value.(1) Should the value of the underlying land
        increase or decrease based on occasional appraisal, the cost of which
        the Company may bear, Acretrader Management may adjust the fee
        accordingly to maintain the fee as 0.75% of the total land value.
      </p>
    </div>
  );
};

const Documents = (): JSX.Element => {
  const { documentsItems } = FakeConst;
  // i dont know this is correct or not or this part should be component and how about style?
  const renderDocumentsCard = ({ id, icon, title, date }: DocumentItemsT) => {
    return (
      <div
        key={id}
        className="flex items-center gap-8 rounded-default border p-5 shadow-card md:!w-full"
        style={{ width: 'calc((100% - 40px)/2)' }}
      >
        <i className={cn(`icon-${icon}`, 'text-2xl')} />
        <div className="flex flex-col">
          <span className="typo-[20-bold]">{title}</span>
          <span className="text-[#3161EB]">{date}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-24 md:mb-13">
      <h5 className="mb-14 typo-[24-bold]">DOCUMENTS</h5>
      <div className="flex flex-wrap gap-10 md:flex-col md:gap-3">
        {documentsItems.map((item) => renderDocumentsCard(item))}
      </div>
    </div>
  );
};

const ProjectTab = (): JSX.Element => {
  const [tab, setTab] = useState<number>(1);
  const { tabItems } = ProjectConst;

  return (
    <div className="container mt-32">
      <div className="px-20 xl:px-0">
        <TabBar
          tabs={tabItems}
          activeTab={tab}
          onChange={setTab}
          className="mb-16 w-full md:mb-12 xs:mb-8"
        />
        {tab === 1 && <Overview />}
        {tab === 2 && (
          <div className="relative mb-18 h-[35rem] w-full overflow-hidden rounded-3xl md:h-[28rem] xs:h-[24rem]">
            <GoogleMapReact
              options={{
                disableDefaultUI: true,
                clickableIcons: false,
              }}
              bootstrapURLKeys={{
                key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '',
              }}
              center={{
                lat: 37,
                lng: 44,
              }}
              defaultZoom={14}
              style={{
                height: '100%',
                width: '100%',
                position: 'absolute',
                zIndex: 10,
              }}
            />
          </div>
        )}
        {tab === 3 && <Financials />}
        {tab === 4 && <Documents />}
        <div className="mx-auto flex w-fit items-center justify-center rounded-[128px] border py-6 pl-14 pr-10 md:border-0 md:bg-white md:py-4 md:px-5 md:shadow-card">
          <div className="flex items-center md:w-1/2 md:flex-col">
            <span className="mr-4 text-gray-400 md:mr-0 md:typo-[12]">
              Min. Investment
            </span>
            <span className="text-zinc-800 typo-[36-bold-heading] md:typo-[24-bold-heading]">
              $17,325
            </span>
          </div>
          <CircularProgressbar
            value={75}
            className="mr-6 ml-10 h-12 !w-12 drop-shadow-circular md:mr-2 md:ml-6"
            strokeWidth={20}
            styles={buildStyles({
              rotation: 0.25,
              strokeLinecap: 'round',
              pathTransitionDuration: 0.5,
              pathColor: `#F0D163`,
              trailColor: '#F4F4F4',
            })}
          />
          <div className="flex flex-col pr-20 leading-5 md:hidden">
            <span className="text-gray-400 typo-[12]">Subscribed</span>
            <span className="text-secondary typo-[24-bold-heading]">63%</span>
          </div>
          <Button
            title="Invest Now"
            type="primary"
            size="tiny"
            className="!flex-none !px-20 md:!px-6"
            titleClassName="typo-[16-700]"
          />
        </div>
      </div>
    </div>
  );
};

export { ProjectTab };
