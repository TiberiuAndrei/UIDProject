import * as React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';


const WelcomePage = ({match}) => {


    return (

        <div className="box">

            {/*{if(match.params.email){<div> Hello</div>;*/}
            {/*}else {<div> no</div>}}*/}
            {match.params.email === "user" ? <div> user</div> : <div>
                admin
            </div> }
            <h1 className="header"> Welcome to our App! </h1>
            <p className="instruction"> Please log in in order to get full access </p>

        </div>
    );

}

export default WelcomePage;