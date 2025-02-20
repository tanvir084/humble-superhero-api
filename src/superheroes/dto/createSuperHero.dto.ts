import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateSuperheroDto {
  @ApiProperty({
    description: 'The name of the superhero',
    example: 'Captain Kindness',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'The superpower of the superhero',
    example: 'Empathy',
  })
  @IsString()
  @IsNotEmpty()
  superpower: string;

  @ApiProperty({
    description: 'Humility score of the superhero (1-10)',
    example: 9,
  })
  @IsNumber()
  @Min(1)
  @Max(10)
  humilityScore: number;
}
