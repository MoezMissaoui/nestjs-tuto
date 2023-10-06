import { PartialType } from '@nestjs/mapped-types';
import { CreateFoulenDto } from './create-foulen.dto';

import { IsEmail, IsOptional, IsString } from 'class-validator';


export class UpdateFoulenDto extends PartialType(CreateFoulenDto) {
    
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;

    @IsOptional()
    @IsEmail()
    email: string;
    password: string;
}