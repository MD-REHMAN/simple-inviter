import React, { useState } from 'react';
import { connect } from 'react-redux'

import { sendInvite } from '../store/actions/mainActions';

const Invite = function (props) {
  const [inviteForm, setInviteForm] = useState({});
  const [inviteeList, setinviteeList] = useState([
  ]);

  const inviteeListTemplate = inviteeList.map((item, index) => <div className="list-item">
    <span className="eamil">
      Emai: { item.email }
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
  }

  const AddToList = () => {
    setinviteeList([
      ...inviteeList,
      {
        ...inviteForm,
        index: inviteeList.length,
      }
    ])
    setInviteForm({});
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
          <input type="text" name="email" className="email" placeholder="Email" onChange={ e => { changeHandler(e) } } value={ inviteForm.email } />
          <input type="text" name="mobile" className="mobile" placeholder="Mobile Number" onChange={ e => { changeHandler(e) } } value={ inviteForm.mobile }/>
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