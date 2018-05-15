const historyAPI = [{
  id: 123456789,
  date: '12.7.17',
  time: '8:02',
  gameConversion: 'League of Legends',
  achievements: '4 kills',
  buffCoins: 6,
  conversion: ''
},
  {
    id: 123456788,
    date: '1.7.17',
    time: '11:02',
    gameConversion: 'League of Legends',
    achievements: 'First Blood',
    buffCoins: 1,
    conversion: ''
  },
  {
    id: 123456787,
    date: '22.22.22',
    time: '7:02',
    gameConversion: 'Conversion',
    achievements: '',
    buffCoins: 5,
    conversion: '7$'
  },
  {
    id: 123456786,
    date: '3.6.17',
    time: '22:23',
    gameConversion: 'Conversion',
    achievements: '',
    buffCoins: 10,
    conversion: '10$'
  },
];
const leaderBoardAPI = [
  {
    id: 23456789,
    name: 'Dota 2',
    period: 'past week',
    playerName: 'Ron B',
    achievements: '10 kills',
    buffEarn: 1250,
  },
  {
    id: 23456788,
    name: 'Dota 2',
    period: 'past week',
    playerName: 'John K',
    achievements: '0 kills',
    buffEarn: 0,
  },
  {
    id: 23456787,
    name: 'CS-GO',
    period: 'past week',
    playerName: 'Mike R',
    achievements: '2 kills',
    buffEarn: 250,
  },
  {
    id: 23456786,
    name: 'CS-GO',
    period: 'past week',
    playerName: 'Jon R',
    achievements: '1 kills',
    buffEarn: 50,
  }
];
const newsAPI = [
  {
    data: '12/7/17',
    title: 'Weekly Dota2 Challange',
    link:'https://www.google.co.il/'
  },
  {
    data: '10/7/17',
    title: 'Latest version',
    link:'https://www.google.co.il/'
  },
  {
    data: '12/10/17',
    title: 'Latest version',
    link:'https://www.google.co.il/'
  },
  {
    data: '10/12/17',
    title: 'Weekly Dota2 Challange',
    link:'https://www.google.co.il/'
  },
];
const tournamentsAPI = [
  {
    id: 1,
    title: "Dota2",
    link: "www.valve.com/dota2",
    game: "dota2",
    date: "2018-05-10T15:39:01.776Z",
    createdAt: "2018-05-10T15:50:00.378Z",
    updatedAt: "2018-05-10T15:50:00.378Z"
  }
];
const mock = {
  historyAPI: historyAPI,
  leaderBoardAPI: leaderBoardAPI,
  newsAPI: newsAPI,
  tournamentsAPI:tournamentsAPI
};

export default mock;