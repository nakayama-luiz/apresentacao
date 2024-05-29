import { IsInt, IsNumber, IsString, Max, Min, MinLength} from 'class-validator'

export class CreateBookDto {

    @IsString()
    @MinLength(3)
    title: string;

    @IsNumber()
    @Max(20.0)
    price: number;

    @IsInt()
    @Min(0.0)
    quantity: number;
}
