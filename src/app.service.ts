import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World desde los poderosos estudiantes de tercer semestre!';
  }
}
