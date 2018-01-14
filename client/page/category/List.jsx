import React from 'react';
import { Card } from 'antd'
import { Link } from 'react-router-dom';

const ListItem = (props) => {
  const { data } = props
  return (
    <Link to='/product/1'>
      <div className="category-list-item">
        <div className="category-list-item-img">1</div>
        <div className="category-list-item-info">
          <div className="package-item-title">---</div>
          <div className="package-item-price">---</div>
        </div>
      </div>
    </Link>
  )
}
export default (props) => {
  const { data } = props
  return (
    <div className="category-list">
      {[1,2,3,4,5].map(d => <ListItem key={d} />)}
    </div>
  )
}