export interface Product {
  photoUrl: string;
  name: string;
  qty: number;
  measurementUnit: string;
  price: number;
  careType: CareType;
  brand: string;
  applicationTime: string;
}

export enum CareType {
  bodily = 'bodily',
  facial = 'facial',
}

const products: Product[] = [
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 30000,
    careType: CareType.bodily,
    brand: 'Pepito',
    applicationTime: 'day',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 20000,
    careType: CareType.bodily,
    brand: 'Leonisa',
    applicationTime: 'day',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 12331,
    careType: CareType.bodily,
    brand: 'Leonisa',
    applicationTime: 'day',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 200,
    careType: CareType.bodily,
    brand: 'Pepito',
    applicationTime: 'day',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 1200,
    careType: CareType.bodily,
    brand: 'Pepito',
    applicationTime: 'day',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 1234,
    careType: CareType.bodily,
    brand: 'Gucci',
    applicationTime: 'night',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 1234,
    careType: CareType.bodily,
    brand: 'Pepito',
    applicationTime: 'day',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 7000,
    careType: CareType.bodily,
    brand: 'Bebes',
    applicationTime: 'day',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 700,
    careType: CareType.bodily,
    brand: 'Pepito',
    applicationTime: 'night',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 500,
    careType: CareType.facial,
    brand: 'Pepito',
    applicationTime: 'day',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 30000,
    careType: CareType.facial,
    brand: 'Pepito',
    applicationTime: 'day',
  },
  {
    photoUrl:
      'https://i.picsum.photos/id/939/200/200.jpg?hmac=iqiSg4LCwK5ANmtBOgb0nQOLsoedkjQNxc_AH-WNlFc',
    name: 'Esto es un nombre',
    qty: 25,
    measurementUnit: 'ml',
    price: 2000,
    careType: CareType.facial,
    brand: 'Leonisa',
    applicationTime: 'night',
  },
];

export default products;
