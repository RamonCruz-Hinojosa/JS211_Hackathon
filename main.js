// grabbing the ul element from the dom and calling removeAllChildNodes function
const onClear = () => {
  const parent = document.getElementById("countbox");
  removeAllChildNodes(parent);
};

// calls onclear() function, then assigns charsobj to the result of charcount() function lastly calls updatehtml() function
const onSubmit = () => {
  onClear();
  const inputValue = document.getElementById("stringbox").value;
  const charsObj = charCount(inputValue);
  updateHTML(charsObj, "countbox", "li");
};

/*
  counts all letters 
  @param {string} str - a string that you want to count
  @return {object} -
*/
const charCount = (str) => {
  // object to hold key/values
  let letters = {
    total: str.length,
  };
  // replaces every single non white space character
  str
    .toLowerCase()
    .trim()
    .replace(/ |\./g, "") // replaces all white spaces and .
    .split("") // splits str into single character array
    .forEach((l) => {
      // loop over each letter in array
      // checks if letter exists in char object, if not add it, if it does increase value by 1
      if (isNaN(letters[l])) {
        letters[l] = 1;
      } else {
        letters[l] += 1;
      }
    });

  return letters;
};

/*
Creates a list and appends it to the DOM
@param {object} charsObj -
@param {string} ulID -
@param {string} HTMLelement -
*/
const updateHTML = (charsObj, ulID, newElement) => {
  const ul = document.getElementById(ulID);
  for (key in charsObj) {
    const li = document.createElement(newElement);
    li.appendChild(document.createTextNode(`${key}: ${charsObj[key]}`));
    ul.appendChild(li);
  }
};

/*
removes all inner children of a htmlNode
@param {HTMLNode} parent -
*/
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
