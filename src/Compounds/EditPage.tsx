import React, { useState, useEffect } from 'react'
import { Button, Container, Navbar, Form } from 'react-bootstrap';
import { useParams, useNavigate, Link } from 'react-router-dom'
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux'
import { editUser, getUsers } from '../ActionCreators/ActionCreators';


const EditPage = () => {
  const [users, setUsers] = useState({
    id: '',
    name: '',
    email: '',
    phonenumber: '',

  });
  const handleValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsers({ ...users, [e.target.name]: e.target.value })
   
  }
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const Result = useSelector((state: RootStateOrAny) => state.customer.users)
  console.log(Result , "RESULT"); 
  



  useEffect(() => {
    dispatch(getUsers(id))

  }, []);
  useEffect(() => {
    if (Result) {
      setUsers({ ...Result })
    }
  //  if(Result.length > 0) {
  //    navigate("/")

  //  }


    // }
  }, [Result]);
  useEffect(() => {
    if(Result.name && Result.email && Result.phonenumber !== 0) {
      navigate("/")
    }
},[editUser])
  console.log(editUser , "EDITUSER");
  const handleSubmit = () => {
    // e.preventDefault
    const dataId = id || '';
    // setTimeout(greet, 2000);
     navigate("/")
    dispatch(editUser(users, dataId))

   
    // navigate("/")
    // if (!users.name || !users.email || !users.phonenumber) {
    //   return console.log("Please enter your fields")
    // }
    // else {
    //   console.log("working")
     
    // }
    
    
  }

  return (
    <Container >
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Back To </Navbar.Brand>
        <Link to="/"><Button variant="dark" style={{ marginRight: "10px" }}>Home</Button> </Link>
      </Navbar>
      <Container >
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name </Form.Label>
            <Form.Control type="text" placeholder="Enter name"  name="name" value={users.name} onChange={handleValues}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter Your Email</Form.Label>
            <Form.Control type="text" placeholder="E-mail" name="email" value={users.email} onChange={handleValues} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNumber">
            <Form.Label>Enter Your Number</Form.Label>
            <Form.Control type="text" placeholder="Number"  name="phonenumber" value={users.phonenumber} onChange={handleValues}/>
          </Form.Group>
         
          <Button variant="primary"  onClick={()=>handleSubmit()}>
            Submit
          </Button>
        </Form>

      </Container>




    </Container>

  )
}

export default EditPage