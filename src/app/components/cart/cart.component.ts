import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  public totalvalu : any;

  constructor(private cartService: CartService, private route:ActivatedRoute, private api:ApiService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      this.totalvalu = this.cartService.gettotal();
    })
    
  }
  removeItem(item:any) {
     this.cartService.removeCartItem(item);
  }
  emptycart() {
    this.cartService.removeAllCart();
  }




}
