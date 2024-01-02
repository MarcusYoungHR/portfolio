export function splitStringInHalf(str) {
  // Calculate the middle of the string
  let middle = Math.floor(str.length / 2);

  // If the string has an odd number of characters, add 1 to the middle index
  if (str.length % 2 !== 0) {
      middle += 1;
  }

  // Split the string into two halves
  let firstHalf = str.substring(0, middle);
  let secondHalf = str.substring(middle);

  // Return an array containing the two halves
  return [firstHalf, secondHalf];
}

