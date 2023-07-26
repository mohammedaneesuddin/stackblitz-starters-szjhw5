import { Injectable } from '@angular/core';  
import { MlProductList ,PizzaDetail } from '../mlproductlist';


export class TempService {  
   createproduct(data: MlProductList): void {  
   throw new Error("Method not implemented.");  
}  
productList: MlProductList[];  
   getproductlist() {  
   this.productList = [{
      "pizzaId": 8,
      "pizzaName": "Buffalo  & Chiken Pizza",
      "pizzaCategory": "Non Veg",
      "pizzaLogoUrl": "https://media.istockphoto.com/id/1356754246/photo/fresh-pizza-pickles-bacon-sausages-and-cheese-on-a-wooden-board-close-up-selective-focus.jpg?s=1024x1024&w=is&k=20&c=vY1E0Ol7Z0evLDOg--ZFv2NlyCiKbNASMgRJ-e-My5s=",
      "pizzaDetails": [
          {
              "pizzaRefId": 8,
              "pizzaSize": "Large",
              "pizzaPrice": 1100,
              "pizzaCount": 3
          }
      ]
  },
  {
      "pizzaId": 9,
      "pizzaName": "Meat  & Chiken Pizza",
      "pizzaCategory": "Non Veg",
      "pizzaLogoUrl": "https://media.istockphoto.com/id/1356754246/photo/fresh-pizza-pickles-bacon-sausages-and-cheese-on-a-wooden-board-close-up-selective-focus.jpg?s=1024x1024&w=is&k=20&c=vY1E0Ol7Z0evLDOg--ZFv2NlyCiKbNASMgRJ-e-My5s=",
      "pizzaDetails": [
          {
              "pizzaRefId": 9,
              "pizzaSize": "Large",
              "pizzaPrice": 1100,
              "pizzaCount": 1
          },
          {
              "pizzaRefId": 10,
              "pizzaSize": "Medium",
              "pizzaPrice": 668,
              "pizzaCount": 2
          }
      ]
  },{
   "pizzaId": 8,
   "pizzaName": "Buffalo  & Chiken Pizza",
   "pizzaCategory": "Non Veg",
   "pizzaLogoUrl": "https://media.istockphoto.com/id/1356754246/photo/fresh-pizza-pickles-bacon-sausages-and-cheese-on-a-wooden-board-close-up-selective-focus.jpg?s=1024x1024&w=is&k=20&c=vY1E0Ol7Z0evLDOg--ZFv2NlyCiKbNASMgRJ-e-My5s=",
   "pizzaDetails": [
       {
           "pizzaRefId": 8,
           "pizzaSize": "Large",
           "pizzaPrice": 1100,
           "pizzaCount": 3
       }
   ]
},
{
   "pizzaId": 9,
   "pizzaName": "Meat  & Chiken Pizza",
   "pizzaCategory": "Non Veg",
   "pizzaLogoUrl": "https://media.istockphoto.com/id/1356754246/photo/fresh-pizza-pickles-bacon-sausages-and-cheese-on-a-wooden-board-close-up-selective-focus.jpg?s=1024x1024&w=is&k=20&c=vY1E0Ol7Z0evLDOg--ZFv2NlyCiKbNASMgRJ-e-My5s=",
   "pizzaDetails": [
       {
           "pizzaRefId": 9,
           "pizzaSize": "Large",
           "pizzaPrice": 1100,
           "pizzaCount": 1
       },
       {
           "pizzaRefId": 10,
           "pizzaSize": "Medium",
           "pizzaPrice": 668,
           "pizzaCount": 2
       }
   ]
}
      ];  
   return this.productList;  
 }
} 