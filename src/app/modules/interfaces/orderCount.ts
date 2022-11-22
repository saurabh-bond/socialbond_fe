export interface IOrderCount {
  total: number;
  ordersToComplete: number;
  pending: number;
  cancelled: number;
  completed: number;
  processing: number;
}
