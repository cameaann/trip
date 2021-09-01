export interface Tarif {
    name: string,
    kmCost: number,
    freeLuggage: number,
    luggageCost?: number,
    kgLuggageCost?:number,
    maxLuggageWeight: number,
    ageDiscount?: number,
    distanceDiscount: number,
    luggageDiscount: number 
}