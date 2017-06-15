var output = document.getElementsByClassName("output")[0];

document.getElementsByName("text")[0].addEventListener("keyup", e => {
  var text = e.target.value;
  var wordCount = text.split(" ").length-1;
  var characterCount = text.length;
  output.innerHTML = text + "<br>Word count: " + wordCount + "<br>character count: " + characterCount;
});

document.getElementsByName("button")[0].addEventListener("click", e => {
  var text = document.getElementsByName("text")[0].value;
  text = firstCharacterUpper(text);
  output.innerHTML += "<br><br>" + text;
});
