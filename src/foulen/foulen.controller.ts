import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { FoulenService } from './foulen.service';
import { CreateFoulenDto } from './dto/create-foulen.dto';
import { UpdateFoulenDto } from './dto/update-foulen.dto';

import { 
        ApiTags, 
        ApiOkResponse, 
        ApiForbiddenResponse, 
        ApiCreatedResponse, 
        ApiBody,
        ApiBearerAuth
      } from '@nestjs/swagger';


@ApiTags('foulens')
@Controller('foulens')
export class FoulenController {
  constructor(private readonly foulenService: FoulenService) {}

  /**
   * Create Foulen API
   * @param createFoulenDto 
   * @returns 
   */
  @Post()
  @HttpCode(HttpStatus.CREATED)

  @ApiBearerAuth('access-token') //edit here

  @ApiCreatedResponse({ description: 'The record has been successfully created.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiBody({
      type: CreateFoulenDto,
      description: 'Json structure for foulen object',
  })

  create(@Body() createFoulenDto: CreateFoulenDto) {
    return this.foulenService.create(createFoulenDto);
  }


  /**
   * Get All Foulens API
   * @returns 
   */
  @Get()
  @HttpCode(HttpStatus.OK)

  @ApiOkResponse({  description: 'All records has been successfully getted.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})

  findAll() {
    return this.foulenService.findAll();
  }



  /**
   * Get Foulen API
   * @param id 
   * @returns 
   */
  @Get(':id')
  @HttpCode(HttpStatus.OK)

  @ApiOkResponse({ description: 'The record has been successfully getted.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})

  findOne(@Param('id') id: string) {
    return this.foulenService.findOne(+id);
  }


  /**
   * Update Foulen API
   * @param id 
   * @param updateFoulenDto 
   * @returns 
   */
  @Patch(':id')
  @HttpCode(HttpStatus.OK)

  @ApiOkResponse({ description: 'The record has been successfully updated.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiBody({
      type: UpdateFoulenDto,
      description: 'Json structure for foulen object',
  })

  update(@Param('id') id: string, @Body() updateFoulenDto: UpdateFoulenDto) {
    return this.foulenService.update(+id, updateFoulenDto);
  }



  /**
   * Delete Foulen API
   * 
   * @param id 
   * @returns 
   */
  @Delete(':id')
  @HttpCode(HttpStatus.OK)

  @ApiOkResponse({ description: 'The record has been successfully deleted.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})

  remove(@Param('id') id: string) {
    return this.foulenService.remove(+id);
  }
}
