function rot13(str) {
  // Create a variable to store the output
  var output = "";
  // Loop through each character
  for (var i = 0; i < str.length; i++) {
    // Get the character code of the current character
    var charCode = str.charCodeAt(i);
    // If it's a capital letter
    if (charCode >= 65 && charCode <= 90) {
      // Add 13 to its character code
      charCode = charCode + 13 > 90 ? charCode - 13 : charCode + 13;
    }
    // Add the new character to the output
    output += String.fromCharCode(charCode);
  }
  // Return the output
  return output;
}

rot13("SERR PBQR PNZC");
