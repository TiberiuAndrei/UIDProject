import * as React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';

function route(history, email, password){
    history.push('/welcomepage/'+ email);
}

const Login = () => {
    const [email, setEmail] = useState("");
    const history = useHistory();
    const [password, setPassword] = useState("");


    return (
        <div className="box">
            <h1 className="header"> Welcome to our App! </h1>
            <p className="instruction"> Please log in in order to get full access </p>

                <form>
                    <label htmlFor="email" className="emailmargin">Email</label>
                    <br />
                    <input type="text" className="email" id="email" name="email" value={email}
                           onChange={e =>{ setEmail(e.target.value);console.log(email)}}/>
                    <br />
                    <label htmlFor="password" className="passwordmargin">Password</label>
                    <br />
                    <input type="text" className="email" id="email" name="email" value={password}
                           onChange={e => setPassword(e.target.value)}/>
                </form>

                <div>
                    <button className="button" onClick={e=>route(history, email)}>Send</button>

                </div>

            <a href="" className="link"> Log in as guest </a>

        </div>
    );

}

export default Login;