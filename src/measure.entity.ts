import { ApiProperty } from '@nestjs/swagger';

export class Measure {
  id!: number;

  description!: string;

  @ApiProperty({ type: String, nullable: true })
  notes?: string;

  cost?: number;

  @ApiProperty({ type: Date, nullable: true })
  startedAt?: Date;

  @ApiProperty({ type: Date, nullable: true })
  deadline?: Date;

  @ApiProperty({ type: String, nullable: true })
  owner?: string;

  @ApiProperty({ type: Date })
  createdAt = new Date();

  @ApiProperty({ type: Date })
  updatedAt = new Date();
}
