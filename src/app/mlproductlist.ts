export class MlProductList {  
  pizzaId:number
  pizzaName: string;  
  pizzaCategory: string;   
  pizzaLogoUrl: string; 
  pizzaDetails:any
}  

export interface PizzaDetail {
  pizzaRefId: number;
  pizzaSize: string;
  pizzaPrice: number;
  pizzaCount: number;
}