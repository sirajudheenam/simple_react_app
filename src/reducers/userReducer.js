const initialState = {
  cards: [
    { id: 1, title: 'Wafiqah', location: 'Madurai, India', body: 'First daughter'},
    { id: 2, title: 'Tishya', location: 'Surabaya, Indonesia', body: 'Second daughter'},
    { id: 3, title: 'Femida', location: 'Berlin, Germany', body: 'Third daughter'},
    { id: 4, title: 'Farzana', location: 'Chennai, India', body: 'Fourth daughter'},
    { id: 5, title: 'Yusra', location: 'Podra, India', body: 'Daughter'}
  ],
  users: []
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'DELETE_CARD':
      let newCards = state.cards.filter( (card) => {
        return action.id !== card.id
      })
      return {
        ...state,
        cards: newCards
      }
    case 'FETCH_USERS':
      return {
        ...state,
        users: action.payload
      }
    case 'DELETE_USER':
      let newUsers = state.users.filter( (user) => {
        console.log(user.username);
        return action.username !== user.username
      })
      console.log(action.username);
      return {
        ...state,
        users: newUsers
      }
    default:
      return state;
  }
};

export default userReducer;
