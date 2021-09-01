import { Tarif } from "./model/tarif.model";

export const RZDTARIFS: Tarif[] = [
	{
		"name": "econom",
		"kmCost":0.5,
		"freeLuggage": 15,
		"kgLuggageCost":50,
		"maxLuggageWeight": 50,
        "ageDiscount": 5,
		"distanceDiscount": 0.5,
		"luggageDiscount": 0
	},
	{		
		"name": "advanced",
		"kmCost":2,
		"freeLuggage": 20,
		"kgLuggageCost":50,
		"maxLuggageWeight": 60,
		"ageDiscount": 8,
		"distanceDiscount": 0.3,
		"luggageDiscount": 0
	},
	{
		
		"name": "lux",
		"kmCost":4,
		"freeLuggage": 60,
		"maxLuggageWeight": 60,
		"ageDiscount": 16,
		"distanceDiscount": 0,
		"luggageDiscount": 0.2
	}]