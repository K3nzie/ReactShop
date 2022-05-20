const products = [
  {
    _id: '1',
    name: 'The Legend of Zelda: Breath Of The Wild',
    image: '/images/zelda.jpg',
    description:
      'The Legend of Zelda: Breath of the Wild[b] is a 2017 action-adventure game developed and published by Nintendo for the Nintendo Switch and Wii U consoles. The game is an installment of The Legend of Zelda series and is set at the end of its timeline. The player controls an amnesiac Link, who awakens from a hundred-year slumber, and attempts to regain his memories and prevent the destruction of Hyrule by Calamity Ganon. Similar to the original 1986 The Legend of Zelda game, players are given little instruction and can explore the open world freely. Tasks include collecting various items and gear to aid in objectives such as puzzle-solving or side quests. The world is unstructured and designed to encourage exploration and experimentation, and the main story quest can be completed in a nonlinear fashion. ',
    platforms: ['WiiU', 'Nintendo Switch'],
    category: 'Action-Adventure',
    price: 59.99,
    countInStock: 10,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Grand Theft Auto The Trilogy: Definitive Edition',
    image: '/images/gta.jpg',
    description:
      'Grand Theft Auto: The Trilogy – The Definitive Edition is a 2021 compilation of three action-adventure games in the Grand Theft Auto series: Grand Theft Auto III, Grand Theft Auto: Vice City, and Grand Theft Auto: San Andreas. It was developed by Grove Street Games and published by Rockstar',
    platforms: ['Microsoft Windows', 'Nintendo Switch', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S', 'Android', 'iOS'],
    category: 'Action-adventure',
    price: 40.00,
    countInStock: 7,
    rating: 4,
    numReviews: 8,
  },
  {
    _id: '3',
    name: 'Battlefield 2042',
    image: '/images/battlefield.jpg',
    description:
      'Battlefield 2042 is a 2021 first-person shooter game developed by DICE and published by Electronic Arts. It is the twelfth main installment in the Battlefield series and was released on November 19, 2021 for Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S. Unlike previous games in the series, Battlefield 2042 is solely multiplayer and does not have a single-player campaign. It also features support for cross-platform play, a first in the series. Battlefield 2042 received mixed reviews from critics and a negative reception from players for its technical issues, lack of content at launch, and certain changes to gameplay.',
    platforms: ['Microsoft Windows', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'],
    category: 'First-person shooter',
    price: 59.90,
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Marvel\'s Guardians Of The Galaxy',
    image: '/images/guardians.jpg',
    description:
      'Marvel\'s Guardians of the Galaxy is a 2021 action-adventure game developed by Eidos-Montréal and published by Square Enix\'s European subsidiary. Based on the Marvel Comics superhero team Guardians of the Galaxy, the game was released for Microsoft Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S on October 26, 2021. The game received generally positive reviews from critics, with praise for its narrative, presentation, and characters, but criticism directed to its combat and technical issues.',
    platforms: ['Microsoft Windows', 'Nintendo Switch', 'PlayStation 4', 'PlayStation 5', 'Xbox One', 'Xbox Series X/S'],
    category: 'Action-Adventure',
    price: 30.00,
    countInStock: 11,
    rating: 3.5,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Far Cry 6: Ultimate Edition',
    image: '/images/farcry.jpg',
    description:
      'Far Cry 6 is a 2021 action-adventure first-person shooter game developed by Ubisoft Toronto and published by Ubisoft. It is the sixth main installment in the Far Cry series and the successor to 2018\'s Far Cry 5. The game is set on the fictional Caribbean island of Yara, ruled as a dictatorship by "El Presidente" Antón Castillo (portrayed by Giancarlo Esposito) who is raising his son Diego (Anthony Gonzalez) to follow in his rule. Players take on the role of guerilla fighter Dani Rojas (voiced by either Nisa Gunduz or Sean Rey), attempting to topple Castillo and his regime. Gameplay focuses on combat and exploration; players fight enemy soldiers and dangerous wildlife using a wide array of weapons and gadgets. The game features many elements found in role-playing games, such as a leveling up system and side quests. It also features a cooperative multiplayer mode. ',
    platforms: ['Luna', 'Microsoft Windows', 'PlayStation 4', 'PlayStation 5', 'Stadia', 'Xbox One', 'Xbox Series X/S'],
    category: 'First-person shooter',
    price: 119.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: '6',
    name: 'Sea Of Thieves: A Pirate\'s Life',
    image: '/images/sot.jpg',
    description:
      'Sea of Thieves: A Pirate\'s Life is a free story campaign introduced to Sea of Thieves as part of the Season Three update on June 22, 2021. In partnership with Disney, this Pirates of the Caribbean themed campaign includes 5 Tall Tales adventuring through locations from Sea of Thieves and the Pirates of the Caribbean films and theme park attraction. ',
    platforms: ['Microsoft Windows'],
    category: 'Adventure',
    price: 39.99,
    countInStock: 0,
    rating: 4.5,
    numReviews: 12,
  },
]

export default products;
