import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
    var post_box = [
        {
            text: "For less than $300 you're getting one of our favorite gaming monitors of 2021, and a mighty impressive specsheet to boot.",
            title: "Dell's mighty 32-inch 165Hz gaming monitor is cheaper today than on Black Friday",
            update: "January 19, 2022",
            tag: "news",
            img: "img1.jpg"
        },
        {
            text: "Kill bizarre demons and use their blood as paint in mad roguelike Brutal Orchestra",
            title: "Kill bizarre demons and use their blood as paint in mad roguelike Brutal Orchestra",
            update: "January 13, 2022",
            tag: "ad",
            img: "img2.jpg"
        },
        {
            text: "Here's a game about selling maple syrup to soup up your trashy car for street racing",
            title: "Deliver pizza to live the Quebecois dream in Mon Bazou.",
            update: "January 1, 2022",
            tag: "news",
            img: "img3.jpg"
        },

    ]
    function post() {
        let a = [];
        for (let i of post_box) {
            a.push(
                <div className="p-3 mt-3 shadow-lg " >
                   <img src={i.img} className=" w-100 mb-5" />
                   <p className="h3 pb-2"><a href="#" class="lnk">{i.title}</a></p>
                   <p className="text-secondary">Updated {i.update}<span className="badge bg-secondary mx-2"><a class="lnk" href="#">{i.tag}</a></span></p>
                   <p>{i.text}</p>
                   <br/>
                </div>
            )
          }
        return (
            <div>
                {a}
            </div>
            )
    }
ReactDOM.render(post(), document.getElementById('post'));
};
export default App;
