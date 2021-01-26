// var first = document.getElementById('first');
// first.style.color = "red";
// first.style.fontSize = "30px";
// first.style.fontFamily = "tahoma"

// var authors = document.querySelectorAll(".speacial h3");
// for (var i= 0; i < authors.length; i++) {
//     var element = authors[i];
//     console.log(element.innerHTML);
//     element.innerHTML = 'Writter-' + (i+1);
//     element.style.color = "red"
//     element.style.margin = "10px"
// }

var article = document.getElementsByClassName('first-article');
var newParagraph = document.createElement('p');
newParagraph.innerHTML = 'This is added by JavaScript';
article.appendChild(newParagraph);


// var articles = document.getElementById("added-more");
// var newParagraphTwo = document.createElement("p");
// newParagraphTwo.innerHTML = "Hello from the outside";
// articles.appendChild(newParagraphTwo);

// var article = document.getElementById("add-more");
// var newParagraphThree = document.createElement("p");
// newParagraphThree.innerHTML = "Hello from the Chittagong";
// article.appendChild(newParagraphThree);