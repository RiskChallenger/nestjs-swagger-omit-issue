import {Body, Controller, Post} from '@nestjs/common';
import { AppService } from './app.service';
import {MeasureDto} from "./measure.dto";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() measure: MeasureDto): string {
    return this.appService.getHello();
  }
}
