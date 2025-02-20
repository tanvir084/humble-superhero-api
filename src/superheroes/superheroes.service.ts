import { Injectable } from '@nestjs/common';
import { CreateSuperheroDto } from './dto/createSuperHero.dto';
import { SuperheroesGateway } from './superheroes.gateway';

/**
 * Defines the structure of a Superhero entity.
 */
export interface Superhero {
  id: number;
  name: string;
  superpower: string;
  humilityScore: number;
}

/**
 * This service handles all superhero-related business logic,
 * including creating new heroes and retrieving the full list of heroes.
 */
@Injectable()
export class SuperheroesService {
  // In-memory array to store superheroes
  private superheroes: Superhero[] = [];

  // Counter to auto-increment superhero IDs
  private idCounter = 1;

  /**
   * Injects the SuperheroesGateway to emit real-time events when a new hero is created.
   * @param gateway - The WebSocket gateway for emitting events.
   */
  constructor(private readonly gateway: SuperheroesGateway) {}

  /**
   * Creates a new superhero, emits an event, and returns the created hero.
   * @param createSuperheroDto - The DTO containing name, superpower, and humility score.
   * @returns The newly created Superhero.
   */
  create(createSuperheroDto: CreateSuperheroDto): Superhero {
    const newSuperhero: Superhero = {
      id: this.idCounter++,
      ...createSuperheroDto,
    };

    this.superheroes.push(newSuperhero);

    // Emit the "newSuperhero" event through the gateway
    this.gateway.emitNewSuperhero(newSuperhero);

    return newSuperhero;
  }

  /**
   * Retrieves all superheroes sorted by humility score in descending order.
   * @returns A sorted array of Superhero entities.
   */
  findAll(): Superhero[] {
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
