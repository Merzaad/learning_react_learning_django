import React from 'react';
import ReactDOM from 'react-dom';
import Database from './database'
import Testform from './reUseable/testForm'
import Card from './reUseable/card'
import Post from './reUseable/post'

var post_box = Database()

function Home() {
    ReactDOM.render(<Post tag="ad" database={post_box}/>, document.getElementById('post'));
    ReactDOM.render(<Card tag="ad" database={post_box} />, document.getElementById('right'));
    ReactDOM.render(<Testform />, document.getElementById('form'));
    return null
};

export default Home;