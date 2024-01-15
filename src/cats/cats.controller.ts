// cats.controller.ts
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from './dtos/create-cat.dto';
import { CatsService } from './cats.service';
import {Cat} from './interfaces/cat.interfaces';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
    async findAll():Promise <Cat[]>  {
        return this.catsService.findAll();
    }
    @Get(':id')
    findOne(@Param() id: string): string    {
       
        return `This action offers data #${id} cat`;
    }
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Patch(':id')
async patchCats(@Param('id') id: number, @Body() updateCatDto: UpdateCatDto): Promise<string>{
    return `This action updates the data #${id} cat`;
}

@Delete(':id')
async remove(@Param('id') id: number): Promise<string> {

    return `This action removes a #${id} cat, sorry.`;
 
}
}
