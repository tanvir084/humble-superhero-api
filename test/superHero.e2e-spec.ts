// test/superheroes.e2e-spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Superheroes API (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // Enable global validation so DTO rules are enforced
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
  });

  it('/superheroes (POST) - valid input', () => {
    return request(app.getHttpServer())
      .post('/superheroes')
      .send({
        name: 'Captain Kindness',
        superpower: 'Empathy',
        humilityScore: 9,
      })
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toBe('Captain Kindness');
        expect(response.body.humilityScore).toBe(9);
      });
  });

  it('/superheroes (POST) - invalid input (missing name)', () => {
    return request(app.getHttpServer())
      .post('/superheroes')
      .send({
        superpower: 'Empathy',
        humilityScore: 9,
      })
      .expect(400);
  });

  it('/superheroes (POST) - invalid input (humilityScore too low)', () => {
    return request(app.getHttpServer())
      .post('/superheroes')
      .send({
        name: 'Captain Weak',
        superpower: 'Empathy',
        humilityScore: 0, // invalid value
      })
      .expect(400);
  });

  it('/superheroes (POST) - invalid input (humilityScore too high)', () => {
    return request(app.getHttpServer())
      .post('/superheroes')
      .send({
        name: 'Captain Overconfident',
        superpower: 'Speed',
        humilityScore: 11, // invalid value
      })
      .expect(400);
  });

  it('/superheroes (GET) - should return superheroes sorted by humility score', async () => {
    // Add a few superheroes first
    await request(app.getHttpServer())
      .post('/superheroes')
      .send({ name: 'Hero A', superpower: 'Flying', humilityScore: 5 });
    await request(app.getHttpServer())
      .post('/superheroes')
      .send({ name: 'Hero B', superpower: 'Invisibility', humilityScore: 10 });
    await request(app.getHttpServer())
      .post('/superheroes')
      .send({ name: 'Hero C', superpower: 'Strength', humilityScore: 7 });

    const response = await request(app.getHttpServer())
      .get('/superheroes')
      .expect(200);

    // Check that the superheroes are sorted in descending order by humilityScore
    const scores = response.body.map((hero) => hero.humilityScore);
    for (let i = 0; i < scores.length - 1; i++) {
      expect(scores[i]).toBeGreaterThanOrEqual(scores[i + 1]);
    }
  });

  afterAll(async () => {
    await app.close();
  });
});
