import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="grid-item">
        <div className="pinWrapper hover-show">
          <div className="pinImageActionButtonWrapper">
            <div className="btn-upload">
              <button>Upload</button>
            </div>
            <div className="btn-save">
              <button>Save</button>
            </div>
            <img src="https://i.pinimg.com/originals/33/62/d5/3362d5e5f7ed89d42a4acf3139a99948.jpg" />
            
            <div className="span-user">
              <span>Upload by user</span>
            </div>            
          </div>

          <div className="pinMetaWrapper">
            <div className="meta-span">
              <span>if only they could talk... what a conversation!</span>            
            </div>
            <div className="btn-more">
              <button>...</button>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default Box;
