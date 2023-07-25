import { Logger } from '@nestjs/common';
import { OnGatewayInit, WebSocketGateway } from '@nestjs/websockets';
import { PollsService } from './polls.service';

@WebSocketGateway({
    namespace: 'polls',
    cors:{
        origin: [],
    }
})
export class PollsGateway implements OnGatewayInit {
    private readonly logger = new Logger(PollsGateway.name);
    constructor(private readonly pollsService: PollsService) {}

    // Gateway initialized (provided in module and instantiated)
    afterInit(): void {
        this.logger.log(`Websocket Gateway initialized.`);
    }
}