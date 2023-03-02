import { IsNotEmpty, IsString, IsNumber, isNumber } from '@nestjs/class-validator';


export class CreateCourses {
    @IsString()
    @IsNotEmpty()
    name: string;


    @IsString()
    startDate: string;


    @IsNumber()
    hours: number;

    @IsString()
    img: string;

}



