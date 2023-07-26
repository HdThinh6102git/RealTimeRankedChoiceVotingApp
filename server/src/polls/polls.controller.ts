import {Body, Controller, Post, Req, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {CreatePollDto} from "./dtos/CreatePoll.dto";
import {JoinPollDto} from "./dtos/JoinPoll.dto";
import {PollsService} from "./polls.service";
import {ControllerAuthGuard} from "./controller-auth.guard";
import {RequestWithAuth} from "./types";

@UsePipes(new ValidationPipe())
@Controller('polls')
export class PollsController {
    constructor(private pollsService: PollsService) {}
    @Post()
    async create(@Body() createPollDto: CreatePollDto) {
        const result = await this.pollsService.createPoll(createPollDto);

        return result;
    }

    @Post('/join')
    async join(@Body() joinPollDto: JoinPollDto) {
        const result = await this.pollsService.joinPoll(joinPollDto);

        return result;
    }
    @UseGuards(ControllerAuthGuard)
    @Post('/rejoin')
    async rejoin(@Req() request: RequestWithAuth) {
        const { userID, pollID, name } = request; // destruct to get value from request
        const result = await this.pollsService.rejoinPoll({
            name,
            pollID,
            userID,
        });

        return result;
    }
}
