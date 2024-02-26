import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'titleCase'
})

export class  TitleCasePipe implements PipeTransform {
    transform(value: string, ...args: any[]) {
        let propositions = ['of','the', 'in', 'at'];
        let words = value.toLowerCase().split(' ');
    }
}