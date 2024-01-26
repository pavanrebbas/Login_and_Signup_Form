import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {


    // USESTATE FOR ALL VALUES
    const [data, setdata] = useState(
        {
            username: "",
            password: "",
        }
    )

    // DE-STRUCTURING THE OBJECT PROPERTIES
    const { username, password } = data


    // ONCHANGE METHOD FOR INPUTS BY USING SPREAD OPERATOR

    //SMALL EXAMPLE FOR SPREAD OPERATOR (NA IDEA KOSAM KINDHA UNNNA SPREAD OPERATOR NI ELA EXAMPLE THO CHUSKONI CHESA)
    /*     const nums = [1, 2, 3,]
        const d = [nums, 4, 5, 6]
        console.log(d) */

    // THIS IS ONCHANGE METHOD FOR INPUTS 
    const onChangeHandler = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    // ONSUBMIT METHOD FOR FORM SUBMIT
    const onsubmitHandler = (e) => {
        e.preventDefault(); // EDHI NDHUKU ANTE MANNAM SUBMIT CHESAKA DATA VENTANEY CLEAR AVTHUNDHI (CONSOLE LO) ALA KAKUNDA UNDADANIKI EDHI USE CHESA
        console.log(data)

        // ENTER CHESI SUBMIT CHESAKA CLEAR AVVADANIKI MALLI ELA VADALI
        setdata({
            username: "",
            password: "",
        })
    }



    return (

        <Fragment>
            <div className="container my-4 p-4 ">
                <div className="row">
                    <div className="col-md-6 offset-md-3  login-form">
                        <h4 className="text-center text-white fw-bold">Login Form</h4>
                        <form onSubmit={onsubmitHandler}>
                            <label className="form-label text-white">username</label>
                            <input type="text" className="form-control" name="username" value={username} onChange={onChangeHandler} />
                            {username === "" ? <p className="text-danger">please enter username</p> : username.length <= 5 ? <p className="text-danger">username should be above 5 characters</p> : <i className="bi bi-check-circle-fill text-success"> correct</i>}<br />
                            <label className="form-label text-white">password</label>
                            <input type="password" className="form-control" name="password" value={password} onChange={onChangeHandler} />
                            {password === "" ? <p className="text-danger">please enter password</p> : <i className="bi bi-check-circle-fill text-success"> correct</i>}<br />
                            <button type="submit" name="submit" className="button col-md-4 offset-md-4">submit</button> <br />
                            <Link to="/signup" className=" col-md-4 offset-md-5"> <span className=" text-white  text-center">Don't have account? click to signup</span></Link>
                        </form>
                    </div>
                </div>

            </div>
        </Fragment >
    )
};


export default Login;


