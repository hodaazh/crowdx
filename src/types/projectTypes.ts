type InvestDetailsItemT = {
  id: number;
  title: string;
  comment: string;
};

type TabBarItemT = {
  id: number;
  title: string;
};

type FinancialTotalCostsT = {
  id: number;
  title: string;
  price: string;
};

type DocumentItemsT = {
  id: number;
  icon: string;
  title: string;
  date: string;
};

type InvestSliderT = {
  id: number;
  img: string;
};

type CategoryT = { title: string; id: number };

export type {
  CategoryT,
  DocumentItemsT,
  FinancialTotalCostsT,
  InvestDetailsItemT,
  InvestSliderT,
  TabBarItemT,
};
