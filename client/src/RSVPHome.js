import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Addrsvp from "./Addrsvp";
import RSVPList from "./RSVPList";

class RSVPHome extends Component{
    constructor(props) {
        super(props);
        this.state={
            collection:[],
        };
        this.updateDatabaseData();
    }

    updateDatabaseData=()=>{
        fetch('/RSVPlist')
            .then(data=>data.json())
            .then(jsonData=>this.setState({collection:jsonData}));
    };

    render(){
        return(
            <div>
                <Router>
                    <Link className="linkInGeneral" to="/">Home</Link>
                    <Link className="linkInGeneral" to="/Addrsvp">Add RSVP</Link>

                    <Route path="/" exact
                           component={()=><RSVPList collection={this.state.collection} updateDatabaseData={this.updateDatabaseData}/>
                           }/>
                    <Route path="/addProduct"
                           component={()=><Addrsvp updateDatabaseData={this.updateDatabaseData}/>
                           }/>


                    {/*<ProductList collection={this.state.collection} updateDatabaseData={this.updateDatabaseData}/>*/}


                    {/*<Route path="/" component={ProductList}/>*/}
                    {/*<Route path="/" component={AddProduct}/>*/}

                </Router>
            </div>
        );
    }
}

export default RSVPHome;