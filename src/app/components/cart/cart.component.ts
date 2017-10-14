import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	shoppingCart: any = [];
	globalService;
	total: number = 0;

	static get parameters() {
		return [GlobalService];
	}

  constructor(globalService) {
  	this.globalService = globalService;
  }

  ngOnInit() {
  	this.shoppingCart = this.globalService.getCart();
  	for(var a = 0; a < this.shoppingCart.length; a++) {
  		this.total += this.shoppingCart[a].total;
  	}
  }

  emptyCart() {
  	this.globalService.emptyCart();
  	this.shoppingCart = [];
  }
}
