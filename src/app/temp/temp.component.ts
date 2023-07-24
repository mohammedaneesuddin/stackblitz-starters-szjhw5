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
  public description: MlProductList;  
  constructor(  
     private srvCart: TempService,  
    
  ) { }  
ngOnInit() {  
  this.products = this.srvCart.getproductlist();    
} 

}