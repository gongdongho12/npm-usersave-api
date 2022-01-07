export interface Pageable {
  page: number;
  size: number;
  sort: string;
}

export interface PageableData {
  total: number;
  data: any[];
}