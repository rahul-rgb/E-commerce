import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public cartproduct: any = [];
  public checbox: number = 0;
  public totalpricevalue !:number;
 
  constructor(private cartService: CartService, private api:ApiService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.checbox = res.length;
      this.cartproduct = res;
      this.totalpricevalue = this.cartService.gettotal()
    });
  }

  increament(cartitem:any){
    if(cartitem.quantity != 5){
    cartitem.quantity += 1;
    }
  }
 decrement(cartitem:any){
   if(cartitem.quantity != 1){
      cartitem.quantity -= 1;
  }
}

removecheckout(cartitem:any){
  this.cartService.removeCartItem(cartitem)
}

}
