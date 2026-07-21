import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { PrismaService } from './prisma.service';


@Injectable()
export class OrdersService {
  constructor(
    private readonly prismaService:PrismaService
  ){

  }
  create(createOrderDto: CreateOrderDto) {
    return '' ;
  }

  findAll() {
    return `This action returns all orders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }


 /* update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }*/
}
