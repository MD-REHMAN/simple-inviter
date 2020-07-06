import React, { useState } from 'react';
import { connect } from 'react-redux'

import { login } from '../store/actions/mainActions';

const Login = function(props) {
  const [form, setForm] = useState({
    userName: "",
    password: "",
    // userName: "testuser1",
    // password: "Kruntummy$1",
  })
  const [formError, setFormError] = useState({
    userName: "",
    password: "",
  })

  const changeHandler = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
    setFormError({
      ...formError,
      [event.target.name]: ''
    })
  }

  const emptyCheck = (element) => {
    if (!form[element]) {
      setFormError({
        ...formError,
        [element]: `It cannot be empty`
      })
      return true;
    }
    return false
  }

  const validateForm = () => {
    let validateAry = Object.keys(form).map(key => {
      if (emptyCheck(key)) return false;
      return true;
    })
    validateAry.reduce((c, v) => c && v) && props.login(form)
    return true;
  }

  return <>
    <div className="login-wrapper">
      <input type="text" name="userName" className="userName" placeholder={ formError.userName || "Username" } onChange={ e => {changeHandler(e)} } value={ form.userName }/>
      <input type="password" name="password" className={ formError.password || "Password" } placeholder="Password" onChange={ e => changeHandler(e) } value={ form.password }/>
      <button onClick={ () => validateForm() }>Login</button>
    </div>
  </>
}

const mapDispatchToProps = dispatch => {
  return {
    login: (data) => dispatch(login(data))
  } 
}

export default connect(null, mapDispatchToProps)(Login);