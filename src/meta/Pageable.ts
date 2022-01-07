export interface Pageable {
  page: number;
  size: number;
  sort: string;
}

export interface PageableData<T> {
  total: number;
  (data: T[]): T[];
}