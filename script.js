let correctScore = 0;
let wrongScore = 0;

const questions = [
    {
        "question": "What is the capital of Germany?",
        "options": ["Berlin", "Paris", "Madrid", "Rome"],
        "answer": 0
    },
    {
        "question": "Which gas is used in balloons to make them float?",
        "options": ["Oxygen", "Helium", "Nitrogen", "Carbon Dioxide"],
        "answer": 1
    },
    {
        "question": "Who invented the light bulb?",
        "options": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Isaac Newton"],
        "answer": 1
    },
    {
        "question": "Which country is famous for the Eiffel Tower?",
        "options": ["Italy", "France", "Spain", "Germany"],
        "answer": 1
    },
    {
        "question": "What is the process by which plants make their food?",
        "options": ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
        "answer": 1
    },
    {
        "question": "Which metal is most commonly used in electrical wiring?",
        "options": ["Iron", "Gold", "Copper", "Aluminum"],
        "answer": 2
    },
    {
        "question": "What is the name of the fairy tale character who leaves a glass slipper at the ball?",
        "options": ["Snow White", "Rapunzel", "Cinderella", "Sleeping Beauty"],
        "answer": 2
    },
    {
        "question": "Which continent is known as the coldest?",
        "options": ["North America", "Europe", "Antarctica", "Asia"],
        "answer": 2
    },
    {
        "question": "What is the chemical formula for water?",
        "options": ["CO2", "H2O", "O2", "NaCl"],
        "answer": 1
    },
    {
        "question": "Who was the first President of the United States?",
        "options": ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        "answer": 2
    },
    {
        "question": "Which country is famous for pizza?",
        "options": ["Mexico", "Italy", "France", "Greece"],
        "answer": 1
    },
    {
        "question": "What is the largest planet in the solar system?",
        "options": ["Earth", "Mars", "Jupiter", "Saturn"],
        "answer": 2
    },
    {
        "question": "Which animal is known for changing its color?",
        "options": ["Chameleon", "Frog", "Parrot", "Octopus"],
        "answer": 0
    },
    {
        "question": "What is the symbol for iron in the periodic table?",
        "options": ["Ir", "Fe", "In", "I"],
        "answer": 1
    },
    {
        "question": "Which sport is played at Wimbledon?",
        "options": ["Football", "Cricket", "Tennis", "Basketball"],
        "answer": 2
    },
    {
        "question": "Who is the Greek god of the sea?",
        "options": ["Zeus", "Poseidon", "Apollo", "Hades"],
        "answer": 1
    },
    {
        "question": "What is the currency of the United Kingdom?",
        "options": ["Euro", "Dollar", "Pound Sterling", "Yen"],
        "answer": 2
    },
    {
        "question": "Which famous scientist developed the theory of evolution?",
        "options": ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Marie Curie"],
        "answer": 1
    },
    {
        "question": "What is the main ingredient in sushi?",
        "options": ["Chicken", "Rice", "Beef", "Pasta"],
        "answer": 1
    },
    {
        "question": "What is the smallest country in the world?",
        "options": ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
        "answer": 0
    },
    {
        "question": "Which planet has the most moons?",
        "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
        "answer": 1
    },
    {
        "question": "Who is the author of 'Harry Potter' series?",
        "options": ["J.K. Rowling", "George R.R. Martin", "Stephen King", "Agatha Christie"],
        "answer": 0
    },
    {
        "question": "What is the capital of Canada?",
        "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        "answer": 2
    },
    {
        "question": "Which element is represented by 'O' in the periodic table?",
        "options": ["Oxygen", "Gold", "Silver", "Helium"],
        "answer": 0
    },
    {
        "question": "What is the main ingredient in guacamole?",
        "options": ["Tomato", "Avocado", "Lettuce", "Potato"],
        "answer": 1
    },
    {
        "question": "Which planet is closest to the Sun?",
        "options": ["Venus", "Mercury", "Earth", "Mars"],
        "answer": 1
    },
    {
        "question": "Who was the first person to step on the Moon?",
        "options": ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
        "answer": 2
    },
    {
        "question": "What is the currency of Japan?",
        "options": ["Yuan", "Won", "Yen", "Ringgit"],
        "answer": 2
    },
    {
        "question": "Which continent has the most countries?",
        "options": ["Asia", "Africa", "Europe", "North America"],
        "answer": 1
    },
    {
        "question": "Which language has the most speakers in the world?",
        "options": ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        "answer": 2
    },
    {
        "question": "What is the fastest land animal?",
        "options": ["Cheetah", "Lion", "Horse", "Gazelle"],
        "answer": 0
    },
    {
        "question": "Who developed the polio vaccine?",
        "options": ["Alexander Fleming", "Jonas Salk", "Louis Pasteur", "Edward Jenner"],
        "answer": 1
    },
    {
        "question": "What is the capital of Brazil?",
        "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        "answer": 2
    },
    {
        "question": "Which ocean is the deepest?",
        "options": ["Atlantic", "Indian", "Pacific", "Arctic"],
        "answer": 2
    },
    {
        "question": "Which famous scientist developed the laws of motion?",
        "options": ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"],
        "answer": 1
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Diamond", "Iron", "Quartz", "Graphite"],
        "answer": 0
    },
    {
        "question": "What is the national flower of India?",
        "options": ["Lotus", "Rose", "Marigold", "Tulip"],
        "answer": 0
    },
    {
        "question": "What is the longest wall in the world?",
        "options": ["Berlin Wall", "Great Wall of China", "Hadrian's Wall", "Western Wall"],
        "answer": 1
    },
    {
        "question": "Which gas makes up most of Earth's atmosphere?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        "answer": 2
    },
    {
        "question": "Which continent is also a country?",
        "options": ["Asia", "Europe", "Australia", "South America"],
        "answer": 2
    },
    {
        "question": "Who invented the telephone?",
        "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Samuel Morse"],
        "answer": 1
    },
    {
        "question": "Which desert is the largest in the world?",
        "options": ["Sahara Desert", "Gobi Desert", "Antarctica", "Kalahari Desert"],
        "answer": 2
    },
    {
        "question": "Which bird is known for being flightless?",
        "options": ["Penguin", "Eagle", "Sparrow", "Peacock"],
        "answer": 0
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": 3
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        "answer": 2
    },
    {
        "question": "What is the chemical symbol for Gold?",
        "options": ["Au", "Ag", "Pb", "Fe"],
        "answer": 0
    },
    {
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": ["China", "Japan", "South Korea", "Thailand"],
        "answer": 1
    },
    {
        "question": "What is the tallest mountain in the world?",
        "options": ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "K2"],
        "answer": 1
    },
    {
        "question": "Which element is essential for breathing?",
        "options": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
        "answer": 1
    },
    {
        "question": "Who discovered gravity?",
        "options": ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
        "answer": 2
    },
    {
        "question": "Which continent is the Sahara Desert located in?",
        "options": ["South America", "Africa", "Asia", "Australia"],
        "answer": 1
    },
    {
        "question": "What is the smallest unit of matter?",
        "options": ["Proton", "Electron", "Atom", "Molecule"],
        "answer": 2
    },
    {
        "question": "Which country won the FIFA World Cup in 2018?",
        "options": ["Germany", "Brazil", "France", "Argentina"],
        "answer": 2
    },
    {
        "question": "Which gas do plants absorb from the atmosphere?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "answer": 1
    },
    {
        "question": "Who is known as the Father of Computer Science?",
        "options": ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"],
        "answer": 0
    },
    {
        "question": "What is the longest river in the world?",
        "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        "answer": 1
    },
    {
        "question": "What is the capital of Australia?",
        "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
        "answer": 2
    },
    {
        "question": "How many continents are there on Earth?",
        "options": ["5", "6", "7", "8"],
        "answer": 2
    },
    {
        "question": "Which animal is known as the King of the Jungle?",
        "options": ["Elephant", "Tiger", "Lion", "Gorilla"],
        "answer": 2
    },
    {
        "question": "What is the speed of light?",
        "options": ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"],
        "answer": 0
    },
    {
        "question": "Which country is famous for the Great Wall?",
        "options": ["India", "China", "Japan", "South Korea"],
        "answer": 1
    },
    {
        "question": "Who developed the theory of relativity?",
        "options": ["Isaac Newton", "Stephen Hawking", "Albert Einstein", "Galileo Galilei"],
        "answer": 2
    },
    {
        "question": "What is the largest organ in the human body?",
        "options": ["Heart", "Brain", "Skin", "Liver"],
        "answer": 2
    },
    {
        "question": "Which planet is known as the 'Red Planet'?",
        "options": ["Earth", "Mars", "Jupiter", "Venus"],
        "answer": 1
    },
    {
        "question": "What is the chemical symbol for gold?",
        "options": ["Au", "Ag", "Fe", "Cu"],
        "answer": 0
    },
    {
        "question": "How many continents are there in the world?",
        "options": ["5", "6", "7", "8"],
        "answer": 2
    },
    {
        "question": "Which country is home to the kangaroo?",
        "options": ["New Zealand", "South Africa", "Australia", "Canada"],
        "answer": 2
    },
    {
        "question": "What is the name of the longest river in the world?",
        "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        "answer": 1
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        "answer": 2
    },
    {
        "question": "What is the capital city of Japan?",
        "options": ["Seoul", "Beijing", "Tokyo", "Bangkok"],
        "answer": 2
    },
    {
        "question": "Which gas do plants absorb from the atmosphere?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        "answer": 1
    },
    {
        "question": "What is the smallest planet in our solar system?",
        "options": ["Mars", "Mercury", "Venus", "Pluto"],
        "answer": 1
    },
    {
        "question": "What is the currency of the United States?",
        "options": ["Euro", "Pound", "Dollar", "Yen"],
        "answer": 2
    },
    {
        "question": "Which famous scientist developed the theory of relativity?",
        "options": ["Isaac Newton", "Stephen Hawking", "Albert Einstein", "Galileo Galilei"],
        "answer": 2
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": 3
    },
    {
        "question": "What is the chemical formula for water?",
        "options": ["CO2", "H2O", "O2", "NaCl"],
        "answer": 1
    },
    {
        "question": "Which animal is known for its long neck?",
        "options": ["Elephant", "Giraffe", "Zebra", "Lion"],
        "answer": 1
    },
    {
        "question": "What is the main ingredient in bread?",
        "options": ["Rice", "Potatoes", "Flour", "Corn"],
        "answer": 2
    },
    {
        "question": "Which country is famous for the pyramids?",
        "options": ["Greece", "Italy", "Egypt", "Mexico"],
        "answer": 2
    },
    {
        "question": "What is the capital of France?",
        "options": ["London", "Berlin", "Paris", "Rome"],
        "answer": 2
    },
    {
        "question": "What is the name of the galaxy our solar system is in?",
        "options": ["Andromeda", "Triangulum", "Sombrero", "Milky Way"],
        "answer": 3
    },
    {
        "question": "Who wrote 'Romeo and Juliet'?",
        "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        "answer": 1
    },
    {
        "question": "Which sport uses a shuttlecock?",
        "options": ["Tennis", "Badminton", "Volleyball", "Squash"],
        "answer": 1
    },
    {
        "question": "What is the primary gas in Earth's atmosphere?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        "answer": 2
    },
    {
        "question": "How many bones are in the adult human body?",
        "options": ["206", "210", "198", "212"],
        "answer": 0
    },
    {
        "question": "Which continent is the largest by land area?",
        "options": ["Africa", "North America", "Asia", "Europe"],
        "answer": 2
    },
    {
        "question": "What is the name of the fear of heights?",
        "options": ["Claustrophobia", "Arachnophobia", "Acrophobia", "Hydrophobia"],
        "answer": 2
    },
    {
        "question": "What is the fastest land animal?",
        "options": ["Lion", "Cheetah", "Gazelle", "Horse"],
        "answer": 1
    },
    {
        "question": "Which natural phenomenon is measured by the Richter scale?",
        "options": ["Tornadoes", "Floods", "Earthquakes", "Volcanic eruptions"],
        "answer": 2
    },
    {
        "question": "What is the traditional color of a bride's wedding dress in many Western cultures?",
        "options": ["Blue", "Red", "Black", "White"],
        "answer": 3
    },
    {
        "question": "Which famous landmark is located in Rome, Italy?",
        "options": ["Eiffel Tower", "Colosseum", "Statue of Liberty", "Big Ben"],
        "answer": 1
    },
    {
        "question": "What is the main component of the sun?",
        "options": ["Oxygen and Nitrogen", "Iron and Nickel", "Hydrogen and Helium", "Carbon and Oxygen"],
        "answer": 2
    },
    {
        "question": "Which gas do humans breathe out?",
        "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        "answer": 2
    },
    {
        "question": "Who was the first man to walk on the moon?",
        "options": ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
        "answer": 2
    },
    {
        "question": "What is the capital of Australia?",
        "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
        "answer": 2
    },
    {
        "question": "Which of these is NOT a primary color?",
        "options": ["Red", "Yellow", "Green", "Blue"],
        "answer": 2
    },
    {
        "question": "In which sport would you perform a 'slam dunk'?",
        "options": ["Tennis", "Basketball", "Volleyball", "Football"],
        "answer": 1
    },
    {
        "question": "What is the largest animal on Earth?",
        "options": ["African Elephant", "Great White Shark", "Blue Whale", "Giraffe"],
        "answer": 2
    },
    {
        "question": "Which year did the Titanic sink?",
        "options": ["1905", "1912", "1923", "1931"],
        "answer": 1
    },
    {
        "question": "Which country is the Amazon Rainforest primarily located in?",
        "options": ["Colombia", "Peru", "Brazil", "Ecuador"],
        "answer": 2
    },
    {
        "question": "Who wrote the play 'Hamlet'?",
        "options": ["Charles Dickens", "William Shakespeare", "Jane Austen", "F. Scott Fitzgerald"],
        "answer": 1
    },
    {
        "question": "What is the value of Pi (π) to two decimal places?",
        "options": ["3.12", "3.14", "3.16", "3.18"],
        "answer": 1
    },
    {
        "question": "What is the chemical symbol for table salt?",
        "options": ["H2O", "CO2", "NaCl", "O2"],
        "answer": 2
    },
    {
        "question": "Which mountain is the tallest in the world?",
        "options": ["K2", "Mount Kilimanjaro", "Mount Everest", "Denali"],
        "answer": 2
    },
    {
        "question": "Who is known as the 'King of Pop'?",
        "options": ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
        "answer": 1
    },
    {
        "question": "How many players are on a standard soccer (football) team?",
        "options": ["9", "10", "11", "12"],
        "answer": 2
    },
    {
        "question": "Which city hosted the 2016 Summer Olympics?",
        "options": ["London", "Beijing", "Rio de Janeiro", "Tokyo"],
        "answer": 2
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Gold", "Iron", "Diamond", "Platinum"],
        "answer": 2
    },
    {
        "question": "Which famous physicist developed the laws of motion and universal gravitation?",
        "options": ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        "answer": 1
    },
    {
        "question": "What is the capital of Canada?",
        "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        "answer": 2
    },
    {
        "question": "What is the longest bone in the human body?",
        "options": ["Tibia", "Radius", "Femur", "Humerus"],
        "answer": 2
    },
    {
        "question": "Which popular video game involves building and breaking blocks in a 3D world?",
        "options": ["Fortnite", "Minecraft", "Call of Duty", "Among Us"],
        "answer": 1
    },
    {
        "question": "Which continent is also a country?",
        "options": ["Asia", "Europe", "Australia", "South America"],
        "answer": 2
    },
    {
        "question": "What is the process by which plants convert light energy into chemical energy?",
        "options": ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
        "answer": 2
    },
    {
        "question": "Who directed the movie 'Jaws'?",
        "options": ["Alfred Hitchcock", "Stanley Kubrick", "Steven Spielberg", "Quentin Tarantino"],
        "answer": 2
    },
    {
        "question": "What is the highest-scoring play in American football?",
        "options": ["Field Goal", "Safety", "Touchdown", "Extra Point"],
        "answer": 2
    },
    {
        "question": "What is the primary language spoken in Brazil?",
        "options": ["Spanish", "English", "Portuguese", "French"],
        "answer": 2
    },
    {
        "question": "Which organ pumps blood throughout the human body?",
        "options": ["Lungs", "Kidneys", "Heart", "Liver"],
        "answer": 2
    },
    {
        "question": "Who invented the telephone?",
        "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Samuel Morse"],
        "answer": 1
    },
    {
        "question": "Which famous wall is located in China?",
        "options": ["Berlin Wall", "Hadrian's Wall", "Great Wall of China", "Wailing Wall"],
        "answer": 2
    },
    {
        "question": "What is the name of Harry Potter's owl?",
        "options": ["Crookshanks", "Hedwig", "Scabbers", "Fawkes"],
        "answer": 1
    },
    {
        "question": "In which sport would you use a 'putter'?",
        "options": ["Tennis", "Baseball", "Golf", "Hockey"],
        "answer": 2
    },
    {
        "question": "What is the capital of Germany?",
        "options": ["Berlin", "Paris", "Madrid", "Rome"],
        "answer": 0
    },
    {
        "question": "Which gas is used in balloons to make them float?",
        "options": ["Oxygen", "Helium", "Nitrogen", "Carbon Dioxide"],
        "answer": 1
    },
    {
        "question": "Who invented the light bulb?",
        "options": ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Isaac Newton"],
        "answer": 1
    },
    {
        "question": "Which country is famous for the Eiffel Tower?",
        "options": ["Italy", "France", "Spain", "Germany"],
        "answer": 1
    },
    {
        "question": "What is the process by which plants make their food?",
        "options": ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
        "answer": 1
    },
    {
        "question": "Which metal is most commonly used in electrical wiring?",
        "options": ["Iron", "Gold", "Copper", "Aluminum"],
        "answer": 2
    },
    {
        "question": "What is the name of the fairy tale character who leaves a glass slipper at the ball?",
        "options": ["Snow White", "Rapunzel", "Cinderella", "Sleeping Beauty"],
        "answer": 2
    },
    {
        "question": "Which continent is known as the coldest?",
        "options": ["North America", "Europe", "Antarctica", "Asia"],
        "answer": 2
    },
    {
        "question": "What is the chemical formula for water?",
        "options": ["CO2", "H2O", "O2", "NaCl"],
        "answer": 1
    },
    {
        "question": "Who was the first President of the United States?",
        "options": ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
        "answer": 2
    },
    {
        "question": "Which country is famous for pizza?",
        "options": ["Mexico", "Italy", "France", "Greece"],
        "answer": 1
    },
    {
        "question": "What is the largest planet in the solar system?",
        "options": ["Earth", "Mars", "Jupiter", "Saturn"],
        "answer": 2
    },
    {
        "question": "Which animal is known for changing its color?",
        "options": ["Chameleon", "Frog", "Parrot", "Octopus"],
        "answer": 0
    },
    {
        "question": "What is the symbol for iron in the periodic table?",
        "options": ["Ir", "Fe", "In", "I"],
        "answer": 1
    },
    {
        "question": "Which sport is played at Wimbledon?",
        "options": ["Football", "Cricket", "Tennis", "Basketball"],
        "answer": 2
    },
    {
        "question": "Who is the Greek god of the sea?",
        "options": ["Zeus", "Poseidon", "Apollo", "Hades"],
        "answer": 1
    },
    {
        "question": "What is the currency of the United Kingdom?",
        "options": ["Euro", "Dollar", "Pound Sterling", "Yen"],
        "answer": 2
    },
    {
        "question": "Which famous scientist developed the theory of evolution?",
        "options": ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Marie Curie"],
        "answer": 1
    },
    {
        "question": "What is the main ingredient in sushi?",
        "options": ["Chicken", "Rice", "Beef", "Pasta"],
        "answer": 1
    },
    {
        "question": "What is the smallest country in the world?",
        "options": ["Vatican City", "Monaco", "San Marino", "Liechtenstein"],
        "answer": 0
    },
    {
        "question": "Which planet has the most moons?",
        "options": ["Jupiter", "Saturn", "Uranus", "Neptune"],
        "answer": 1
    },
    {
        "question": "Who is the author of 'Harry Potter' series?",
        "options": ["J.K. Rowling", "George R.R. Martin", "Stephen King", "Agatha Christie"],
        "answer": 0
    },
    {
        "question": "What is the capital of Canada?",
        "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
        "answer": 2
    },
    {
        "question": "Which element is represented by 'O' in the periodic table?",
        "options": ["Oxygen", "Gold", "Silver", "Helium"],
        "answer": 0
    },
    {
        "question": "What is the main ingredient in guacamole?",
        "options": ["Tomato", "Avocado", "Lettuce", "Potato"],
        "answer": 1
    },
    {
        "question": "Which planet is closest to the Sun?",
        "options": ["Venus", "Mercury", "Earth", "Mars"],
        "answer": 1
    },
    {
        "question": "Who was the first person to step on the Moon?",
        "options": ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
        "answer": 2
    },
    {
        "question": "What is the currency of Japan?",
        "options": ["Yuan", "Won", "Yen", "Ringgit"],
        "answer": 2
    },
    {
        "question": "Which continent has the most countries?",
        "options": ["Asia", "Africa", "Europe", "North America"],
        "answer": 1
    },
    {
        "question": "Which language has the most speakers in the world?",
        "options": ["English", "Spanish", "Mandarin Chinese", "Hindi"],
        "answer": 2
    },
    {
        "question": "What is the fastest land animal?",
        "options": ["Cheetah", "Lion", "Horse", "Gazelle"],
        "answer": 0
    },
    {
        "question": "Who developed the polio vaccine?",
        "options": ["Alexander Fleming", "Jonas Salk", "Louis Pasteur", "Edward Jenner"],
        "answer": 1
    },
    {
        "question": "What is the capital of Brazil?",
        "options": ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        "answer": 2
    },
    {
        "question": "Which ocean is the deepest?",
        "options": ["Atlantic", "Indian", "Pacific", "Arctic"],
        "answer": 2
    },
    {
        "question": "Which famous scientist developed the laws of motion?",
        "options": ["Albert Einstein", "Isaac Newton", "Nikola Tesla", "Galileo Galilei"],
        "answer": 1
    },
    {
        "question": "What is the hardest natural substance on Earth?",
        "options": ["Diamond", "Iron", "Quartz", "Graphite"],
        "answer": 0
    },
    {
        "question": "What is the national flower of India?",
        "options": ["Lotus", "Rose", "Marigold", "Tulip"],
        "answer": 0
    },
    {
        "question": "What is the longest wall in the world?",
        "options": ["Berlin Wall", "Great Wall of China", "Hadrian's Wall", "Western Wall"],
        "answer": 1
    },
    {
        "question": "Which gas makes up most of Earth's atmosphere?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
        "answer": 2
    },
    {
        "question": "Which continent is also a country?",
        "options": ["Asia", "Europe", "Australia", "South America"],
        "answer": 2
    },
    {
        "question": "Who invented the telephone?",
        "options": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Samuel Morse"],
        "answer": 1
    },
    {
        "question": "Which desert is the largest in the world?",
        "options": ["Sahara Desert", "Gobi Desert", "Antarctica", "Kalahari Desert"],
        "answer": 2
    },
    {
        "question": "Which bird is known for being flightless?",
        "options": ["Penguin", "Eagle", "Sparrow", "Peacock"],
        "answer": 0
    },
    {
        "question": "What is the largest ocean on Earth?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "answer": 3
    },
    {
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        "answer": 2
    },
    {
        "question": "What is the chemical symbol for Gold?",
        "options": ["Au", "Ag", "Pb", "Fe"],
        "answer": 0
    },
    {
        "question": "Which country is known as the Land of the Rising Sun?",
        "options": ["China", "Japan", "South Korea", "Thailand"],
        "answer": 1
    },
    {
        "question": "What is the tallest mountain in the world?",
        "options": ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "K2"],
        "answer": 1
    },
    {
        "question": "Which element is essential for breathing?",
        "options": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
        "answer": 1
    },
    {
        "question": "Who discovered gravity?",
        "options": ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"],
        "answer": 2
    },
    {
        "question": "What is the capital of New Zealand?",
        "options": ["Auckland", "Christchurch", "Wellington", "Queenstown"],
        "answer": 2
    },
    {
        "question": "Which gas is most abundant in Earth's atmosphere?",
        "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        "answer": 2
    },
    {
        "question": "Who painted the 'Starry Night'?",
        "options": ["Claude Monet", "Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci"],
        "answer": 2
    },
    {
        "question": "What is the largest desert in the world?",
        "options": ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Antarctica (Polar Desert)"],
        "answer": 3
    },
    {
        "question": "Which animal lays the largest eggs?",
        "options": ["Chicken", "Ostrich", "Eagle", "Penguin"],
        "answer": 1
    },
    {
        "question": "What is the currency of China?",
        "options": ["Yen", "Rupee", "Yuan", "Won"],
        "answer": 2
    },
    {
        "question": "Which ocean is the smallest?",
        "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Southern Ocean"],
        "answer": 2
    },
    {
        "question": "Who is the Roman god of war?",
        "options": ["Jupiter", "Neptune", "Mars", "Pluto"],
        "answer": 2
    },
    {
        "question": "What is the main component of glass?",
        "options": ["Clay", "Sand", "Metal", "Plastic"],
        "answer": 1
    },
    {
        "question": "Which famous landmark is located in Paris, France?",
        "options": ["Big Ben", "Colosseum", "Eiffel Tower", "Statue of Liberty"],
        "answer": 2
    },
    {
        "question": "What is the primary language spoken in Spain?",
        "options": ["Portuguese", "French", "Spanish", "Italian"],
        "answer": 2
    },
    {
        "question": "How many states are there in the United States?",
        "options": ["48", "49", "50", "52"],
        "answer": 2
    },
    {
        "question": "What is the name of the longest mountain range on land?",
        "options": ["Rocky Mountains", "Andes", "Himalayas", "Great Dividing Range"],
        "answer": 1
    },
    {
        "question": "Which planet is known for its rings?",
        "options": ["Jupiter", "Mars", "Saturn", "Uranus"],
        "answer": 2
    },
    {
        "question": "Who wrote 'The Odyssey'?",
        "options": ["Virgil", "Homer", "Sophocles", "Plato"],
        "answer": 1
    },
    {
        "question": "Which instrument is used to measure atmospheric pressure?",
        "options": ["Thermometer", "Anemometer", "Barometer", "Hydrometer"],
        "answer": 2
    },
    {
        "question": "What is the fear of clowns called?",
        "options": ["Arachnophobia", "Claustrophobia", "Coulrophobia", "Ophidiophobia"],
        "answer": 2
    },
    {
        "question": "Which famous band sang 'Bohemian Rhapsody'?",
        "options": ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
        "answer": 2
    },
    {
        "question": "In which city would you find the Brandenburg Gate?",
        "options": ["London", "Rome", "Berlin", "Vienna"],
        "answer": 2
    },
    {
        "question": "What is the largest living reptile?",
        "options": ["Komodo Dragon", "Saltwater Crocodile", "Anaconda", "Alligator"],
        "answer": 1
    }
];

function getRandomQuestionIndex() {
    return Math.floor(Math.random() * questions.length);
}

setTimeout(() => {
    document.getElementById("splash").style.display = "none";
    document.getElementById("quiz").style.display = "flex";
    loadQuestion();
}, 1000);

let currentQuestionIndex;

function loadQuestion() {
    currentQuestionIndex = getRandomQuestionIndex();
    const q = questions[currentQuestionIndex];
    document.getElementById("question").textContent = q.question;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("div");
        btn.classList.add("option");
        btn.textContent = opt;
        btn.onclick = () => checkAnswer(btn, i);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(btn, index) {
    const correctIndex = questions[currentQuestionIndex].answer;
    const options = document.querySelectorAll(".option");

    if (index === correctIndex) {
        correctScore++;
        document.getElementById("correctScore").textContent = correctScore;
        btn.classList.add("correct");
    } else {
        wrongScore++;
        document.getElementById("wrongScore").textContent = wrongScore;
        btn.classList.add("wrong");
        options[correctIndex].classList.add("correct");
    }

    // Disable all options to prevent multiple clicks
    options.forEach(option => option.style.pointerEvents = "none");

    // Move to next question after 1 seconds (adjustable)
    setTimeout(() => {
        loadQuestion();
    }, 1000);
}