import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import { IProduct } from '../interfaces';

@Injectable()
export class DbService {
  getAllProducts(): IProduct[] {
    return JSON.parse(fs.readFileSync('src/assets/products.json', 'utf-8'));
  }

  deleteProduct(productId: string): IProduct[] {
    return JSON.parse(fs.readFileSync('src/assets/products.json', 'utf-8')).map(
      (item: IProduct) => {
        if (item.id === productId) {
          return {
            ...item,
            isDeleted: true
          };
        } else {
          return item;
        }
      }
    );
  }
}
