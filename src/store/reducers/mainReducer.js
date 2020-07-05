const initState = {
  activeView: 'login',
}

const mainReducer = function (state = initState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      console.log("LOGIN_SUCCESS");
      return {
        ...state,
        activeView: 'invite'
      }
    default:
      return state;
  }
}

export default mainReducer;