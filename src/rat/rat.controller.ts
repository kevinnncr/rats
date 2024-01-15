import { Body, Controller,Delete,Get, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateRatDto, UpdateRatDto } from './dto/create-rat.dto';

@Controller('rat')
export class RatController {
    @Get()
finAll(): string    {
    return 'This action returns all Rats' ;
}

@Get(':id')
findOne(@Param() id: string): string    {
    console.log(id);
    return `This action offers data #${id} Rat`;
}

@Post()

async create(@Body() createRatDto: CreateRatDto): Promise<string>   {
    return 'This action adds a new Rat';
}



@Patch(':id')
async patchCats(@Param('id') id: number, @Body() updateRatDto: UpdateRatDto): Promise<string>{
    return `This action updates the data rat #${id}`;
}


@Delete(':id')
async remove(@Param('id') id: number): Promise<string> {

    return `This action removes a #${id} rat, sorry.`;
 
}

}
