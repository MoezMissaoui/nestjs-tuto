import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { FoulenService } from './foulen.service';
import { CreateFoulenDto } from './dto/create-foulen.dto';
import { UpdateFoulenDto } from './dto/update-foulen.dto';

@Controller('foulen')
export class FoulenController {
  constructor(private readonly foulenService: FoulenService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createFoulenDto: CreateFoulenDto) {
    return this.foulenService.create(createFoulenDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.foulenService.findAll();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  findOne(@Param('id') id: string) {
    return this.foulenService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id') id: string, @Body() updateFoulenDto: UpdateFoulenDto) {
    return this.foulenService.update(+id, updateFoulenDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id') id: string) {
    return this.foulenService.remove(+id);
  }
}
