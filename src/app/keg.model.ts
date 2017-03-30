export class Keg {
  pint: number = 124;
  alert: string = "";
  totalSells: number = 0;
  profit: number = 0;

  constructor(public brand: string, public price: number, public alcoholContent: number, public pintPrice: number) {}
}
