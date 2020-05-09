import React from 'react';

const ApprovalCard = (props) => {
  console.log(props)
  return (
    <div className="ui card">
      <div className="content">
        {props.children}
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button" href="/#">Approve</div>
          <div className="ui basic red button" href="/#">Reject</div>
        </div>
      </div>
    </div>
  )
}

export default ApprovalCard