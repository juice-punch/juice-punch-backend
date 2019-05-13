import {
  WebSocketGateway,
  SubscribeMessage,
  WsResponse,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

@WebSocketGateway(80, { namespace: 'events' })
export class SocketGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server;

  async handleConnection(socket) {
    // console.log(socket);
  }

  async handleDisconnect(socket) {
    // console.log(socket);
  }
}
