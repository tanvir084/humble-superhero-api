import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class SuperheroesGateway implements OnGatewayInit {
  @WebSocketServer() server: Server;

  afterInit() {
    console.log('Socket.IO server initialized');
  }

  emitNewSuperhero(hero: any) {
    this.server.emit('newSuperhero', hero);
  }
}
