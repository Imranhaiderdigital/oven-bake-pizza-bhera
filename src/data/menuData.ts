export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  badge?: 'Best Seller' | 'New' | 'Hot' | 'Chef\'s Choice' | 'Limited Time';
  rating?: number;
  isPizza?: boolean;
  sizes?: { name: 'Small' | 'Medium' | 'Large' | 'XL'; price: number }[];
}

export interface ToppingOption {
  id: string;
  name: string;
  priceBySize: { Small: number; Medium: number; Large: number; XL: number };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'pizza', name: 'Standard Pizzas', icon: '🍕' },
  { id: 'specialities', name: 'Specialities', icon: '⭐' },
  { id: 'global-special', name: 'Pizza Global Special', icon: '🌍' },
  { id: 'deals', name: 'Deals', icon: '🔥' },
  { id: 'burgers', name: 'Burgers', icon: '🍔' },
  { id: 'pasta', name: 'Pasta\'s', icon: '🍝' },
  { id: 'rolls', name: 'Chicken & Kabab Rolls', icon: '🌯' },
  { id: 'appetizers', name: 'Appetizers', icon: '🍟' },
  { id: 'wings-nuggets', name: 'Wings & Nuggets', icon: '🍗' },
  { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' }
];

export const extraToppings: ToppingOption[] = [
  { id: 'et1', name: 'Extra Cheese Topping', priceBySize: { Small: 100, Medium: 160, Large: 200, XL: 300 } },
  { id: 'et2', name: 'Extra Mayo Topping', priceBySize: { Small: 100, Medium: 120, Large: 180, XL: 250 } }
];

export const menuItems: MenuItem[] = [
  // --- STANDARD PIZZAS ---
  {
    id: 'p1',
    name: 'Chicken Fajita Pizza',
    description: 'Juicy fajita chicken chunks, fresh onions, crunchy bell peppers, and premium olives.',
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.9,
    isPizza: true,
    sizes: [
      { name: 'Small', price: 500 },
      { name: 'Medium', price: 1000 },
      { name: 'Large', price: 1200 },
      { name: 'XL', price: 1800 }
    ]
  },
  {
    id: 'p2',
    name: 'Chicken Bar B.Q Pizza',
    description: 'Smoky chicken boti pieces, fresh onions, ripe tomatoes, and crunchy bell peppers.',
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef\'s Choice',
    rating: 4.8,
    isPizza: true,
    sizes: [
      { name: 'Small', price: 500 },
      { name: 'Medium', price: 1000 },
      { name: 'Large', price: 1200 },
      { name: 'XL', price: 1800 }
    ]
  },
  {
    id: 'p3',
    name: 'Achari Pizza',
    description: 'Spicy chicken achari, fresh onions, bell peppers, black olives, and our special achari sauce.',
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    badge: 'Hot',
    rating: 4.7,
    isPizza: true,
    sizes: [
      { name: 'Small', price: 500 },
      { name: 'Medium', price: 1000 },
      { name: 'Large', price: 1200 },
      { name: 'XL', price: 1800 }
    ]
  },
  {
    id: 'p4',
    name: 'Cheese Lover Pizza',
    description: 'Thick melted layer of premium mozzarella and cheddar cheese with our special signature pizza sauce.',
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=800&q=80',
    rating: 4.6,
    isPizza: true,
    sizes: [
      { name: 'Small', price: 500 },
      { name: 'Medium', price: 1000 },
      { name: 'Large', price: 1200 },
      { name: 'XL', price: 1800 }
    ]
  },
  {
    id: 'p5',
    name: 'Pizza Vegetarian',
    description: 'Our special veggie sauce, onions, tomatoes, sweet corn, fresh mushrooms, and melted cheese.',
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1571066811602-716837d681de?auto=format&fit=crop&w=800&q=80',
    rating: 4.5,
    isPizza: true,
    sizes: [
      { name: 'Small', price: 500 },
      { name: 'Medium', price: 1000 },
      { name: 'Large', price: 1200 },
      { name: 'XL', price: 1800 }
    ]
  },
  {
    id: 'p6',
    name: 'Hot & Spicy Pizza',
    description: 'Spicy chicken or beef chunks, fresh onions, ripe tomatoes, and spicy mixed peppers.',
    price: 500,
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    badge: 'Hot',
    rating: 4.8,
    isPizza: true,
    sizes: [
      { name: 'Small', price: 500 },
      { name: 'Medium', price: 1000 },
      { name: 'Large', price: 1200 },
      { name: 'XL', price: 1800 }
    ]
  },

  // --- SPECIALITIES PIZZAS ---
  {
    id: 'sp1',
    name: 'Oven Bake Special Pizza',
    description: 'Loaded with cheese, onions, tomatoes, bell peppers, olives, mushrooms, sweet corn, sausages, pepperoni, mixed peppers, and BBQ sweet chili or special buffalo sauce.',
    price: 550,
    category: 'specialities',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef\'s Choice',
    rating: 5.0,
    isPizza: true,
    sizes: [
      { name: 'Small', price: 550 },
      { name: 'Medium', price: 1100 },
      { name: 'Large', price: 1300 },
      { name: 'XL', price: 1900 }
    ]
  },
  {
    id: 'sp2',
    name: 'Chicken Supreme Pizza',
    description: 'Spicy chicken, onions, tomatoes, green peppers, olives, sausages, double mozzarella, and double cheese topping.',
    price: 550,
    category: 'specialities',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.9,
    isPizza: true,
    sizes: [
      { name: 'Small', price: 550 },
      { name: 'Medium', price: 1100 },
      { name: 'Large', price: 1300 },
      { name: 'XL', price: 1900 }
    ]
  },

  // --- GLOBAL SPECIALS ---
  {
    id: 'gs1',
    name: 'Crown Crust Pizza',
    description: 'Soft crown crust loaded with cream cheese, premium chicken chunks, olives, onions, and special crown sauce.',
    price: 1200,
    category: 'global-special',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.9,
    isPizza: true,
    sizes: [
      { name: 'Medium', price: 1200 },
      { name: 'Large', price: 1550 },
      { name: 'XL', price: 2100 }
    ]
  },
  {
    id: 'gs2',
    name: 'Malai Boti Pizza',
    description: 'Creamy marinated chicken malai boti pieces, onions, special white sauce, and mozzarella cheese.',
    price: 1200,
    category: 'global-special',
    image: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80',
    badge: 'New',
    rating: 4.8,
    isPizza: true,
    sizes: [
      { name: 'Medium', price: 1200 },
      { name: 'Large', price: 1550 },
      { name: 'XL', price: 2100 }
    ]
  },
  {
    id: 'gs3',
    name: 'Behari Kabab Pizza',
    description: 'Smoky Behary chicken kebab chunks, ring onions, green chillies, mozzarella, and special behari spices.',
    price: 1200,
    category: 'global-special',
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80',
    rating: 4.7,
    isPizza: true,
    sizes: [
      { name: 'Medium', price: 1200 },
      { name: 'Large', price: 1550 },
      { name: 'XL', price: 2100 }
    ]
  },

  // --- BURGERS ---
  {
    id: 'b1',
    name: 'Chicken Peti Burger',
    description: 'Juicy chicken patty, fresh lettuce, sliced tomatoes, and creamy mayonnaise on a soft toasted bun.',
    price: 280,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    rating: 4.5
  },
  {
    id: 'b2',
    name: 'Zinger Burger',
    description: 'Deep-fried golden crispy chicken thigh fillet, crisp iceberg lettuce, mayonnaise on a toasted bun.',
    price: 350,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.8
  },
  {
    id: 'b3',
    name: 'Zinger Burger with Cheese',
    description: 'Crispy zinger chicken fillet, melted cheddar cheese slice, fresh lettuce, and burger sauce.',
    price: 400,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'b4',
    name: 'Zinger Tower Burger',
    description: 'Double crispy zinger fillets, double cheese, lettuce, tomatoes, and spicy house sauce.',
    price: 500,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: 'Hot',
    rating: 4.9
  },
  {
    id: 'b5',
    name: 'Double Decker Burger',
    description: 'Layered crispy zinger chicken breast fillets, cheddar cheese slices, onions, lettuce, and premium dressing.',
    price: 500,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'b6',
    name: '2 Chicken Burger (Combo)',
    description: 'Double portion: 2 Classic Chicken Peti Burgers served with a 500ml Cold Drink.',
    price: 600,
    oldPrice: 710,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    badge: 'Limited Time',
    rating: 4.6
  },
  {
    id: 'b7',
    name: '2 Zinger Burger (Combo)',
    description: 'Double portion: 2 crispy Zinger Burgers served with a 500ml Cold Drink.',
    price: 740,
    oldPrice: 850,
    category: 'burgers',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.8
  },

  // --- PASTAS ---
  {
    id: 'pas1',
    name: 'Crispy Pasta',
    description: 'Penne pasta tossed in creamy white cheese sauce, topped with shredded crispy chicken and olives.',
    price: 800,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    badge: 'New',
    rating: 4.8
  },
  {
    id: 'pas2',
    name: 'Alfredo Pasta',
    description: 'Fettuccine pasta in rich buttery garlic cream sauce, loaded with sliced grilled chicken breast and mushrooms.',
    price: 750,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.9
  },
  {
    id: 'pas3',
    name: 'Creamy Pasta',
    description: 'Macaroni noodles cooked in white cheese sauce, seasoned chicken breast pieces, and sweet corn.',
    price: 700,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    rating: 4.6
  },
  {
    id: 'pas4',
    name: 'Loaded Fries',
    description: 'Large portion of fries smothered with hot cheese sauce, shredded chicken chunks, jalapeños, and olives.',
    price: 650,
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.9
  },

  // --- CHICKEN & KABAB ROLLS ---
  {
    id: 'r1',
    name: 'Chicken Shawarma',
    description: 'Tender chicken strips wrapped in warm pita bread with cabbage, pickles, and our signature garlic sauce.',
    price: 220,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    rating: 4.5
  },
  {
    id: 'r2',
    name: 'Zinger Shawarma',
    description: 'Crispy fried zinger chicken strips wrapped in pita bread with fresh cabbage, mayo, and chili sauce.',
    price: 280,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.7
  },
  {
    id: 'r3',
    name: 'Chicken Paratha Roll',
    description: 'Seasoned chicken chunks wrapped in a flaky, pan-fried paratha with onions and green mint chutney.',
    price: 240,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80',
    rating: 4.6
  },
  {
    id: 'r4',
    name: 'Zinger Paratha Roll',
    description: 'Crispy zinger chicken strips, lettuce, mayo, wrapped in a fresh flaky paratha.',
    price: 300,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80',
    badge: 'Hot',
    rating: 4.8
  },
  {
    id: 'r5',
    name: 'Chicken Kabab Roll',
    description: 'Smoky seekh kabab wrapped in warm flatbread or paratha with onions and spiced mint sauce.',
    price: 200,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80',
    rating: 4.4
  },
  {
    id: 'r6',
    name: 'Stuffed Chicken Spin Rolls',
    description: 'Premium rolls stuffed with spiced chicken, cheese, herbs, and special garlic mayonnaise, oven baked.',
    price: 580,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80',
    badge: 'New',
    rating: 4.8
  },
  {
    id: 'r7',
    name: 'Oven Bake Platter',
    description: 'Chef\'s special: Marinated oven-baked wings, 4 pieces BBQ spring rolls, French fries, and special mayo dip sauces.',
    price: 1100,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef\'s Choice',
    rating: 4.9
  },
  {
    id: 'r8',
    name: '2 Shawarma (Combo)',
    description: 'Double treat: 2 Chicken Shawarmas served with a 500ml Cold Drink.',
    price: 540,
    oldPrice: 590,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1633964913295-ceb43826e7c9?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'r9',
    name: '2 Pratha Roll (Combo)',
    description: 'Double treat: 2 Chicken Paratha Rolls served with a 500ml Cold Drink.',
    price: 580,
    oldPrice: 630,
    category: 'rolls',
    image: 'https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },

  // --- APPETIZERS ---
  {
    id: 'a1',
    name: 'French Fries (Regular)',
    description: 'Classic salted potato fries, crispy and golden.',
    price: 250,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    rating: 4.5
  },
  {
    id: 'a2',
    name: 'French Fries (Large)',
    description: 'Large family portion of salted crispy potato fries.',
    price: 350,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    rating: 4.6
  },
  {
    id: 'a3',
    name: 'Special Mayo Fries (Regular)',
    description: 'Crispy fries drizzled with our special garlic mayo dip sauce.',
    price: 300,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'a4',
    name: 'Special Mayo Fries (Large)',
    description: 'Large family portion of fries loaded with special garlic mayo sauce.',
    price: 400,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'a5',
    name: 'Cheesy Bread Sticks',
    description: 'Freshly baked bread sticks topped with double melted mozzarella and dry Italian herbs.',
    price: 800,
    category: 'appetizers',
    image: 'https://images.unsplash.com/photo-1531749668029-2db88e4b76ce?auto=format&fit=crop&w=800&q=80',
    badge: 'New',
    rating: 4.8
  },

  // --- WINGS & NUGGETS ---
  {
    id: 'wn1',
    name: 'Oven Baked Wings (6 Pcs)',
    description: 'Oven-baked chicken wings tossed in BBQ sweet chili or special buffalo sauce.',
    price: 350,
    category: 'wings-nuggets',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'wn2',
    name: 'Oven Baked Wings (12 Pcs)',
    description: 'Double portion: 12 oven-baked wings tossed in BBQ sweet chili or buffalo sauce.',
    price: 650,
    category: 'wings-nuggets',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.9
  },
  {
    id: 'wn3',
    name: 'BBQ Hot Wings (6 Pcs)',
    description: 'Crispy wings coated in hot spicy barbecue sauce.',
    price: 350,
    category: 'wings-nuggets',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    rating: 4.6
  },
  {
    id: 'wn4',
    name: 'BBQ Hot Wings (12 Pcs)',
    description: 'Large portion of 12 wings coated in spicy barbecue glaze.',
    price: 650,
    category: 'wings-nuggets',
    image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'wn5',
    name: 'Chicken Nuggets (6 Pcs)',
    description: 'Crispy golden chicken nuggets served with ketchup dip.',
    price: 350,
    category: 'wings-nuggets',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    rating: 4.5
  },
  {
    id: 'wn6',
    name: 'Chicken Nuggets (12 Pcs)',
    description: 'Portion of 12 crispy breaded chicken nuggets.',
    price: 650,
    category: 'wings-nuggets',
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80',
    rating: 4.6
  },

  // --- SANDWICHES ---
  {
    id: 's1',
    name: 'Jalapeno Cheese Sandwich',
    description: 'Chicken chunks, jalapeños, lettuce, tomatoes, and melted cheese inside toasted bread, served with fries.',
    price: 650,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=800&q=80',
    rating: 4.6
  },
  {
    id: 's2',
    name: 'Classic Chicken Sandwich',
    description: 'Cube chicken, fresh lettuce, tomatoes, and cheese with special sauce inside toasted bread, served with fries.',
    price: 650,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.7
  },
  {
    id: 's3',
    name: 'Zinger Sandwich',
    description: 'Shredded crispy zinger chicken, lettuce, tomatoes, cheese slice and mayo inside toasted bread, served with fries.',
    price: 700,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&w=800&q=80',
    badge: 'Hot',
    rating: 4.8
  },

  // --- DEALS ---
  {
    id: 'd1',
    name: 'STUDENT DEAL',
    description: '1 Small Pizza + 1 Soft Drink (350ml).',
    price: 570,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    badge: 'Limited Time',
    rating: 4.8
  },
  {
    id: 'd2',
    name: 'Evening Deal',
    description: '1 Large Pizza + 1 Cold Drink (1 Ltr). Perfect for dinner.',
    price: 1350,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.9
  },
  {
    id: 'd3',
    name: 'Midnight Deal',
    description: '2 Large Pizzas + 1 Cold Drink (1.5 Ltr). Perfect for late night parties.',
    price: 2590,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    badge: 'Hot',
    rating: 4.9
  },
  {
    id: 'd4',
    name: 'Deal (1)',
    description: '1 Paratha Roll + 1 Chicken Burger + 1 Cold Drink (500ml).',
    price: 620,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'd5',
    name: 'Deal (2)',
    description: '1 Zinger Burger + 1 Chicken Shawarma + 1 Cold Drink (500ml).',
    price: 670,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 4.8
  },
  {
    id: 'd6',
    name: 'Deal (3)',
    description: '1 Zinger Burger + 1 Paratha Roll + 1 Chicken Shawarma + 1 Cold Drink (500ml).',
    price: 910,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    rating: 4.7
  },
  {
    id: 'd7',
    name: 'Deal (4)',
    description: '1 Small Pizza + 1 Zinger Burger + 1 Cold Drink (500ml).',
    price: 950,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=80',
    badge: 'Limited Time',
    rating: 4.8
  },
  {
    id: 'd8',
    name: 'Deal (5)',
    description: '1 Medium Pizza + 2 Zinger Burgers + 1 Chicken Shawarma + 1 Cold Drink (1.5 Ltr).',
    price: 2340,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80',
    rating: 4.9
  },
  {
    id: 'd9',
    name: 'Deal (6)',
    description: '1 Large Pizza + 2 Zinger Burgers + 2 Paratha Rolls + 1 Cold Drink (1.5 Ltr).',
    price: 2580,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef\'s Choice',
    rating: 4.9
  },
  {
    id: 'd10',
    name: 'Big Deal-1',
    description: '1 Large Pizza + 1 Small Pizza + 2 Zinger Burgers + 1 Chicken Shawarma + 1 Cold Drink (1.5 Ltr).',
    price: 2690,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=800&q=80',
    badge: 'Best Seller',
    rating: 5.0
  },
  {
    id: 'd11',
    name: 'Big Deal-2',
    description: '2 Large Pizzas + 2 Zinger Burgers + 2 Chicken Burgers + 2 Chicken Shawarmas + 2 Paratha Rolls + 2 Cold Drinks (1.5 Ltr).',
    price: 4800,
    category: 'deals',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    badge: 'Chef\'s Choice',
    rating: 5.0
  }
];

export const reviews = [
  {
    name: 'Imran Haider',
    rating: 5,
    text: 'Amazing pizza! The cheese crust was perfectly baked and loaded with fresh tikka chunks. Best pizza shop in Bhera city without a doubt.',
    date: 'July 10, 2026'
  },
  {
    name: 'Aisha Malik',
    rating: 5,
    text: 'The Malai Boti Pizza is my absolute favorite. It is so creamy and has a perfect local blend of spices. Extremely fast home delivery too.',
    date: 'July 05, 2026'
  },
  {
    name: 'Zain Ashraf',
    rating: 4,
    text: 'Loaded Fries and Zinger Burgers are top-notch. Very clean environment for dining in with friends. Highly recommended.',
    date: 'June 28, 2026'
  },
  {
    name: 'Dr. Usman Ahmed',
    rating: 5,
    text: 'Oven Bake Pizza has set a very high standard for food quality in Bhera. Their kitchen is highly hygienic, and the staff is extremely friendly.',
    date: 'June 15, 2026'
  }
];
