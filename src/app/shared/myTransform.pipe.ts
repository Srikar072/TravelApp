import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'sqNum',
    standalone:true
})

export class squareNum implements PipeTransform{
   
    transform(value: number):number {
       return value*value;
    }
}
