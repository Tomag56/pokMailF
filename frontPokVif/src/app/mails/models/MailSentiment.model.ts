export class MailSentimentModel {
  constructor(public sentimentLabel:string, public indice:number, public score:number, public magnitude:number, public warning:boolean) {
  }
}
