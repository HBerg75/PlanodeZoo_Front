export interface ISpace {
  name: string;
  description: string;
  images: string;
  type: string;
  capacity: number;
  duration: number;
  openingHours: string;
  handicappedAccess: boolean;
  status: boolean;
  lastMaintenance: Date;
}
