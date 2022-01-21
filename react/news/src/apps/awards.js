import Post from './reUseable/post'
import React from 'react';
import ReactDOM from 'react-dom';
import Database from './database'
import Testform from './reUseable/testForm';

var post_box = Database()
function Awards() {
    ReactDOM.render(<Post tag="ad" database={post_box} />, document.getElementById('post'));
    ReactDOM.render(<Post tag="news" database={post_box} />, document.getElementById('right'));
    ReactDOM.render(<Testform />, document.getElementById('form'));
    return (<></>)
};

export default Awards;