import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Sign = () => {

    const [data, setdata] = useState(
        {
            username: "",
            email: "",
            password: "",
            confirmpassword: "",
            
        }
    )

    ////// DE-STRUCTURING OF THE OBJECT PROPERTIES /////
    const { username, email, password, confirmpassword } = data;

    const Handler = (e) => {

        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const submitHandler = (e) => {

        e.preventDefault();
        console.log(data)

    }



    return (

        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 signup_form">
                        <h4 className="text-center  fw-bold">Signup Form</h4>
                        <form onSubmit={submitHandler}>
                            <label className="form-label">username</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={Handler} />
                            {username === "" ? <p className="text-danger">please enter username</p> : username.length <= 5 ? <p className="text-danger">username should be above 5 characters</p> : <i className="bi bi-check-circle-fill text-success"> correct</i>}<br />
                            <label className="form-label">email</label>
                            <input type="email" className="form-control" name="email" value={email} onChange={Handler} />
                            {email === "" ? <p className="text-danger">please enter your email</p> : <i className="bi bi-check-circle-fill text-success"> correct</i>}<br />
                            <label className="form-label">password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={Handler} />
                            {password === "" ? <p className="text-danger">please enter password</p> : <i className="bi bi-check-circle-fill text-success"> correct</i>}<br />
                            <label className="form-label">confirmPassword</label>
                            <input type="password" className="form-control" name="confirmpassword" value={confirmpassword} onChange={Handler} />
                            {confirmpassword === "" ? <p className="text-danger">password enter confirm Password</p> : password !== confirmpassword ? <p className="text-danger">password's did'nt match</p> : <i className="bi bi-check-circle-fill text-success"> correct</i>}<br />
                            <button className="button  col-md-4 offset-md-4" name="submit">submit</button><br />
                            <Link to="/" className="col-md-4 offset-md-5 text-dark"> <span>click here to Login</span></Link>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
};

export default Sign