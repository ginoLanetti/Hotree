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
  };
  coordinatorForm: {
    model: {
      responsible: number,
      email: string
    },
  };
  whenForm: {
    model: {
      date: string,
      time: string,
      ampm: string,
      duration: number
    },
  };
}
