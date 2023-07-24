import { Injectable } from '@angular/core';  
import { MlProductList } from '../mlproductlist';


export class TempService {  
   createproduct(data: MlProductList): void {  
   throw new Error("Method not implemented.");  
}  
productList: MlProductList[];  
   getproductlist() {  
   this.productList = [{  
      total: 0,  
      quantity: 0,  
      productname: 'nokia5.1',  
      productdescription: '3000 mah',  
      productdescription01: '4 GB RAM 64 GB Internal storage',  
      productcost: '12,000',  
      productsrc: 'assets/images/nokia5.1.jpg',  
      },  
      ];  
   return this.productList;  
 }
} 