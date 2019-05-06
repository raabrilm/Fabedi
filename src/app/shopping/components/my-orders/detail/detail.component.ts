import { Component, OnInit } from '@angular/core';
import { Order } from 'shared/models/order';
import { AuthService } from 'shared/services/auth.service';
import { OrderService } from 'shared/services/order.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  orders$;
  items;
  id;
  date;
  shipping;
  name;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.orders$ = orderService.getOrdersbyId(this.id);
      this.items = orderService.getOrdersItemsbyId(this.id);
      this.date = orderService.getOrdersDatebyId(this.id);
      this.shipping = orderService.getOrdersShippingbyId(this.id);
      this.name = this.shipping.map((item)=> item.name);
      // console.log(name + 'nada');
      // this.shipping.forEach(element => {
      //   console.log(element[2]);
      // });
   }

  ngOnInit() {
  }

}
