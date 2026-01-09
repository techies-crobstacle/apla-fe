import { NextResponse } from "next/server";

const BRANDS = ["Nike", "Adidas", "Zara", "Puma"];
const CATEGORIES = ["T-Shirt", "Shirt", "SweatShirt", "Hoodies"];
const GENDERS = ["Male", "Female"];

export async function GET() {
  const products = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    brand: BRANDS[i % BRANDS.length],          // ✅ MATCH
    category: CATEGORIES[i % CATEGORIES.length], // ✅ MATCH
    gender: GENDERS[i % GENDERS.length],       // ✅ MATCH
    photo: `/images/temp/${(i % 18) + 1}.jpg`,
    name: `${BRANDS[i % BRANDS.length]} Product ${i + 1}`,
    description: "Mock backend product",
    amount: (20 + (i % 10)).toFixed(2),
  }));

  return NextResponse.json(products);
}
