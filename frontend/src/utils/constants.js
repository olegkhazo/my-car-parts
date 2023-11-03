// Example: https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2020
export const GET_MODELS_BY_MAKE_AND_YEAR = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/";

export const FORM_ERRORS_TEXT = {
    UNKNOWN_SERVER_ERROR: "Something went wrong. Please contact us at o.zhuravko@gmail.com",
  };
  
export const FORM_VALIDATION_PATTERNS = {
  COMMON_NOT_EMPTY_PATTERN: /^[a-zA-Z0-9-]{2,20}$/,
  PASSWORD_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{11,}$/,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_PATTERN: /^(?:\+1)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/
};

export const SPARE_PART_GROUPS = [
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
