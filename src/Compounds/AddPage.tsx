import React, { useState } from 'react'
import { useSelector , RootStateOrAny } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addusers } from '../ActionCreators/ActionCreators';
import { insital } from '../state/actions/types';

const AddPage = () => {
  const [error, seterror] = useState("");
  const dispatch = useDispatch()
  let Navigation = useNavigate()
  // const { id } = useParams()
  const [users, setUsers] = useState({
    id: '',
    name: '',
    email: '',
    phonenumber: '',

  });
  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
    console.log("console users", users);
  }
  // console.log(users)
  const Results =  useSelector((state: RootStateOrAny) => state.customer.users)
  console.log(Results, "Results")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // seterror(true);
    // console.log("error", error);
    if (users.name === undefined && users.email === undefined && users.phonenumber === undefined) {
      console.log("working condition", users.name);

      seterror("please enter values")
    }
    if (!users.name || !users.email || !users.phonenumber) {

      return console.log("Please enter your fields")
    }
    const CheckEmail = Results.find((Result: { email: string; }) => Result.email === users.email ? Result : null);
    const CheckPhone = Results.find((Result: { phonenumber: string; }) => Result.phonenumber === users.phonenumber ? Result : null);


    // console.log(error, "-==--=-")
    // console.log("please enter your values")

    // // return toast.warning("Please Enter Your Deatils")
    if (CheckEmail) {


      return seterror("Email Already Exist")
      // return toast.warning("This Email Already Exist")
    }
    if (CheckPhone) {
      return seterror("PhoneNumber Already exist ")
      // return toast.warning("This Phone Already Exist")
    }
    let value = Results.length + 1
    const data: any  = {

      id: value.toString(),
      name: users.name,
      email: users.email,
      phonenumber: users.phonenumber
    };

    console.log("=-=-=-=-=-=data=-=-=-=-=", data)

    dispatch(addusers({ ...data }));
    // console.log("=-=-=-=-=-=data=-=-=-=-=after", data)
    // toast.success("You had Enterred Your Data");


    // console.log(users)
    // console.log(Results, "Results")
    setUsers({
      id: '',
      name: '',
      email: '',
      phonenumber: '',

    })
    Navigation("/");
  }


  return (
    <div className="container">
      <h2 className="text-center text-dark py-3 display-6"> Add Details</h2>


      <div>

        <div className="row">
          <div className="col-md-6 p-5 shadow mx-auto shadow">
            {error && <h2 style={{ color: "red" }}> {error}</h2>}

            <form onSubmit={handleSubmit}>
              <div className="form-group mt-3 ">
                <input type="text"
                  className="form-control "
                  placeholder="Enter Your Name"
                  name="name" value={users.name}
                  onChange={handleValues} />
                {/* <input type="text" onChange={(e) => setusers(e.target.value)} className="form-control " /> */}
              </div>
              <div className="form-group mt-3 ">
                <input type="text" name="email"
                  placeholder="Enter Your email"
                  value={users.email}
                  onChange={handleValues} className="form-control " />
                {/* <input type="text" className="form-control" placeholder="Enter Your Email" name="email" onChange={setusers((e) => e.target.email.value)} /> */}
              </div>
              <div className="form-group mt-3 ">
                <input type="text" className="form-control" placeholder="Enter Your Phone Number"
                  name="phonenumber"
                  value={users.phonenumber}
                  onChange={handleValues} />

              </div>
              <div className="form-group mt-3  ">
                <input type="submit" className="btn btn-block btn-dark " />

              </div>
            </form>

          </div>

        </div>
      </div>
    </div >
  )
}

export default AddPage