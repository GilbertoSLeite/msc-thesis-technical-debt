export interface PolicyFinancialData {
  price: number, 
  dueDate: Date,
  interest: number,
  fine: number,
  infractionFine: number,
  moratorium: number,
  discount: number 
}


export const financialData: PolicyFinancialData = {
  price: 10.00,
  dueDate: new Date('2023-01-01'),
  interest: 13.05,
  fine: 2,
  infractionFine: 0.5,
  moratorium: 1.5,
  discount: 10,
};

