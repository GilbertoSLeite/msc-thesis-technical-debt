/* eslint-disable max-lines */
import { PersonalData } from '../commons/customer-data';
import { PolicyFinancialData } from '../commons/policy-financial-data';

export default class ExtractFunction {
  private policyValue: object;

  private  perCentum: number;

  private updatedPrice: number;

  private updatedInterest: number;

  private updatedFine: number;

  private updatedInfractionFine: number;

  private updatedMoratorium: number;

  constructor() {
    this.policyValue = {
      prince: 0,
    };
    this.perCentum = 100;
    this.updatedPrice = 0;
    this.updatedInterest = 0;
    this.updatedFine = 0;
    this.updatedInfractionFine = 0;
    this.updatedMoratorium = 0;
  }

  public async policyStructuring(customerData: PersonalData, policyFinancialData: PolicyFinancialData) {
    try {

      

    } catch (error: any) {
      const { message } = error; 
      throw new Error(message);
    }
  }

  private async identifyingEvaluatingAddress(customerAddressData: object) {
    try {
      
    } catch (error: any) {
      const { message } = error; 
      throw new Error(message);      
    }        
  }

  private async calculateInterest(policyFinancialData: PolicyFinancialData) {
    try {
      const interestPercentage = (policyFinancialData.interest / this.perCentum);
      const interestValue = (policyFinancialData.price * interestPercentage); 
      return interestValue;
    } catch (error: any) {
      const { message } = error; 
      throw new Error(message); 
    }
  }

  private async calculateFine(policyFinancialData: PolicyFinancialData) {
    try {
      const interestPercentage = (policyFinancialData.fine / this.perCentum);
      const fineValue = (policyFinancialData.price * interestPercentage); 
      return fineValue;
    } catch (error: any) {
      const { message } = error; 
      throw new Error(message); 
    }    
  }

  private async calculateInfractionFine(policyFinancialData: PolicyFinancialData) {
    try {
      const interestPercentage = (policyFinancialData.infractionFine / this.perCentum);
      const infractionFineValue = (policyFinancialData.price * interestPercentage); 
      return infractionFineValue;
    } catch (error: any) {
      const { message } = error; 
      throw new Error(message); 
    }   
  }

  private async calculateMoratorium(policyFinancialData: PolicyFinancialData) {
    try {
      const interestPercentage = (policyFinancialData.moratorium / this.perCentum);
      const moratoriumValue = (policyFinancialData.price * interestPercentage); 
      return moratoriumValue;
    } catch (error: any) {
      const { message } = error; 
      throw new Error(message); 
    }      
  }

  private async calculatePolicy(policyFinancialData: PolicyFinancialData) {
    try {
      const today = new Date();
      if (policyFinancialData.dueDate < today) {
        const interestValue: number =  await this.calculateInterest(policyFinancialData);
        this.updatedInterest = interestValue;
      }
      this.updatedPrice = ((policyFinancialData.price || 0) - (policyFinancialData.discount || 0));
      this.policyValue.price = this.updatedPrice;
      

      return this.policyValue;
    } catch (error: any) {
      const { message } = error; 
      throw new Error(message);        
    }
  }
}

