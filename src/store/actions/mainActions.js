export const universalApiCaller = function ({ url, method, data}) {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) })
}

export const ApiFailure = function (response) {
  console.log(response.statusText)
}

export const login = function(data) {
  return (dispatch, getState) => {
    console.log('data sent- ', JSON.stringify(data));
    universalApiCaller('http//:test.kruntummy.com/apii/login/', 'POST', data)
    .then(response => {
      console.log("response", response);
      if (response.ok) {
        dispatch({type: 'LOGIN_SUCCESS'})
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
export const sendInvite = function(data) {
  return (dispatch, getState) => {
    console.log('data sent- ', JSON.stringify(data));
    universalApiCaller('http://test.kruntummy.com/apii/accounts/send_invitation/', 'POST', data)
    .then(response => {
      console.log("response", response);
      if (response.status === 200 ) {
        dispatch({type: 'INVITE_SENT'})
      }
      else {
        ApiFailure(response)
      }
      return response.json()
    })
    .then(a => {
      console.log('API DATA invite -', a);
    })
  }
}