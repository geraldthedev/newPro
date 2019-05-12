import React from 'react';



export default class Login extends React.Component{

    render(){
        return(
            <div>
            <div id="formy" className="position-absolute">
            <form method="POST" action="/">
            <input type='text'className="form-control" placeholder="Username" name="username"></input>
            <br></br>
            <input type="password" className="form-control" placeholder="Password" name="password"></input>
            <br></br>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
            </div>
        )
    }
}