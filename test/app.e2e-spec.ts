import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';
import * as dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8080;

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200)
      .expect(`<h1>Welcome to the Humble Superhero API! 🦸</h1>
    <p>View the API documentation: <a href="http://localhost:${PORT}/api-docs" target="_blank">Swagger Docs</a></p>
  `);
  });
});
