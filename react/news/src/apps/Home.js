import React from 'react';
import ReactDOM from 'react-dom';
import Database from './database'
import Sidebar from './reUseable/sidebar'
import Testform from './reUseable/test'
import Card from './reUseable/card'
import Post from './reUseable/post'
var post_box = Database()

function Home() {
    ReactDOM.render(Post("ad",post_box), document.getElementById('post'));
    ReactDOM.render(Card("ad",post_box), document.getElementById('right'));
    ReactDOM.render(Sidebar(), document.getElementById('left'));
    ReactDOM.render(<Testform/>, document.getElementById('form'));
};

export default Home;