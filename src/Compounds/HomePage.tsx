import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, RootStateOrAny } from 'react-redux'
import { useDispatch, } from 'react-redux'
import { Table, Container , Button } from 'react-bootstrap';
import { insital } from "../state/actions/types"
import { deleteUser, fetchUsers } from '../ActionCreators/ActionCreators'


const HomePage = () => {
  let Users = useSelector((state: RootStateOrAny) => state.customer.users)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())


  }, []);
  const deleteContact = (id: string) => {
    console.log(id)
    dispatch(deleteUser(id))

  }


  // console.log("Users", Users)

  return (
    <Container>
      <h2> Here You Can Upadte Your Deatils</h2>
      <Link to="/add"> 
      <Button> Add Deails</Button>
      
      </Link>
      <Table striped bordered hover variant="secondary">
        <thead>
          <tr>
            <th scope="" className="fw-light "> I D</th>
            <th> N A M E</th>
            <th>E - M A I L</th>
            <th>P H O N E  N U M B E R</th>
            <th> E D I T   - O R -  D E L E T E</th>
          </tr>
        </thead>
        <tbody>
          {Users && Users.length > 0 && Users.map((User: insital, id: string) => (
            <tr key={id}>
              <td>{User.id}</td>
              <td>{User.name}</td>
              <td>{User.email}</td>
              <td>{User.phonenumber}</td>
              <td className="fw-light"> <Link
                to={`/edit/${User.id}`}

              ><button type="button" className="btn btn-info mx-4">  Edit</button>

              </Link>
                <button
                  type="button"
                  onClick={() => deleteContact(User.id)}
                  className="btn  btn-danger "
                >
                  Delete
                </button></td>

            </tr>))}
        </tbody>
      </Table>
    </Container>
  )
}

export default HomePage