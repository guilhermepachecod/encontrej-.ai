const isStringNullOrEmpty = (str) => {
   return !str || str.trim() === '';
}

const validateStrOrArray = (strOrArray) => {
   if (Array.isArray(strOrArray)) {
      return strOrArray.filter(str => !isStringNullOrEmpty(str));
   }

   return isStringNullOrEmpty(strOrArray) ? undefined : strOrArray;
}

const validatePet = ({ type, breed, size, color, gender, age, location, observations }) => {
   return {
      type: validateStrOrArray(type),
      breed: validateStrOrArray(breed),
      size: validateStrOrArray(size),
      color: validateStrOrArray(color),
      gender: validateStrOrArray(gender),
      age: validateStrOrArray(age),
      location: validateStrOrArray(location),
      observations: validateStrOrArray(observations),
   }
}

const queryString = (params) => Object.entries(params)
   .map(([key, value]) => {
      if (value === undefined) return;
      // If the value is an array, serialize it
      if (Array.isArray(value)) {
         return value.map(val => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&');
      }
      // Otherwise, encode key and value normally
      return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
   })
   .join('&');