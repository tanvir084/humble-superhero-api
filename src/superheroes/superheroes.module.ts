import { Module } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { SuperheroesController } from './superheroes.controller';
import { SuperheroesGateway } from './superheroes.gateway';

@Module({
  controllers: [SuperheroesController],
  providers: [SuperheroesService, SuperheroesGateway],
})
export class SuperheroesModule {}
