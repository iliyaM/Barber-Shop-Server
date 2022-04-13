import { Controller, Get } from '@nestjs/common';
import { DbService } from './services/db.service';

@Controller()
export class AppController {
  constructor(private readonly dbService: DbService) {
  }

  @Get('/products')
  getAllProducts() {
    return this.dbService.getAllProducts();
  }
}

