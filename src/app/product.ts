export interface Product {
    id: number;
    title: string;
    currencyType: string;
    oldPrice: number;
    currentPrice: number;
    shortDesc: string;
    sku: string;
    slug: string;
    availability: boolean;
    image: string;
    category: string;
    quantity: number;
}