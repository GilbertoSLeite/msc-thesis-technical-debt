export interface PersonalData {
  firstName: string;
  lastName: string;
  fullName(): string;
  rg: string,
  cpf: string
}

export const personalData: PersonalData = {
  firstName: 'Gilberto',
  lastName: 'Leite',
  fullName: () => `${personalData.firstName} ${personalData.lastName}`,
  rg: '0844924490',
  cpf: '01897062524',
};

