import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateFoulenDto {
    
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