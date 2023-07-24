import {Body, Controller, Logger, Post} from '@nestjs/common';
import {CreatePollDto} from "./dtos/CreatePoll.dto";
import {JoinPollDto} from "./dtos/JoinPoll.dto";

@Controller('polls')
export class PollsController {
    @Post()
    async create(@Body() createPollDto: CreatePollDto) {
        Logger.log('In create!');
        return createPollDto;
    }

    @Post('/join')
    async join(@Body() joinPollDto: JoinPollDto) {
        Logger.log('In join!');

        return joinPollDto;
    }

    @Post('/rejoin')
    async rejoin() {
        Logger.log('In rejoin!');
    }
}
