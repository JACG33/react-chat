import { IsNotEmpty, IsString, IsStrongPassword, MaxLength, MinLength, } from "class-validator";
export class CreateAuthDto {
  @IsNotEmpty()  
  @IsString()
  @MinLength(5)
  username: string
  
  @IsNotEmpty()  
  @IsString()
  @MinLength(8)
  @MaxLength(13)
  @IsStrongPassword()  
  password:string
}
