import {ApiProperty} from "@nestjs/swagger";
import {MeasureStatus} from "./measure-status.enum";

export class MeasureDto {
    @ApiProperty({ type: Number, nullable: true })
    status?: MeasureStatus;
}
