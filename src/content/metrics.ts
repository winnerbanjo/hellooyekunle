export interface StatMetric {
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  subtext?: string;
}

export const siteMetrics: StatMetric[] = [
  {
    value: '1,500+',
    numericTarget: 1500,
    suffix: '+',
    label: 'Businesses',
    subtext: 'Using products I’ve built across Africa'
  },
  {
    value: '₦200M+',
    numericTarget: 200,
    suffix: 'M+',
    label: 'Merchant Order Value',
    subtext: 'Processed across Nile & partner merchants'
  },
  {
    value: 'Multiple',
    label: 'Products Shipped',
    subtext: 'Nile, Sena, Booq & developer infrastructure'
  },
  {
    value: 'Too Many',
    label: 'Browser Tabs Open',
    subtext: 'Currently 73. Please do not close them.'
  }
];
