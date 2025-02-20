import { Controller, Post, Body, Get } from '@nestjs/common';
import { SuperheroesService, Superhero } from './superheroes.service';
import { CreateSuperheroDto } from './dto/createSuperHero.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

/**
 * SuperheroesController handles HTTP requests for creating
 * and retrieving superhero data. It leverages the SuperheroesService
 * for business logic and includes Swagger decorators for API documentation.
 */
@ApiTags('Superheroes')
@Controller('superheroes')
export class SuperheroesController {
  /**
   * Inject the SuperheroesService to handle the actual
   * creation and retrieval logic for superheroes.
   */
  constructor(private readonly superheroesService: SuperheroesService) {}

  /**
   * POST /superheroes
   *
   * Creates a new superhero using data from the request body.
   * @param createSuperheroDto - DTO containing the superhero's name, superpower, and humility score.
   * @returns The newly created superhero object.
   */
  @Post()
  @ApiOperation({ summary: 'Add a new superhero' })
  @ApiResponse({ status: 201, description: 'Superhero successfully added.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  create(@Body() createSuperheroDto: CreateSuperheroDto): Superhero {
    return this.superheroesService.create(createSuperheroDto);
  }

  /**
   * GET /superheroes
   *
   * Retrieves all superheroes, sorted in descending order by humility score.
   * @returns An array of superhero objects, sorted by humility score.
   */
  @Get()
  @ApiOperation({
    summary: 'Retrieve superheroes sorted by humility score (descending)',
  })
  @ApiResponse({ status: 200, description: 'List of superheroes.' })
  findAll(): Superhero[] {
    return this.superheroesService.findAll();
  }
}
