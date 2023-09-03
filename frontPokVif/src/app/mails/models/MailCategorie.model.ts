export class MailCategorieModel{
  constructor(public categoryLabel:string, public googleClassification:string, public nameEnum:string, public confidence:number, public isUtile:boolean) {
  }
}
