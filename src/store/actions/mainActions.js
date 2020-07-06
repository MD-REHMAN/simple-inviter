export const universalApiCaller = function ({ url, method, data}) {
  return fetch(url, {
    method: method,
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) })
}

export const ApiFailure = function (response) {
  console.log(response.status + " " + response.statusText)
}

export const login = function(data) {
  return (dispatch, getState) => {
    console.log('data sent- ', JSON.stringify(data));
    universalApiCaller('http//:test.kruntummy.com/apii/login/', 'POST', data)
    .then(response => {
      if (response.ok) {
        dispatch({type: 'LOGIN_SUCCESS'})
      }
      else {
        ApiFailure(response)
      }
      // HACK: Not considering API
      dispatch({ type: 'LOGIN_SUCCESS' })

      return response.json()
    })
    .then(a => {
      console.log('API DATA -', a);
    })
  }
}
export const sendInvite = function(data) {
  return (dispatch, getState) => {
    console.log('data sent- ', JSON.stringify(data));
    universalApiCaller('http://test.kruntummy.com/apii/accounts/send_invitation/', 'POST', data)
    .then(response => {
      if (response.status === 200 ) {
        dispatch({type: 'INVITE_SENT'})
      }
      else {
        ApiFailure(response)
      }
      return response.json()
    })
    .then(a => {
      console.log('API DATA -', a);
    })
  }
}