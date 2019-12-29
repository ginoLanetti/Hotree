export interface FormattedFormStateInterface {
  title: string;
  description: string;
  category_id?: number;
  paid_event: boolean;
  event_fee?: number;
  reward?: number;
  date: string;
  duration?: number;
  coordinator: {
    email?: string;
    id: number;
  };
}
