import React, { useState } from 'react';
import { connect } from 'react-redux'

import { sendInvite } from '../store/actions/mainActions';

const Invite = function (props) {
  const [inviteForm, setInviteForm] = useState({
    email: '',
    mobile: '',
  });
  const [inviteFormError, setInviteFormError] = useState({
    email: '',
    mobile: '',
  });
  const [inviteeList, setinviteeList] = useState([
  ]);

  const inviteeListTemplate = inviteeList.map((item, index) => <div className="list-item">
    <span className="eamil">
      Email: { item.email }
    </span>
    <span className="mobile">
      Mobile: { item.mobile }
    </span>
    <button onClick={ () => RemoveItem(index) }>Remove</button>
  </div>)

  const changeHandler = event => {
    setInviteForm({
      ...inviteForm,
      [event.target.name]: event.target.value,
    })
    setInviteFormError({
      ...inviteFormError,
      [event.target.name]: ''
    })
  }

  const emptyCheck = (element) => {
    if (!inviteForm[element]) {
      setInviteFormError({
        ...inviteFormError,
        [element]: `It cannot be empty`
      })
      return true;
    }
    return false
  }

  const validateForm = () => {
    let validateAry = Object.keys(inviteForm).map(key => {
      if (emptyCheck(key)) return false;
      return true;
    })
    console.log(" apppu - ", inviteFormError);
    return validateAry.reduce((c, v) => c && v);
  }


  const AddToList = () => {
    if (!validateForm()) return false;
    setinviteeList([
      ...inviteeList,
      {
        ...inviteForm,
        index: inviteeList.length,
      }
    ])
    setInviteForm({
      email: "",
      mobile: "",
    });
    // console.log("inviteeList", inviteeList);
  }

  const RemoveItem = index => {
    const newList = inviteeList.filter((value, currentIndex) => currentIndex !== index);
    setinviteeList(newList);
  }

  const addIndex = () => {
    const inviteListWithIndex = inviteeList.map((item, index) => {
      return {
        ...item,
        index
      }
    })
    props.sendInvite(inviteListWithIndex);
    setinviteeList([]);
  }

  return <>
    <div className="invite-wrapper">
      <div>
        <div className="inviter-adder">
          <input type="text" name="email" className="email" placeholder={ inviteFormError.email || "Email" } onChange={ e => { changeHandler(e) } } value={ inviteForm.email } />
          <input type="text" name="mobile" className="mobile" placeholder={ inviteFormError.mobile || "Mobile Number" } onChange={ e => { changeHandler(e) } } value={ inviteForm.mobile }/>
          <button onClick={ () => AddToList() }>Add</button>
        </div>
        <div className="invitee-list">
          { inviteeListTemplate }
        </div>
      </div>
      <button onClick={ () => addIndex() }>Send Invite</button>
    </div>


  </>
}

const mapDispatchToProps = dispatch => {
  return {
    sendInvite: (data) => dispatch(sendInvite(data))
  }
}

export default connect(null, mapDispatchToProps)(Invite);