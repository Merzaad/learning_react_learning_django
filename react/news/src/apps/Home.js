import './css/Home.css';
import React from 'react';
import ReactDOM from 'react-dom';
import database from './Database.js'

var post_box = database()

function Home() {
    function post() {
        let a = [];
        for (let i of post_box) {
            if (i.tag !== "ad") {
                a.push(
                    <a href="#" class="lnk">
                        <div className="card rounded-3 my-4 " >
                            <img src={i.img} className=" card-image-top w-100 mb-3" />
                            <div className="card-body">
                                <p className="h2">{i.title}</p>
                                <p className="text-secondary">Updated {i.update}<a href="#"><span className="badge bg-secondary mx-2"><span className="tag">{i.tag}</span></span></a></p>
                                <p>{i.text}</p>
                                <br />
                            </div>
                         </div>
                    </a>
                )
            }
          }
        return (
            <div>
                {a}
            </div>
            )
    };
    function card(x) {
        let a = [];
        for (let i of post_box) {
            if (i.tag == x) {
                a.push(
                    <div className=" p-3 m-3 mb-5 shadow-lg rounded-3 " >
                        <a className="position-absolute" href="#"><span className="badge bg-secondary mx-2"><span className="tag">{i.tag}</span></span></a>
                        <a href="#" class="lnk"><p className="h5 pb-2"> <img src={i.img} className=" w-100 mb-3" />{i.title}</p></a>
                    </div>
                )
            }
        }
        return (
            <>
                {a}
            </>
        )
    };
    function btn() {
        function padd() {
            document.getElementById('left').classList.add('p-5')
            document.getElementById('right').classList.add('p-5')
        }
        return (
            <button id='btn' className="btn bg-dark text-white" onClick={padd}>sidebars padding</button>
            )
    };
    ReactDOM.render(post(), document.getElementById('post'));
    ReactDOM.render(card("ad"), document.getElementById('right'));
    ReactDOM.render(btn(), document.getElementById('btn'));
};

export default Home;