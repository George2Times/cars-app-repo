export interface Service {
  part: string;
  cost: number;
}

export interface Car {
  id?: number;
  name: string;
  model: string;
  services: Service[];
}
