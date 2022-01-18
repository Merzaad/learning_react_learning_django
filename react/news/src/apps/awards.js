import Post from './reUseable/post'
import React from 'react';
import ReactDOM from 'react-dom';
import Database from './database'
var post_box = Database()
function Awards() {
    ReactDOM.render(Post("news", post_box), document.getElementById('post'));
    ReactDOM.render(Post("ad", post_box), document.getElementById('right'));
    return (<></>)
};

export default Awards;