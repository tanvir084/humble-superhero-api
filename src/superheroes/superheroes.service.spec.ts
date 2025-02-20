import { Test, TestingModule } from '@nestjs/testing';
import { SuperheroesService } from './superheroes.service';
import { SuperheroesGateway } from './superheroes.gateway';

describe('SuperheroesService', () => {
  let service: SuperheroesService;
  let gateway: SuperheroesGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SuperheroesService,
        {
          provide: SuperheroesGateway,
          useValue: { emitNewSuperhero: jest.fn() },
        },
      ],
    }).compile();

    service = module.get<SuperheroesService>(SuperheroesService);
    gateway = module.get<SuperheroesGateway>(SuperheroesGateway);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a new superhero and emit event', () => {
    const dto = { name: 'Test Hero', superpower: 'Testing', humilityScore: 8 };
    const result = service.create(dto);
    expect(result).toHaveProperty('id', 1);
    expect(result).toMatchObject(dto);
    expect(gateway.emitNewSuperhero).toHaveBeenCalledWith(result);
  });

  it('should assign incremental IDs to multiple superheroes', () => {
    const dto1 = { name: 'Hero One', superpower: 'Flying', humilityScore: 7 };
    const dto2 = {
      name: 'Hero Two',
      superpower: 'Invisibility',
      humilityScore: 9,
    };
    const hero1 = service.create(dto1);
    const hero2 = service.create(dto2);
    expect(hero1.id).toBeLessThan(hero2.id);
  });

  it('should return superheroes sorted by humilityScore in descending order', () => {
    // Clear any existing data by reinitializing the service
    // (In our simple in-memory implementation, each test has its own isolated service instance)
    service.create({ name: 'Hero A', superpower: 'Speed', humilityScore: 5 });
    service.create({
      name: 'Hero B',
      superpower: 'Strength',
      humilityScore: 9,
    });
    service.create({
      name: 'Hero C',
      superpower: 'Intellect',
      humilityScore: 7,
    });
    const sorted = service.findAll();
    expect(sorted[0].humilityScore).toBe(9);
    expect(sorted[1].humilityScore).toBe(7);
    expect(sorted[2].humilityScore).toBe(5);
  });
});
