import React from 'react';
import { Card } from 'antd'

export default (props) => {
  const { data } = props
  return (
    <div className="section-portrait-list">
      <div className="section-portrait-title">
        <span>Title</span>
      </div>
      <ul>
        <li className="section-portrait-list-cell-1 section-portrait-list-cell">
          1
        </li>
        <li className="section-portrait-list-cell-2 section-portrait-list-cell">
          <div className="section-portrait-list-cell-img">2</div>
          <div className="section-portrait-list-cell-info">
            <div className="package-item-title">
              <span>----</span>
            </div>
            <div className="package-item-price">
              <span>----</span>
            </div>
          </div>
        </li>
        <li className="section-portrait-list-cell-3 section-portrait-list-cell">
          <div className="section-portrait-list-cell-img">3</div>
          <div className="section-portrait-list-cell-info">
            <div className="package-item-title">
              <span>----</span>
            </div>
            <div className="package-item-price">
              <span>----</span>
            </div>
          </div>
        </li>
        <li className="section-portrait-list-cell-4 section-portrait-list-cell">
          <div className="section-portrait-list-cell-img">4</div>
          <div className="section-portrait-list-cell-info">
            <div className="package-item-title">
              <span>----</span>
            </div>
            <div className="package-item-price">
              <span>----</span>
            </div>
          </div>
        </li>
        <li className="section-portrait-list-cell-5 section-portrait-list-cell">
          <div className="section-portrait-list-cell-img">5</div>
          <div className="section-portrait-list-cell-info">
            <div className="package-item-title">
              <span>----</span>
            </div>
            <div className="package-item-price">
              <span>----</span>
            </div>
          </div>
        </li>
        <li className="section-portrait-list-cell-6 section-portrait-list-cell">
          <div className="section-portrait-list-cell-img">6</div>
          <div className="section-portrait-list-cell-info">
            <div className="package-item-title">
              <span>----</span>
            </div>
            <div className="package-item-price">
              <span>----</span>
            </div>
          </div>
        </li>
      </ul>
      <div className="section-portrait-more">
        <a href="#">查看更多</a>
      </div>
    </div>
  )
}