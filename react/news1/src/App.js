import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
function App() {
    function post() {
        const text = "For less than $300 you're getting one of our favorite gaming monitors of 2021, and a mighty impressive specsheet to boot.";
        const title = "Dell's mighty 32-inch 165Hz gaming monitor is cheaper today than on Black Friday";
        const update = "December 1, 2022"

        return (
            <div class="p-2 mt-3">
                <p class="h2 pb-2"><a href="#" class="lnk">{title}</a></p>
                <p class="text-secondary">Updated {update}<span class="badge bg-secondary mx-2"><a class="lnk" href="#">News</a></span></p>
                <p>{text}</p>
            </div>
        )
    }
    ReactDOM.render(post(), document.getElementById('post'));
};
export default App;
