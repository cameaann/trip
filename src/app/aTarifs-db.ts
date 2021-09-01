import { Tarif } from "./model/tarif.model";

export const ATARIFS: Tarif[] = [
	{
		"name": "econom",
		"kmCost": 4,
		"freeLuggage": 5,
		"luggageCost": 4000,
		"maxLuggageWeight": 20,
		"distanceDiscount": 0,
		"luggageDiscount": 0
	},
	{
		"name": "advanced",
		"kmCost": 8,
		"freeLuggage": 20,
		"luggageCost": 5000,
		"maxLuggageWeight": 50,
		"ageDiscount": 7,
		"distanceDiscount": 0.3,
		"luggageDiscount": 0
	},
	{
		"name": "lux",
		"kmCost":15,
		"freeLuggage": 50,
		"luggageCost": 0,
		"maxLuggageWeight": 50,
		"ageDiscount": 16,
		"distanceDiscount": 0.3,
		"luggageDiscount": 0
	}]