import type { FeatureItemT } from '@/types';

interface IType {
  featuresItems: FeatureItemT[];
}

export const HomeConst: IType = {
  featuresItems: [
    {
      id: '1',
      title: 'Equity partnership',
      comment:
        'Equity partnership Become an equity partner in real estate development project from getgo',
    },
    {
      id: '2',
      title: 'Efficient and accessible',
      comment:
        'Efficient and accessible process for both investors and developers.',
    },
    {
      id: '3',
      title: 'Added value & real estate appreciation',
      comment:
        'Benefit from real appreciation and added value created throughout the development.',
    },
  ],
};
