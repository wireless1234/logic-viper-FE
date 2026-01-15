// types.ts
export interface TocItem {
  id: string;
  label: string;
  children?: TocItem[];
}
