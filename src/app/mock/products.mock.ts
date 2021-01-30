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
    price: 30000,
    careType: CareType.bodily,
    brand: 'Pepito',
    applicationTime: 'day',
  },
];

export default products;
