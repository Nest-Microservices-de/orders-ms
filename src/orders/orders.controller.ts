import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @MessagePattern({cmd:'createOrder'})
  create(@Payload() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern({cmd:'findAllOrders'})
  findAll() {
    return this.ordersService.findAll();
  }

  @MessagePattern('findOneOrder')
  findOne(@Payload() id: number) {
    return this.ordersService.findOne(id);
  }

  @MessagePattern('')
  changeOrderStatus() {
    return 'estado de la orden cambiado'
  }


  /* @MessagePattern('updateOrder')
   update(@Payload() updateOrderDto: UpdateOrderDto) {
     return this.ordersService.update(updateOrderDto.id, updateOrderDto);
   }
 
   @MessagePattern('removeOrder')
   remove(@Payload() id: number) {
     return this.ordersService.remove(id);
   }*/
}
