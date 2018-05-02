const history = [{
  id: 123456789,
  date: '12.7.17',
  time: '8:02',
  gameConversion:'League of Legends',
  achievements:'3 kills',
  buffCoins: 6,
  conversion: ''
},
  {
    id: 123456788,
    date: '1.7.17',
    time: '11:02',
    gameConversion:'League of Legends',
    achievements:'First Blood',
    buffCoins: 1,
    conversion: ''
  },
  {
    id: 123456787,
    date: '22.22.22',
    time: '7:02',
    gameConversion:'Conversion',
    achievements:'',
    buffCoins: 5,
    conversion: '7$'
  },
  {
    id: 123456786,
    date: '3.6.17',
    time: '22:23',
    gameConversion:'Conversion',
    achievements:'',
    buffCoins: 10,
    conversion: '10$'
  },
]

export function addAgenda(history = history) {
  return (dispatch) => dispatch({
    type: 'ADD_HISTORY',
    payload: history
  })
}

export function onLogin(user) {
  return (dispatch) => dispatch({
    type: 'USER_LOGIN',
    payload: user
  })
}


