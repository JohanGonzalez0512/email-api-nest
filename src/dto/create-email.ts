import { IsEmail, IsOptional, IsString, IsUUID, Matches, MaxLength, MinLength } from "class-validator";


export class CreateEmailDto {
    @IsString()
    @IsEmail()
    email: string;

    @IsString()
    subject: string;

    @IsString()
    content: string;


    
}