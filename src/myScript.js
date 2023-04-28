var phrases=[
    "That`s sounds good",
    "Yes, you should definitely do that",
    "I`m not sure that`s a great idea",
    "Maybe not today?",
    "Computer says no."
    ];

phrases[Math.floor(Math.random()*5)]; // рандом відповідей 


var randomBodyParts = ["Face", "Nose", "Hair", "Hands"];
var randomAdjectives = ["Smelly", "Dirtier", "Stupid"];
var randomAnimals = ["a Bear", "a Marmot", "an Elefant", "a Monkey", "a Rat"];
var randomAnimalBodyParts = ["Leg", "Mouse", "Ear", "Tail", "Wool"];
var randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomAnimal =
  randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
var randomAnimalBodyPart =
  randomAnimalBodyParts[
    Math.floor(Math.random() * randomAnimalBodyParts.length)
  ];
var randomInsult =
  "Your " +
  randomBodyPart +
  " is more " +
  randomAdjective +
  " than " +
  randomAnimal +
  "`s " +
  randomAnimalBodyPart;//метод "+" для створення рядка 
randomInsult;
("Your Hands is more Dirtier than an Elefant`s Tail");


var randomBodyParts = ["Face", "Nose", "Hair", "Hands"];
var randomAdjectives = ["Smelly", "Dirtier", "Stupid"];
var randomAnimals = ["a Bear", "a Marmot", "an Elefant", "a Monkey", "a Rat"];
var randomAnimalBodyParts = ["Leg", "Mouse", "Ear", "Tail", "Wool"];
var randomBodyPart =
  randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
var randomAdjective =
  randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
var randomAnimal =
  randomAnimals[Math.floor(Math.random() * randomAnimals.length)];
var randomAnimalBodyPart =
  randomAnimalBodyParts[
    Math.floor(Math.random() * randomAnimalBodyParts.length)
  ];
var randomInsult = [
  "Your",
  randomBodyPart,
  "is more",
  randomAdjective,
  "than",
  randomAnimal,
  "`s",
  randomAnimalBodyPart,
].join(" ");//метод join
randomInsult;
("Your Nose is more Smelly than a Rat `s Leg");