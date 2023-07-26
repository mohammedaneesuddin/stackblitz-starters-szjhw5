// import { Component, OnInit } from '@angular/core';
// import { TempService } from '../services/temp.service';
// import { MlProductList, PizzaDetail } from '../mlproductlist';

// @Component({
//   selector: 'app-temp',
//   templateUrl: './temp.component.html',
//   styleUrls: ['./temp.component.css']
// })
// export class TempComponent implements OnInit {
//   public products: MlProductList[];  
//   selectedSize: string | null = null;
//   selectedPrice: number = 0;

//   constructor(private srvCart: TempService) { }

//   ngOnInit() {  
//     this.products = this.srvCart.getproductlist();    
//   } 

//   calculatePrice() {
//     if (this.selectedSize) {
//       const selectedPizza = this.products.find(product => product.pizzaDetails.some((detail: PizzaDetail) => detail.pizzaSize === this.selectedSize));
//       if (selectedPizza) {
//         const pizzaDetail = selectedPizza.pizzaDetails.find((detail: PizzaDetail) => detail.pizzaSize === this.selectedSize);
//         if (pizzaDetail) {
//           this.selectedPrice = pizzaDetail.pizzaPrice;
//         }
//       }
//     }
//   }

//   addToCart() {
//     if (this.selectedSize) {
//       // Here, you can add the selected pizza with the chosen size to the cart.
//       // For example, you can pass the selectedPizza and selectedSize to the cart service or store them in an array representing the cart.
//       console.log('Selected Pizza:', this.selectedSize);
//     }
//   }
// }




import { Component, OnInit } from '@angular/core';
import { TempService } from '../services/temp.service';
import { MlProductList } from '../mlproductlist';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  public products: MlProductList[];
  selectedSize: string | null = null;
  selectedPrice: number = 0; // Add this line to hold the selected pizza's price

  constructor(private srvCart: TempService) { }

  ngOnInit() {  
    this.products = this.srvCart.getproductlist();    
  } 

  calculatePrice(selectedProduct: MlProductList) {
    if (this.selectedSize) {
      const pizzaDetail = selectedProduct.pizzaDetails.find((detail:any) => detail.pizzaSize === this.selectedSize);
      if (pizzaDetail) {
        this.selectedPrice = pizzaDetail.pizzaPrice; // Update the selectedPrice property
      }
    } else {
      this.selectedPrice = 0; // Set to 0 if no pizza size is selected
    }
  }
}