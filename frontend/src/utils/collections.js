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