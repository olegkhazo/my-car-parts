// Example: https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2020
export const GET_MODELS_BY_MAKE_AND_YEAR = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/";

export const API_URL = "http://localhost:3030/api/";

export const FORM_ERRORS_TEXT = {
    UNKNOWN_SERVER_ERROR: "Something went wrong. Please contact us at info@mynextparts.com",
  };
  
export const FORM_VALIDATION_PATTERNS = {
  COMMON_NOT_EMPTY_PATTERN: /^\s*[a-zA-Z0-9-]+\s*(?:\s+[a-zA-Z0-9-]+)*\s*$/,
  PASSWORD_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{11,}$/,
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_PATTERN: /^(?:\+1)?(?:\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/,
  ENGINE_VOLUME_PATTERN: /^(?:\d|1\d|20)(\.\d\d?)?$/,
  PRICE_PATTERN: /^\d{1,6}$/,
};


