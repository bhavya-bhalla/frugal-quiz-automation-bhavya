// questions.js 

const questionsData = {
  gk: {
    easy: [
      { q: "Capital of India?", opts: ["Delhi", "Mumbai", "Kolkata", "Chennai"], ans: 0 },
      { q: "National animal?", opts: ["Tiger", "Lion", "Elephant", "Cow"], ans: 0 },
      { q: "National bird?", opts: ["Peacock", "Parrot", "Eagle", "Crow"], ans: 0 },
      { q: "National flower?", opts: ["Lotus", "Rose", "Lily", "Tulip"], ans: 0 },
      { q: "National tree?", opts: ["Banyan", "Neem", "Mango", "Oak"], ans: 0 }
    ],
    medium: [
      { q: "Who wrote constitution?", opts: ["Ambedkar", "Gandhi", "Nehru", "Bose"], ans: 0 },
      { q: "Largest state?", opts: ["Rajasthan", "Gujarat", "MP", "UP"], ans: 0 },
      { q: "Currency of India?", opts: ["Rupee","Dollar","Yen","Pound"], ans: 0 },
      { q: "National aquatic animal?", opts: ["River Dolphin","Whale","Turtle","Shark"], ans: 0 },
      { q: "First President?", opts: ["Rajendra Prasad","Gandhi","Nehru","Patel"], ans: 0 }
    ],
    hard: [
      { q: "When RBI established?", opts: ["1935","1947","1950","1920"], ans: 0 },
      { q: "Deepest river?", opts: ["Brahmaputra","Ganga","Yamuna","Narmada"], ans: 0 },
      { q: "First Nobel Indian?", opts: ["Tagore","Raman","Sen","Teresa"], ans: 0 },
      { q: "Tallest statue?", opts: ["Statue of Unity","Ashoka Pillar","Qutub Minar","India Gate"], ans: 0 },
      { q: "Largest delta?", opts: ["Sunderbans","Amazon","Ganga","Indus"], ans: 0 }
    ]
  },

  aptitude: {
    easy: [
      { q: "5 + 7?", opts: ["11","12","13","10"], ans: 1 },
      { q: "12 / 3?", opts: ["2","3","4","6"], ans: 2 },
      { q: "5 × 6?", opts: ["20","25","30","15"], ans: 2 },
      { q: "√49?", opts: ["9","5","7","8"], ans: 2 },
      { q: "Largest?", opts: ["23","89","56","78"], ans: 1 }
    ],
    medium: [
      { q: "HCF of 18 & 27?", opts: ["6","3","9","12"], ans: 2 },
      { q: "(25 × 4) / 5?", opts: ["20","15","25","30"], ans: 0 },
      { q: "Cube root of 27?", opts: ["2","3","4","5"], ans: 1 },
      { q: "Factorial of 5?", opts: ["100","80","120","60"], ans: 2 },
      { q: "144 ÷ 12?", opts: ["10","12","14","16"], ans: 1 }
    ],
    hard: [
      { q: "45/90 in %?", opts: ["50%","75%","25%","100%"], ans: 0 },
      { q: "Solve: (3×3)×4", opts: ["9","12","36","15"], ans: 2 },
      { q: "121 square root", opts: ["11","12","14","10"], ans: 0 },
      { q: "Average of 10 & 30", opts: ["10","15","20","25"], ans: 2 },
      { q: "Solve: 5×8/2", opts: ["10","5","20","15"], ans: 0 }
    ]
  },

  programming: {
    easy: [
      { q: "JS stands for?", opts: ["JavaSystem","JavaScript","JustScript","None"], ans: 1 },
      { q: "HTML stands for?", opts: ["HyperText Markup Language","HighText Machine Language","None","Hyper Make Language"], ans: 0 },
      { q: "CSS means?", opts: ["Cascading Style Sheets","Computer Style Sheets","Creative System","None"], ans: 0 },
      { q: "console.log belongs to?", opts: ["Python","HTML","JS","CSS"], ans: 2 },
      { q: "Which is dynamic?", opts: ["HTML","CSS","JavaScript","PNG"], ans: 2 }
    ],
    medium: [
      { q: "JS array syntax?", opts: ["[]","{}","()","<>"], ans: 0 },
      { q: "DOM stands for?", opts: ["Document Object Model","Data Object Mapping","None","Direct Object Module"], ans: 0 },
      { q: "LocalStorage stores?", opts: ["Temp Data","Permanent Browser Data","RAM Only","None"], ans: 1 },
      { q: "JS datatype:", opts: ["int","float","string","void"], ans: 2 },
      { q: "typeof []?", opts: ["object","array","list","null"], ans: 0 }
    ],
    hard: [
      { q: "React is?", opts: ["Framework","Library","Language","None"], ans: 1 },
      { q: "Node.js runs on?", opts: ["Client","Browser","Server","Compiler"], ans: 2 },
      { q: "MongoDB stores?", opts: ["Tables","Collections","Rows","Columns"], ans: 1 },
      { q: "Express.js used for?", opts: ["Routing","UI","Compiling","None"], ans: 0 },
      { q: "JSX belongs to?", opts: ["React","Angular","Vue","Node"], ans: 0 }
    ]
  }
};
