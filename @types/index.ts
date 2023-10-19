export interface PlatesProps {
  id: string;
  name: string;
  img: string;
  price: number;
  createdAt: Date;
}

export interface UserProps {
  id: string;
  name: string;
  email: string;
  createdAt: Date,
  updatedAt: Date,
  Order: Object[],
}