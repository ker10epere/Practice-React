import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker'
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard';
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Ker" avatar={faker.image.avatar()} />
        <CommentDetail author="Umaru" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <div>
          <h1>Are you sure?</h1>
          <p>Mehhhh</p>
        </div>
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))