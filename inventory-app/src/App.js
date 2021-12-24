import logo from './logo.svg';
import './App.css';
import React from "react";
/*
function App() {
  return (
    <div className="App">
     <h2>John Deere Inventory App</h2>
    </div>
  );
}
*/
export class App extends React.Component{

    constructor(props, context) {
        super(props, context);
        console.log("component instantiated...")
        //create state
        this.state={
            currentTime:new Date(),
            menu:[{
                menuId:1,
                name:'Home',
                menuLink:'#/Home'
            },
                {
                    menuId:2,
                    name:'Add Products',
                    menuLink:'#/AddProducts'
                },
                {
                    menuId:1,
                    name:'View Products',
                    menuLink:'#/ViewProducts'
                }



            ]

        }
    }

    componentWillMount() {
        console.log("component will mount...")
    }

    componentDidMount() {
       console.log("Component mounted....")
        setInterval(()=>(this.tick(),1000))
    }

    //updating the state
    tick(){
        this.setState({
            currentTime:new Date()
        })
    }

    render() {
        console.log("Component rendered....")
        return (
            <div className="App">

                <h2>John Deere Inventory App</h2>
                <h4>{this.state.currentTime.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default App;
