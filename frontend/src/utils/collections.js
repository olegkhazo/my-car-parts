export const makesCollection = [
    "Acura", "Alfa-romeo", "Am-general", "Aston-martin", "Audi", "Bentley",
    "BMW", "Bugatti", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Daewoo",
    "Dodge", "Eagle", "Ferrari", "Fiat", "Fisker", "Ford", "Genesis", "Geo",
    "GMC", "Honda", "Hummer", "Hyundai", "Infiniti", "Isuzu", "Jaguar", "Jeep",
    "Karma", "Kia", "Lamborghini", "Land-rover", "Lexus", "Lincoln", "Lotus",
    "Lucid", "Maserati", "Maybach", "Mazda", "Mclaren", "Mercedes-Benz",
    "Mercury", "Mini", "Mitsubishi", "Nissan", "Oldsmobile", "Panoz", "Plymouth",
    "Polestar", "Pontiac", "Porsche", "Ram", "Rivian", "Rolls-Royce", "Saab",
    "Saturn", "Scion", "Smart", "Spyker", "Subaru", "Suzuki", "Tesla", "Toyota",
    "Volkswagen", "Volvo"
];
      
export const yearOptions = Array.from({ length: new Date().getFullYear() - 1990 }, (_, index) =>
  (new Date().getFullYear() - index).toString()
);

export const sparePartGroups = [
  "Accessory Belts",
  "Advanced Driver Assistance Systems",
  "Air & Fuel Delivery",
  "Air Conditioning & Heating",
  "Brakes & Brake Parts",
  "Electric, Hybrid & PHEV Specific Parts",
  "Engine Cooling Components",
  "Engines & Engine Parts",
  "Exhaust & Emission Systems",
  "Exterior Parts & Accessories",
  "Ignition Systems & Components",
  "Interior Parts & Accessories",
  "Lighting & Lamps",
  "Racks & Cargo Carriers",
  "Starters, Alternators, ECUs & Wiring",
  "Steering & Suspension",
  "Towing Parts & Accessories",
  "Transmission & Drivetrain",
  "Wheels, Tires & Parts",
  "Other Car & Truck Parts & Accessories"
];

export const carsFuelTypes = [
  "Gasoline", "Diesel", "Flexible Fuel", "Hybrid", "Other"
];

export const carBodyTypes = [
  "Convertible",
  "Convertible SUV",
  "Coupe",
  "Coupe SUV",
  "Crossover",
  "Hatchback",
  "Minivan",
  "Pickup Truck",
  "Sedan",
  "Sports Car",
  "SUV",
  "Wagon",
];