'use strict'

const gProjects = [{
  id: "What_in_the_pic",
  name: "What in the pic",
  title: "Can you guess it right?",
  desc: "Simple trivia game.You must guess the correct answer",
  url: "https://guyagam.github.io/What-In-The-Picture/",
  publishedAt: 1670247212000000,
  labels: ["JavaScript", "Css"],
},
{
  id: "Touch_the_num",
  name: "touch the num",
  title: "Can you follow the nums?",
  desc: "Press the number by ascending order",
  url: "https://guyagam.github.io/Touch-the-nums/",
  publishedAt: 1670247812000000,
  labels: ["JavaScript", "Css"],
},
{
  id: "Guess_me",
  name: "Guess me",
  title: "Will i guess your charachter?",
  desc: "My genie Know everyone! ",
  url: "https://guyagam.github.io/Guess-me/",
  publishedAt: 1670247812000,
  labels: ["Jquery", "BootStrap", "Css"],
},
{
  id: "Books_Management",
  name: "Book Management",
  title: "Book management system",
  desc: "Create delete or uppdate a book! ",
  url: "https://guyagam.github.io/Book-shop/",
  publishedAt: 1670248112000000,
  labels: ["JavaScript", "Css", "CRUDL"],
},
{
  id: "balloons",
  name: "Balloons Pop",
  title: "Popping the balloons",
  desc: "Can you pop them all before they get to the top?",
  url: "https://guyagam.github.io/Ballons-Pop/",
  publishedAt: 1670248592000000,
  labels: [, "JavaScript", "Css"],
},
{
  id: "Mines_sweeper",
  name: "Mines sweeper",
  title: "Mark all the Mines",
  desc: "Mark the mines before you blow up",
  url: "https://guyagam.github.io/Mines-sprint1/",
  publishedAt: 1670248772000000,
  labels: [, "Matrixes", "JavaScript", "Css"]
}
]



function getProj() {

  return gProjects
}



function sendMessage(sub, message) {

  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=guyos1997@gmail.com&su=${sub}&body=${message}`)

}