
export interface Link {
  id: number;
  attributes: {
    label?: string;
    href?: string;
    desc?: string;
    external?: boolean;
    badge?: string;
  }
}
