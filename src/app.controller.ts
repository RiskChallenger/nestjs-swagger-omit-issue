import { Body, Controller, Post, Put } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, OmitType } from '@nestjs/swagger';
import { AppService } from './app.service';
import { MeasureDto } from './measure.dto';
import { Measure } from './measure.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Post()
  @ApiCreatedResponse({
    type: OmitType(Measure, ['notes']),
  })
  createMeasure(@Body() measure: MeasureDto): Measure {
    return this.appService.getHello();
  }

  @ApiOkResponse({
    type: OmitType(Measure, ['description']),
  })
  @Put()
  updateMeasure(@Body() measure: MeasureDto): Measure {
    return this.appService.getHello();
  }
}
