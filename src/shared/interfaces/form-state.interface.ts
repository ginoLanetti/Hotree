export interface FormStateInterface {
  aboutForm: {
    model: {
      title: string,
      description: string,
      category: number,
      payment: string,
      fee: number,
      reward: number
    },
    dirty: boolean,
    status: string,
    errors: object
  };
  coordinatorForm: {
    model: {
      responsible: number,
      email: string
    },
    dirty: boolean,
    status: string,
    errors: object
  };
  whenForm: {
    model: {
      date: string,
      time: string,
      ampm: string,
      duration: number
    },
    dirty: boolean,
    status: string,
    errors: object
  };
}
