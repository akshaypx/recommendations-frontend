export interface TopInCatergory {
  href: string;
  'Product Title': string;
  'Product Type': string;
  'Product ID': number;
  'Product Image URL': string;
  'Product Features': string;
  Sales: number;
  generated_description: string;
  'Purchase Count'?: number;
}

export interface ImageErrorEvent extends React.SyntheticEvent<HTMLImageElement, Event> {
  target: HTMLImageElement;
}
