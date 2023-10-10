import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFoulenDto {
    



    @ApiProperty({
        description: 'The firstName of a foulen',
        example: 'Moez',
        type: String,
        required: false
    })
    @IsOptional()
    @IsString()
    firstName: string;




    @ApiProperty({
        description: 'The lastName of a foulen',
        example: 'Missaoui',
        type: String,
        required: false
    })
    @IsOptional()
    @IsString()
    lastName: string;




    @ApiProperty({
        description: 'The email of a foulen',
        example: 'rehmat.sayani@gmail.com',
        type: String,
        required: false
    })
    @IsOptional()
    @IsEmail()
    email: string;




    @ApiProperty({
        description: 'The password of a foulen',
        example: '123456',
        type: String,
        required: false,
        minimum: 3
    })
    @MinLength(3)
    password: string;
}