export const makesCollection = [
  "acura", "alfa-romeo", "am-general", "aston-martin", "audi", "bentley",
  "bmw", "bugatti", "buick", "cadillac", "chevrolet", "chrysler", "daewoo",
  "dodge", "eagle", "ferrari", "fiat", "fisker", "ford", "genesis", "geo",
  "gmc", "honda", "hummer", "hyundai", "infiniti", "isuzu", "jaguar", "jeep",
  "karma", "kia", "lamborghini", "land-rover", "lexus", "lincoln", "lotus",
  "lucid", "maserati", "maybach", "mazda", "mclaren", "mercedes-benz",
  "mercury", "mini", "mitsubishi", "nissan", "oldsmobile", "panoz", "plymouth",
  "polestar", "pontiac", "porsche", "ram", "rivian", "rolls-royce", "saab",
  "saturn", "scion", "smart", "spyker", "subaru", "suzuki", "tesla", "toyota",
  "volkswagen", "volvo"
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

export const suggestionsTableHeaderContent = [
  "Car make",
  "Car model",
  "Car year",
  "Part",
  "Your price",
  "More info"
];

export const allUsersTableHeaderContent = [
  "First name",
  "Last name",
  "Company",
  "Email",
  "Role",
  "Tips Agreement",
  "Terms Agreement",
  "Status"
];

export const requestTableHeaderContent = [
  "Part",
  "Car make",
  "Car model",
  "Year",
  "Condition",
  "Action",
];


//Colors
export const infoTabColors = {
  trueInfoTab: "#017042",
  trueBgInfoTab: "#E4F0EB",
  falseInfoTab: "#FA8282",
  falseBgInfoTab: "#FFE4E4",
};