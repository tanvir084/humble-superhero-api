import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { io, Socket } from 'socket.io-client';
import { AppModule } from '../src/app.module';

describe('Superheroes Gateway (e2e)', () => {
  let app: INestApplication;
  let clientSocket: Socket;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.listen(3001); // Using a separate port for tests

    clientSocket = io('http://localhost:3001', { transports: ['websocket'] });
    await new Promise<void>((resolve) => {
      clientSocket.on('connect', () => resolve());
    });
  });

  afterAll(async () => {
    clientSocket.disconnect();
    await app.close();
  });

  it('should emit "newSuperhero" when a superhero is created', (done) => {
    clientSocket.once('newSuperhero', (data) => {
      try {
        expect(data).toHaveProperty('name', 'Test Hero');
        expect(data).toHaveProperty('superpower', 'Testing');
        expect(data).toHaveProperty('humilityScore', 8);
        done();
      } catch (error) {
        done(error);
      }
    });

    request(app.getHttpServer())
      .post('/superheroes')
      .send({ name: 'Test Hero', superpower: 'Testing', humilityScore: 8 })
      .expect(201)
      .end((err) => {
        if (err) done(err);
      });
  });
});
