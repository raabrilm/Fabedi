import { ShoppingCartService } from './shopping-cart.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private db: AngularFireDatabase, private shoppingCartService: ShoppingCartService) { }

  async placeOrder(order) {
    let result = await this.db.list('/orders').push(order);
    this.shoppingCartService.clearCart();
    return result;
  }

  getOrders() { 
    return this.db.list('/orders');
  }

  getOrdersByUser(userId: string) {
    return this.db.list('/orders', {
      query: {
        orderByChild: 'userId',
        equalTo: userId        
      }
    });
  }

  getOrdersbyId(orderId) { 
    return this.db.list('/orders/' + orderId);
  }
  getOrdersItemsbyId(orderId) { 
    return this.db.list('/orders/' + orderId + '/items');
  }
  getOrdersShippingbyId(orderId) { 
    return this.db.list('/orders/' + orderId + '/shipping');
  }
  getOrdersDatebyId(orderId) { 
    return this.db.list('/orders/' + orderId + '/datePlaced');
  }
}
