import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getWelcome(): string {
    const port = process.env.PORT || 8080;
    return `<h1>Welcome to the Humble Superhero API! 🦸</h1>
    <p>View the API documentation: <a href="http://localhost:${port}/api-docs" target="_blank">Swagger Docs</a></p>
  `;
  }
}
