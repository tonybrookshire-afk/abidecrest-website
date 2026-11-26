"use strict";

const mysteryObjects = [
  {
    "answer": "Umbrella",
    "icon": "☂️",
    "clue": "It keeps you dry when the sky opens up.",
    "hint": "It opens over your head and folds down to carry.",
    "aliases": []
  },
  {
    "answer": "Backpack",
    "icon": "🎒",
    "clue": "You can carry your school supplies in it.",
    "hint": "It has two straps that go over your shoulders.",
    "aliases": [
      "bookbag",
      "schoolbag"
    ]
  },
  {
    "answer": "Flashlight",
    "icon": "🔦",
    "clue": "You grab it when the power goes out.",
    "hint": "It fits in your hand and shines a beam of light.",
    "aliases": [
      "torch"
    ]
  },
  {
    "answer": "Binoculars",
    "icon": "👀",
    "clue": "It helps you see birds that are far away.",
    "hint": "You look through two round lenses, one for each eye.",
    "aliases": [
      "binocular"
    ]
  },
  {
    "answer": "Rubber chicken",
    "icon": "🐔",
    "clue": "It looks like a farm animal, but it’s usually a joke.",
    "hint": "Squeeze this floppy toy and it might squeak.",
    "aliases": [
      "squeaky chicken"
    ]
  },
  {
    "answer": "Toothbrush",
    "icon": "🪥",
    "clue": "You use it before bed and after you wake up.",
    "hint": "It has bristles and usually gets a dab of toothpaste.",
    "aliases": []
  },
  {
    "answer": "Skateboard",
    "icon": "🛹",
    "clue": "You can roll down the sidewalk on it.",
    "hint": "It’s a small board with four wheels. You push it with one foot.",
    "aliases": []
  },
  {
    "answer": "Basketball",
    "icon": "🏀",
    "clue": "Players bounce it while they run down a court.",
    "hint": "You score by tossing it through a hoop.",
    "aliases": []
  },
  {
    "answer": "Baseball glove",
    "icon": "⚾",
    "clue": "It helps you catch a fast throw without hurting your hand.",
    "hint": "A fielder wears it on one hand.",
    "aliases": [
      "baseball mitt",
      "catcher's mitt"
    ]
  },
  {
    "answer": "Telescope",
    "icon": "🔭",
    "clue": "It makes things very far away look closer.",
    "hint": "It can help you see craters on the Moon.",
    "aliases": []
  },
  {
    "answer": "Magnifying glass",
    "icon": "🔍",
    "clue": "It makes tiny things easier to see.",
    "hint": "A detective might use its single round lens to look for clues.",
    "aliases": [
      "magnifier"
    ]
  },
  {
    "answer": "Water bottle",
    "icon": "🧴",
    "clue": "It helps you stay hydrated on a long walk.",
    "hint": "It holds something to drink and usually has a screw-on lid.",
    "aliases": [
      "drink bottle"
    ]
  },
  {
    "answer": "Paintbrush",
    "icon": "🖌️",
    "clue": "It helps you put color on a blank canvas.",
    "hint": "Dip its bristles into paint and sweep it across the page.",
    "aliases": []
  },
  {
    "answer": "Calculator",
    "icon": "🔢",
    "clue": "It can help when the math gets tricky.",
    "hint": "It has number buttons and shows the answer on a screen.",
    "aliases": []
  },
  {
    "answer": "Thermometer",
    "icon": "🌡️",
    "clue": "It tells you how hot or cold something is.",
    "hint": "A nurse can use it to check for a fever.",
    "aliases": []
  },
  {
    "answer": "Hourglass",
    "icon": "⌛",
    "clue": "It measures time without batteries or hands.",
    "hint": "Sand trickles from the top half to the bottom half.",
    "aliases": [
      "sand timer"
    ]
  },
  {
    "answer": "Headphones",
    "icon": "🎧",
    "clue": "They let you listen without bothering people nearby.",
    "hint": "They usually have two padded cups that fit over your ears.",
    "aliases": [
      "headset"
    ]
  },
  {
    "answer": "Microphone",
    "icon": "🎤",
    "clue": "It helps a singer’s voice reach the back of the room.",
    "hint": "You can speak into it to record your voice.",
    "aliases": [
      "mic"
    ]
  },
  {
    "answer": "Tambourine",
    "icon": "🎵",
    "clue": "It makes music when you shake or tap it.",
    "hint": "Its round frame has little metal disks that jingle.",
    "aliases": []
  },
  {
    "answer": "Boomerang",
    "icon": "🪃",
    "clue": "You send it flying with a flick of your arm.",
    "hint": "Some are curved so they can circle back to the thrower.",
    "aliases": []
  },
  {
    "answer": "Harmonica",
    "icon": "🎵",
    "clue": "It’s small enough to carry in your pocket and makes music.",
    "hint": "You play it by blowing and drawing air through little holes.",
    "aliases": [
      "mouth organ"
    ]
  },
  {
    "answer": "Traffic cone",
    "icon": "🚧",
    "clue": "It warns drivers to steer around a spot.",
    "hint": "It’s usually bright orange with a wide base and a point on top.",
    "aliases": [
      "safety cone",
      "road cone"
    ]
  },
  {
    "answer": "Tape measure",
    "icon": "📏",
    "clue": "It helps you find out how long something is.",
    "hint": "Pull out the numbered strip, then let it roll back inside.",
    "aliases": [
      "measuring tape"
    ]
  },
  {
    "answer": "Joystick",
    "icon": "🕹️",
    "clue": "It helps you steer in a game.",
    "hint": "Move its upright handle to tell the game which direction to go.",
    "aliases": []
  },
  {
    "answer": "Snow globe",
    "icon": "🔮",
    "clue": "It has a tiny scene inside you can hold in your hand.",
    "hint": "Shake it and little flakes swirl around.",
    "aliases": [
      "snowglobe"
    ]
  },
  {
    "answer": "Jigsaw puzzle",
    "icon": "🧩",
    "clue": "You start with a pile of pieces and end up with a picture.",
    "hint": "Its pieces fit together when you match their shapes and colors.",
    "aliases": [
      "jigsaw"
    ]
  },
  {
    "answer": "Turkey",
    "icon": "🦃",
    "clue": "This bird gets a lot of attention on Thanksgiving.",
    "hint": "It fans out its tail feathers and says gobble.",
    "aliases": [
      "wild turkey"
    ]
  },
  {
    "answer": "Pumpkin pie",
    "icon": "🥧",
    "clue": "This orange dessert often gets a swirl of whipped cream.",
    "hint": "Its filling comes from the same squash you might carve in October.",
    "aliases": []
  },
  {
    "answer": "Cranberry sauce",
    "icon": "🥣",
    "clue": "This tart red side dish can wobble on your Thanksgiving plate.",
    "hint": "It is made from little red berries and sometimes slides out of a can in one piece.",
    "aliases": []
  },
  {
    "answer": "Cornucopia",
    "icon": "🧺",
    "clue": "This decoration looks like the harvest is spilling onto the table.",
    "hint": "It is a horn-shaped basket filled with fruits and vegetables.",
    "aliases": [
      "horn of plenty"
    ]
  },
  {
    "answer": "Mashed potatoes",
    "icon": "🥔",
    "clue": "You can make a little lake of gravy in this fluffy side dish.",
    "hint": "Start with boiled spuds, then squash them with butter.",
    "aliases": []
  },
  {
    "answer": "Wishbone",
    "icon": "🦴",
    "clue": "Two people each take one end and make a wish.",
    "hint": "This forked turkey bone looks like the letter Y.",
    "aliases": [
      "turkey wishbone"
    ]
  },
  {
    "answer": "Parade balloon",
    "icon": "🎈",
    "clue": "Crowds look up to see this giant character float down the street.",
    "hint": "People walking below hold ropes to guide it past the parade stands.",
    "aliases": [
      "giant parade balloon"
    ]
  },
  {
    "answer": "Sweet potatoes",
    "icon": "🍠",
    "clue": "Some families put marshmallows on top of these at Thanksgiving.",
    "hint": "These root vegetables often have orange flesh and taste sweet when roasted.",
    "aliases": [
      "sweet potato"
    ]
  },
  {
    "answer": "American flag",
    "icon": "🇺🇸",
    "clue": "You might see this waving above a school or carried at the front of a parade.",
    "hint": "Look for fifty white stars and thirteen red and white stripes.",
    "aliases": [
      "US flag",
      "United States flag",
      "Stars and Stripes",
      "Old Glory"
    ]
  },
  {
    "answer": "Bald eagle",
    "icon": "🦅",
    "clue": "This American bird of prey can swoop down to catch a fish.",
    "hint": "Its name says bald, but an adult has white feathers covering its head.",
    "aliases": [
      "American bald eagle"
    ]
  },
  {
    "answer": "Liberty Bell",
    "icon": "🔔",
    "clue": "People visit Philadelphia to see this famous symbol of freedom.",
    "hint": "Look for a large bronze bell with a long crack in its side.",
    "aliases": []
  },
  {
    "answer": "Statue of Liberty",
    "icon": "🗽",
    "clue": "This giant figure welcomes ships to New York Harbor.",
    "hint": "She wears a crown and holds a torch high above her head.",
    "aliases": [
      "Lady Liberty"
    ]
  },
  {
    "answer": "Fourth of July",
    "icon": "🎆",
    "clue": "On this summer holiday, families gather for cookouts and watch the sky after dark.",
    "hint": "It celebrates American independence on the fourth day of the seventh month.",
    "aliases": [
      "Independence Day",
      "July Fourth",
      "Fourth of July holiday"
    ]
  },
  {
    "answer": "Uncle Sam",
    "icon": "🎩",
    "clue": "This imaginary American character dresses in red, white, and blue.",
    "hint": "In a famous poster, he wears a tall hat and points straight at you.",
    "aliases": []
  },
  {
    "answer": "White House",
    "icon": "🏛️",
    "clue": "This famous home in Washington, DC has an office called the Oval Office.",
    "hint": "The president lives in it, and its name tells you its color.",
    "aliases": [
      "the White House"
    ]
  },
  {
    "answer": "National anthem",
    "icon": "🎵",
    "clue": "Fans often stand to hear this song before a ballgame.",
    "hint": "In the United States, it begins with the words O say can you see.",
    "aliases": [
      "Star Spangled Banner",
      "The Star Spangled Banner"
    ]
  }
];
