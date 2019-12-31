export interface FormStateInterface {
  aboutForm: {
    model: AboutFormInterface,
  };
  coordinatorForm: {
    model: CoordinatorFormInterface
  };
  whenForm: {
    model: WhenFormInterface
  };
}

export interface AboutFormInterface {
  title: string;
  description: string;
  category: number;
  payment: string;
  fee: number;
  reward: number;
}

export interface CoordinatorFormInterface {
  responsible: number;
  email: string;
}

export interface WhenFormInterface {
  date: string;
  time: string;
  ampm: string;
  duration: number;
}
