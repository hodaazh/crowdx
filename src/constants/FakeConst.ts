import type {
  CommonCardItemT,
  DocumentItemsT,
  FinancialTotalCostsT,
  InvestDetailsItemT,
  InvestSliderT,
  ProjectItemT,
} from '@/types';

interface IType {
  investingItems: CommonCardItemT[];
  projects: ProjectItemT[];
  investDetails: InvestDetailsItemT[];
  financialPercent: FinancialTotalCostsT[];
  financialCosts: FinancialTotalCostsT[];
  financialTotals: FinancialTotalCostsT[];
  documentsItems: DocumentItemsT[];
  investSlider: InvestSliderT[];
  blogCards: CommonCardItemT[];
}

// shoud I add Items at the end of objects?
export const FakeConst: IType = {
  investingItems: [
    {
      id: 1,
      title:
        'Brier Creek Pecan Orchard Wraps Up AcreTrader’s Successful September',
      date: 'Jan 31, 2000',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Risus fames ultrices mauris. Commodo egestas sed massa dui velit ornare aliquam consequat.',
    },
    {
      id: 2,
      title:
        'Brier Creek Pecan Orchard Wraps Up AcreTrader’s Successful September',
      date: 'Jan 31, 2000',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Risus fames ultrices mauris. Commodo egestas sed massa dui velit ornare aliquam consequat.',
    },
    {
      id: 3,
      title:
        'Brier Creek Pecan Orchard Wraps Up AcreTrader’s Successful September',
      date: 'Jan 31, 2000',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Risus fames ultrices mauris. Commodo egestas sed massa dui velit ornare aliquam consequat.',
    },
  ],
  projects: [
    {
      id: 1,
      img: '/media/dynamic/project1.jpg',
      location: 'ALLAURA BOULEVARD, AURORA',
      address: '16, 20, AND 22 ALLAURA BOULEVARD, AURORA',
      preliminary: '11.4%',
      title: 'Alora',
      targetHold: '5-10 Years',
      funded: true,
    },
    {
      id: 2,
      img: '/media/dynamic/project2.jpg',
      location: 'New Tecumseth, ON L0G 1B0',
      address: '4994 7th Line, New Tecumseth, ON L0G 1B0',
      title: 'New Horizons',
      preliminary: '11.4%',
      targetHold: '5-10 Years',
      funded: true,
    },
    {
      id: 3,
      img: '/media/dynamic/project3.jpg',
      location: 'East Gwillimbury, ON',
      address: '19399 Yonge St, East Gwillimbury, ON',
      title: 'Holland Hope',
      preliminary: '11.4%',
      targetHold: '5-10 Years',
      funded: true,
    },
    {
      id: 4,
      img: '/media/dynamic/project4.jpg',
      location: 'Aurora, Ontario',
      address: '1452 Wellington Street E Aurora, Ontario',
      title: 'Livwell on Wellington',
      preliminary: '11.4%',
      targetHold: '5-10 Years',
      funded: true,
    },
  ],
  investDetails: [
    { id: 1, title: 'Price', comment: '$7.412,790' },
    { id: 2, title: 'Size', comment: '3209' },
    { id: 3, title: 'Price/AC', comment: '$2,310' },
    { id: 4, title: 'Development', comment: '5-10 Years' },
    { id: 5, title: 'Min. Investment', comment: '$17,325' },
  ],
  financialPercent: [
    { id: 1, title: 'Implied Average Net Yield', price: '3.6%' },
    { id: 2, title: 'Calculated Unlevered IRR', price: '3.6%' },
  ],
  financialCosts: [
    { id: 1, title: 'Cost of Timberland', price: '$7,199,800' },
    { id: 2, title: 'Transfer & Closing Costs', price: '$53,999' },
    { id: 3, title: 'Legal Fees', price: '$8,645' },
    { id: 4, title: 'Capital Expenditure Reserve', price: '$85,000' },
    { id: 5, title: 'Taxes & Insurance', price: '$12,211' },
    { id: 6, title: 'NCPS and Filing Fees', price: '$38,135' },
    { id: 7, title: 'Phase 1 Environmental', price: '$15,000' },
  ],
  financialTotals: [
    { id: 1, title: 'Total Estimated Cost of Timberland', price: '$7,412,790' },
    { id: 2, title: 'Total Cost Per Acre', price: '$2,310' },
    // { id: 3, title: 'Size', price: '3,209' },
  ],
  documentsItems: [
    {
      id: 1,
      title: 'Articles of organization',
      date: 'Jan 31, 2000',
      icon: 'document',
    },
    {
      id: 2,
      title: 'Articles of organization',
      date: 'Jan 31, 2000',
      icon: 'document',
    },
    {
      id: 3,
      title: 'Articles of organization',
      date: 'Jan 31, 2000',
      icon: 'document',
    },
    {
      id: 4,
      title: 'Articles of organization',
      date: 'Jan 31, 2000',
      icon: 'document',
    },
    {
      id: 5,
      title: 'Articles of organization',
      date: 'Jan 31, 2000',
      icon: 'document',
    },
    {
      id: 6,
      title: 'Articles of organization',
      date: 'Jan 31, 2000',
      icon: 'document',
    },
  ],
  investSlider: [
    { id: 6, img: '/media/dynamic/proj1.png' },
    { id: 1, img: 'https://swiperjs.com/demos/images/nature-1.jpg' },
    { id: 2, img: 'https://swiperjs.com/demos/images/nature-2.jpg' },
    { id: 3, img: 'https://swiperjs.com/demos/images/nature-3.jpg' },
    { id: 4, img: 'https://swiperjs.com/demos/images/nature-4.jpg' },
    { id: 5, img: 'https://swiperjs.com/demos/images/nature-5.jpg' },
    { id: 7, img: '/media/dynamic/proj1.png' },
    { id: 8, img: '/media/dynamic/proj1.png' },
    { id: 9, img: '/media/dynamic/proj1.png' },
    { id: 10, img: '/media/dynamic/proj1.png' },
    { id: 11, img: '/media/dynamic/proj1.png' },
    { id: 12, img: '/media/dynamic/proj1.png' },
  ],
  blogCards: [
    {
      id: 1,
      title:
        'Brier Creek Pecan Orchard Wraps Up AcreTrader’s Successful September',
      date: 'Jan 31, 2000',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Risus fames ultrices mauris.  dolor sit amet consectetur. Risus fames ultrices mauris. Commodo egestas sed massa dui velit ornare aliquam consequat.',
    },
    {
      id: 2,
      title:
        'Brier Creek Pecan Orchard Wraps Up AcreTrader’s Successful September',
      date: 'Jan 31, 2000',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Risus fames ultrices mauris.  dolor sit amet consectetur. Risus fames ultrices mauris. Commodo egestas sed massa dui velit ornare aliquam consequat.',
    },
    {
      id: 3,
      title:
        'Brier Creek Pecan Orchard Wraps Up AcreTrader’s Successful September',
      date: 'Jan 31, 2000',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Risus fames ultrices mauris.  dolor sit amet consectetur. Risus fames ultrices mauris. Commodo egestas sed massa dui velit ornare aliquam consequat.',
    },
    {
      id: 4,
      title:
        'Brier Creek Pecan Orchard Wraps Up AcreTrader’s Successful September',
      date: 'Jan 31, 2000',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Risus fames ultrices mauris.  dolor sit amet consectetur. Risus fames ultrices mauris. Commodo egestas sed massa dui velit ornare aliquam consequat.',
    },
    {
      id: 5,
      title:
        'Brier Creek Pecan Orchard Wraps Up AcreTrader’s Successful September',
      date: 'Jan 31, 2000',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Risus fames ultrices mauris.  dolor sit amet consectetur. Risus fames ultrices mauris. Commodo egestas sed massa dui velit ornare aliquam consequat.',
    },
    {
      id: 6,
      title:
        'Brier Creek Pecan Orchard Wraps Up AcreTrader’s Successful September',
      date: 'Jan 31, 2000',
      comment:
        'Lorem ipsum dolor sit amet consectetur. Risus fames ultrices mauris.  dolor sit amet consectetur. Risus fames ultrices mauris. Commodo egestas sed massa dui velit ornare aliquam consequat.',
    },
  ],
};
