import React, { Component } from 'react';

import Editrsvp from "./Editrsvp";

class RSVPList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            editDataToSend: {},
        }
    }

    editRsvp=(e)=>{
        this.setState({edit:true});
        fetch('/edit/'+e.target.name)
            .then(data=>data.json())
            .then(response => this.setState({editDataToSend: response}));
    };

    getRidOfEdit = () =>{
        this.setState({edit: false});
    };

    deletersvp=(e)=>{
        console.log(e.target);
        fetch('/delete', {
            method: 'DELETE',
            headers: {
                'Accept': "application/json",
                'Content-type': 'application/json',
            },
            body: JSON.stringify({rsvp_person:e.target.name}),
        })
            .then(()=>this.props.updateDatabaseData());
    };

    render(){
        let collectionMap = this.props.collection.map(
            (eachrsvp)=>{
                return (<div key={eachrsvp.rsvp_person}>
                    <p>The Person {eachrsvp.rsvp_person} and is planning on {eachrsvp.rsvp_going}.
                        <button className="buttonLink" name={eachrsvp.rsvp_person} onClick={this.editRsvp}>Edit</button>
                        <button className="buttonLink" name={eachrsvp.rsvp_person} onClick={this.deletersvp}>Delete</button>
                    </p>
                </div>)
            }
        );

        let showEdit = "";
        if(this.state.edit)
            showEdit = <Editrsvp editDataToSend={this.state.editDataToSend} updateDatabaseData={this.props.updateDatabaseData} getRidOfEdit={this.getRidOfEdit}/>;
        else
            showEdit = "";

        return(
            <div>
                {showEdit}
                <h1>RSVP List here</h1>
                {collectionMap}
            </div>
        );
    }
}

export default RSVPList;
