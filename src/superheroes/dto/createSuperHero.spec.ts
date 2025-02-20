// src/superheroes/dto/create-superhero.dto.spec.ts
import { CreateSuperheroDto } from './createSuperHero.dto';
import { validate } from 'class-validator';

describe('CreateSuperheroDto', () => {
  it('should validate a correct DTO', async () => {
    const dto = new CreateSuperheroDto();
    dto.name = 'Captain Kindness';
    dto.superpower = 'Empathy';
    dto.humilityScore = 8;

    const errors = await validate(dto);
    expect(errors.length).toBe(0);
  });

  it('should fail validation for missing fields', async () => {
    const dto = new CreateSuperheroDto();
    // Missing name, superpower, and humilityScore
    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should fail validation for an invalid humilityScore (too low)', async () => {
    const dto = new CreateSuperheroDto();
    dto.name = 'Captain Courage';
    dto.superpower = 'Bravery';
    dto.humilityScore = 0; // below minimum of 1

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
  });

  it('should fail validation for an invalid humilityScore (too high)', async () => {
    const dto = new CreateSuperheroDto();
    dto.name = 'Captain Bravery';
    dto.superpower = 'Strength';
    dto.humilityScore = 11; // above maximum of 10

    const errors = await validate(dto);
    expect(errors.length).toBeGreaterThan(0);
  });
});
