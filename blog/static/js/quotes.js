$(document).ready(function () {
  
  var quotes = [
  {
    quote: "The man who passes the sentence should swing the sword",
    character: "Eddard Stark"
  },
  
  {
    quote: "The things I do for love",
    character: "Jaime Lannister"
  },
  
  {
    quote: "It's the family name that lives on. It's all that lives on",
    character: "Tywin Lannister"
  },
  
  {
    quote: "When you play the game of thrones, you win or you die",
    character: "Cersei Lannister"
  },
  
  {
    quote: "I learned how to die a long time ago",
    character: "Eddard Stark"
  },
  
  {
    quote: "When dead men and worse come hunting… you think it matters who sits on the iron throne",
    character: "Jeor Mormont"
  },
  
  {
    quote: "Turn us away, and we will burn you first",
    character: "Daenerys Targaryen"
  },
  
  {
    quote: "A girl gives a man his own name",
    character: "Jaqen H'ghar"
  },
  
  {
    quote: "Your joy will turn to ashes in your mouth, and you'll know the debt is paid",
    character: "Tyrion Lannister"
  },
  
  {
    quote: "I prayed to the gods. Take him away, make him die",
    character: "Catelyn Stark"
  },
  
  {
    quote: "A dragon is not a slave",
    character: "Daenerys Targaryen"
  },
  
  {
    quote: "Burn them all. Burn them in their homes. Burn them in their beds",
    character: "Aerys II Targaryen"
  },
  
  {
    quote: "Chaos isn't a pit. Chaos is a ladder",
    character: "Petyr 'Littlefinger' Baelish"
  },
  
  {
    quote: "Then you'll be fucking your own bride, with a wooden c...",
    character: "Tyrion Lannister"
  },
  
  {
    quote: "Hodor...",
    character: "Hodor"
  },
  
  {
    quote: "It is rare to meet a Lannister who shares my enthusiasm for dead Lannisters",
    character: "Oberyn Martell"
  },
  
  {
    quote: "Nothing isn't better or worse than anything. Nothing is just nothing",
    character: "Arya Stark"
  },
  
  {
    quote: "Hate's as good a thing as any to keep a person going. Better than most",
    character: "Sandor 'The Hound' Clegane"
  },
  
  {
    quote: "Money buys a man's silence for a time. A bolt in the heart buys it forever",
    character: "Petyr 'Littlefinger' Baelish"
  },
  
  {
    quote: "Bastards are born of passion, aren't they. We don't despise them in Dorne",
    character: "Oberyn Martell"
  },
  
  {
    quote: "It's not easy being drunk all the time. If it were easy, everyone would do it",
    character: "Tyrion Lannister"
  },
  
  {
    quote: "There is a beast in every man and it stirs when you put a sword in his hand",
    character: "Ser Jorah Mormont"
  },
  
  {
    quote: "All men must die, but we are not men",
    character: "Daenerys Targaryen"
  },
  
  {
    quote: "I'm a monster, as well as a dwarf. You should charge me double",
    character: "Tyrion Lannister"
  },
  
  {
    quote: "The gods have no mercy, that's why they're gods",
    character: "Cersei Lannister"
  },
  
  {
    quote: "Power resides where men believe it resides",
    character: "Lord Varys"
  },

  {
    quote: "We’ll come out behind them and f... them in their arses",
    character: "Tyrion Lannister"
  },
   
  {
    quote: "A lion doesn’t concern himself with the opinions of a sheep",
    character: "Tywin Lannister"
  },
  
  {
    quote: "This is not the day I die",
    character: "Oberyn Martell"
  },
  
  {
    quote: "Most girls are idiots",
    character: "Arya Stark"
  },
  
  {
    quote: "Drinking and lust, no man can match me in these things. I am the god of tits and wine",
    character: "Tyrion Lannister"
  },
  
  {
    quote: "If you think this has a happy ending, you haven’t been paying attention",
    character: "Ramsay Bolton"
  },
    
  {
    quote: "The night is dark and full of terrors",
    character: "Melisandre"
  },
    
    {
    quote: "Winter is Coming",
    character: "motto of House Stark"
  },
]

  var rand = function() {
  var i = Math.floor(Math.random()*quotes.length);
	  newQuote = quotes[i].quote;
    newCharacter = quotes[i].character;
  };
  
  $("#quoteButton").click(function() {
    rand();
		$("#quote").html("`... " + newQuote);
    $("#character").html("~  " + newCharacter + "  ~");
  });
   
});