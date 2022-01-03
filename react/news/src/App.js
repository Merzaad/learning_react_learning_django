import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
    var post_box = [
        {
            text: "For less than $300 you're getting one of our favorite gaming monitors of 2021, and a mighty impressive specsheet to boot. The sprawling metropolis now has a working metro system, thanks to modders, with 19 stations and a full integration into the game's UI and controls. It's a nice, slick bit of modding for those who really want an immersive game they can freely explore, and those who detest fast travel systems.",
            title: "Dell's mighty 32-inch 165Hz gaming monitor is cheaper today than on Black Friday",
            update: "January 19, 2022",
            tag: "news",
            img: "img1.jpg"
        },
        {
            text: "President Yosuke Matsuda acknowledges skeptics, but hopes that blockchain tokens can decentralize gaming, thanks to modders, with 19 stations and a full integration into the game's UI and controls. It's a nice, slick bit of modding for those who really want an immersive game they can freely explore, and those who detest fast travel systems.",
            title: "Square Enix president knows people who 'play to have fun' dislike NFTs, but he wants them anyway",
            update: "January 12, 2022",
            tag: "news",
            img: "img6.jpg"
        },
        {
            text: "Kill bizarre demons and use their blood as paint in mad roguelike Brutal Orchestra",
            title: "Kill bizarre demons and use their blood as paint in mad roguelike Brutal Orchestra ",
            update: "January 13, 2022",
            tag: "ad",
            img: "img2.jpg"
        },
        {
            text: "Here's a game about selling maple syrup to soup up your trashy car for street racing. The sprawling metropolis now has a working metro system, thanks to modders, with 19 stations and a full integration into the game's UI and controls. It's a nice, slick bit of modding for those who really want an immersive game they can freely explore, and those who detest fast travel systems.",
            title: "Deliver pizza to live the Quebecois dream in Mon Bazou.",
            update: "January 1, 2022",
            tag: "ad",
            img: "img3.jpg"
        },
        {
            text: "The week Valheim launched, I scoffed. Do we really need another early access crafting survival game?",
            title: "PC Gamer's Game of the Year for 2021. To see the full awards, head over to our GOTY 2021 hub.",
            update: "January 3, 2022",
            tag: "awards",
            img: "img4.jpg"
        },

        {
            text: "If you were ever frustrated that Night City's NCART system didn't work, well, Cyberpunk 2077 modders have got you covered. The sprawling metropolis now has a working metro system, thanks to modders, with 19 stations and a full integration into the game's UI and controls. It's a nice, slick bit of modding for those who really want an immersive game they can freely explore, and those who detest fast travel systems.",
            title: "Cyberpunk 2077 gets a metro thanks to modders",
            update: "January 3, 2022",
            tag: "news",
            img: "img5.jpg"
        },
    ];
    function Post() {
        let a = [];
        for (let i of post_box) {
            if (i.tag != "ad") {
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
    function Ad() {
        let a = [];
        for (let i of post_box) {
            if (i.tag == "ad") {
                a.push(
                    <div className=" p-3 m-3 my-5 shadow-lg rounded-3 " >
                        <a className="position-absolute" href="#"><span className="badge bg-secondary mx-2"><span className="tag">{i.tag}</span></span></a>
                        <a href="#" class="lnk"><p className="h5 pb-2"> <img src={i.img} className=" w-100 mb-3" />{i.title}</p></a>
                    </div>
                )
            }
        }
        return (
            <div className="sticky-top ">
                {a}
            </div>
        )
    };
    function Top() {
        let a = [];
        for (let i of post_box) {
            if (i.tag == "awards") {
                a.push(
                    
                    <div className="p-3 m-3 my-5 shadow-lg rounded-3" >
                        <a className="position-absolute" href="#"><span className="badge bg-secondary mx-2"><span className="tag">{i.tag}</span></span></a>
                        <a href="#" class="lnk"><p className="h5 pb-2"> <img src={i.img} className=" w-100 mb-3" />{i.title}</p></a>
                    </div>
                    
                )
            }
        }
        return (
            <div className="sticky-top">
                {a}
                <Ad />
            </div>
        )
    };
    function btn() {
        function test() {
            document.getElementById('left').classList.add('p-5')
        }
        return (
            <button class="btn w-100 bg-dark text-white" onClick={test}>Press</button>
            )
    };
    ReactDOM.render(Post(), document.getElementById('post'));
    ReactDOM.render(Top(), document.getElementById('left'));
    ReactDOM.render(Ad(), document.getElementById('right'));
    ReactDOM.render(btn(), document.getElementById('btn'));
};
export default App;
