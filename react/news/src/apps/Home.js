import React from 'react';
import ReactDOM from 'react-dom';
import Database from './database'
import Testform from './reUseable/testForm'
import Card from './reUseable/card'
import Post from './reUseable/post'

var post_box = Database()

function Home() {
    ReactDOM.render(Post("ad",post_box), document.getElementById('post'));
    ReactDOM.render(Card("ad",post_box), document.getElementById('right'));
    ReactDOM.render(<Testform />, document.getElementById('form'));
    return(<></>)
};

export default Home;