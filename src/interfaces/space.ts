export interface ISpace {
  id: string;
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
