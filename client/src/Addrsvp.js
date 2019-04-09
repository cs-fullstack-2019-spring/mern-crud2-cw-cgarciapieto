import React, { Component } from 'react';

class Addrsvp extends Component{



    submitrsvpForm=(e)=>{
        e.preventDefault();
        fetch('/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                rsvp_person: e.target.rsvp_person.value,
            rsvp_going: e.target.rsvp_going.value,

            }),
        })
            .then(this.props.updateDatabaseData());
    };
    render(){
        return(<div>
                <h1>Add RSVP</h1>
                <form onSubmit={this.submitrsvpForm}>
                    <p>
                        <label htmlFor="Person">Person:</label>
                        <input type="text" id="person" name="person"/>
                    </p>

                    <p>
                        <label htmlFor="going">Going:</label>
                        <input type="text" id="going" name="going"/>
                    </p>


                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Addrsvp;