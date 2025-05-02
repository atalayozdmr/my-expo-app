export interface Product {
  id: string;
  name: string;
  brand: string;
  price: string;
  // string: uzaktan URI, number: require() dönen asset id
  image: string | number;
  discount?: string;
}
