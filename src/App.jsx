import "./App.css";
import Avatar from "./avatar";
import Badge from "./badge";
import Card from "./card";
import Header from "./header";
import Footer from "./footer"
import Counter from "./counter"

import Rainbow from "./rainbow.jpeg"

function App (){
    return (
    <div className ="App"> 
    {/* {Header} */}
    <Header title = "React Begginer's Quiz"/>
        
        <div className="card-box">
            {/* three cards */}
        <Card title ="Card 1" content = "Hello"/>
        <Card title ="Card 2" content = "Good day"/>
        <Card title ="Card 3" content = {<Counter/>}/>

        {/* Avatar */}
        <Avatar
        imageSrc = {Rainbow}
        description ="My Avatar"
        />

        {/* Bagde */}
        <Badge label ="New"/>

        {/* footer */}
        <Footer content="Created with ❤️ by [Ingrid]"/>
        </div>

    </div>
    );
}

export default App;