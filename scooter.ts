export interface Scooter {
    id?: string;
    serialNumber: string;
    model: string;
    betteryLevel: number;
    imageUrl: string;
    color: string;
    status: 'available' | 'inRepair' | 'unavailable';
};