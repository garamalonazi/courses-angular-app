import { IsEmail, IsNotEmpty, IsString, MinLength } from '@nestjs/class-validator';
export class CreateUserInfoDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    field: string;

    @IsString()
    role: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @MinLength(6)
    @IsNotEmpty()
    password : string;


}



