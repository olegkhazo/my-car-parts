// Example: https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2020
export const GET_MODELS_BY_MAKE_AND_YEAR = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/";

export const FORM_ERRORS_TEXT = {
    UNKNOWN_SERVER_ERROR: "Something went wrong. Please contact us at o.zhuravko@gmail.com",
  };
  
  export const FORM_VALIDATION_PATTERNS = {
    PASSWORD_PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[ !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{11,}$/,
    EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  };
  