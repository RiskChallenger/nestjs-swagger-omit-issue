import { Injectable } from '@nestjs/common';
import { Measure } from './measure.entity';

@Injectable()
export class AppService {
  getHello(): Measure {
    return new Measure();
  }
}
