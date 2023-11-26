import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UserCredDTO {
  @ApiProperty({
    name: 'email',
    description: "User's Email",
    type: String,
    example: 'dev@company.com',
  })
  readonly email: string;

  @ApiProperty({
    name: 'password',
    description: "User's Password",
    type: String,
    example: 'abc123',
  })
  readonly password: string;
}

export class createUserDto {
  @ApiProperty({
    name: 'first_name',
    description: "User's first_name",
    type: String,
    example: 'XYZ',
  })
  @IsString()
  readonly first_name: string;

  @ApiProperty({
    name: 'middle_name',
    description: "User's middle_name",
    type: String,
    example: 'XYZ',
  })
  @IsString()
  @IsOptional()
  readonly middle_name?: string;

  @ApiProperty({
    name: 'last_name',
    description: "User's last_name",
    type: String,
    example: 'XYZ',
  })
  @IsString()
  readonly last_name: string;

  @ApiProperty({
    name: 'email',
    description: "User's email",
    type: String,
    example: 'XYZ',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    name: 'password',
    description: "User's password",
    type: String,
    example: 'XYZ',
  })
  @IsString()
  readonly password: string;
}
