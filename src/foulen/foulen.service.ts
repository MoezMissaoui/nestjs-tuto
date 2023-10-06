import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateFoulenDto } from './dto/create-foulen.dto';
import { UpdateFoulenDto } from './dto/update-foulen.dto';

@Injectable()
export class FoulenService {

  create(createFoulenDto: CreateFoulenDto) {
    return {
      data : {
        Foulen : createFoulenDto,
      },
      status : HttpStatus.CREATED,
      message : 'Foulen Posted'
    };
  }

  findAll() {
    return {
      data : {
      },
      status : HttpStatus.OK,
      message : 'Get All'
    };
  }

  findOne(id: number) {
    return {
      data : {
        ID : id,
      },
      status : HttpStatus.OK,
      message : 'Foulen Getted'
    };
  }

  update(id: number, updateFoulenDto: UpdateFoulenDto) {
    return {
      data : {
        ID : id,
        Foulen : updateFoulenDto,
      },
      status : HttpStatus.CREATED,
      message : 'Foulen Puted'
    };
  }

  remove(id: number) {
    return {
      data : {
        ID : id,
      },
      status : HttpStatus.OK,
      message : 'Foulen Deleted'
    };
  }
}
