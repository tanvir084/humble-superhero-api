import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 8080;

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getWelcome())
        .toBe(`<h1>Welcome to the Humble Superhero API! 🦸</h1>
    <p>View the API documentation: <a href="http://localhost:${PORT}/api-docs" target="_blank">Swagger Docs</a></p>
  `);
    });
  });
});
