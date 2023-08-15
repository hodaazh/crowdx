import type { NextPage } from 'next';

import { AboutCategory, AboutHeader } from '@/components/pages/about';

const About: NextPage = () => {
  return (
    <div className="container mt-32">
      <div className="px-48 xl:px-0">
        <AboutHeader />
        <AboutCategory />
        <div className="mb-6">
          <span className="typo-[24-bold]">WHY US?</span>
          <p className="mt-6 typo-[18]">
            Rolling Fork Timber Tract has direct access to U.S. Highway 70 and
            boasts an interior road system in good condition. It has received
            significant capital improvements in the past year undertaken by the
            present owner, including construction of a new main road and two new
            bridges. This property has historically been professionally managed
            by an established local forestry company with a large management
            footprint and institutional-grade data and inventory tracking. We
            expect to continue working with the current management company to
            maintain continuity and leverage local expertise. Rolling Fork
            Timber Tract lies in a strong wood basket with extensive mill
            infrastructure. The second largest softwood mill in the southern
            U.S. is located in the nearby town of Dierks, about 30 miles from
            the property, with additional nearby mill options for timber
            delivery. In addition, the Rolling Fork Little River flows through
            this property, supporting wildlife populations and enhancing
            recreational value. A timber tract of this size brings several
            potential investment benefits. Firstly, it allows for frequency and
            optionality of harvest activity and the ability to respond to trends
            in both softwood and hardwood markets. Additionally, ongoing
            management activities associated with regular thinning helps
            maintain and build long term value as an investable timber property.
            There is also flexibility and risk diversification with respect to
            exit strategy. A large tract like this one could ultimately be
            divided and sold in smaller parcels into the timber or recreational
            market. Alternatively, an aggregation strategy in which this tract
            is combined with another AcreTrader timber property in neighboring
            Howard County could prove marketable to institutional buyers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
