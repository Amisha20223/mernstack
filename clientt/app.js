//console.log("hy");
//const heading = document.createElement('h2');
//heading.innerText = "Hello PP";
import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./src/pages/homepage/homepage.js";
//const heading =React.createElement('h2',{},"hoi")
const Heading2 =() => {
    return <Homepage/>
}

 const domRoot = document.getElementById('root');
 const reactRoot = ReactDOM.createRoot(domRoot);
reactRoot.render(<App/>);
console.logh('hello');