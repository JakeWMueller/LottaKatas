// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3

//rounds edge cases out of range to 0 or 255
const withinRange = value => {
  if (value < 0) {
    return 0;
  } else if (value > 255) {
    return 255;
  }
  return value;
}

//padding was created last to account for when a zero is returned, the instructions want 000000 not 000
//if the value length is 1, then add another 0 to the value, otherwise return the original value
const padding = value => value.length === 1 ? '0' + value : value;

//converting our strings to hex, toString(16) is a built in way to do this. UpperCase any lowers
const toHex = value => padding(value.toString(16).toUpperCase());

//put it all together, make sure the value is in range and then convert it to Hex, accounting for 0s
const conversion = value => toHex(withinRange(value));

//convert all three separately within an f string
function rgb(r, g, b){
  return `${conversion(r)}${conversion(g)}${conversion(b)}`;
}