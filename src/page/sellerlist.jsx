import { useEffect, useState } from "react";
import AdminNavbar from "../componants/adminnavbar";
import { fetchUsers } from "../Data/UserData";
import { Table, InputGroup, Form, Button } from "react-bootstrap";

const Sellerlist = () => {

    const [usersRaw, setUsersRaw] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsersRaw(fetchUsers())
    },[])

    useEffect(() => {
        console.log(usersRaw)
        setUsers(usersRaw)
    },[usersRaw])



    return (
        <>

            
                {/* searchbar */}
            <div className="d-flex justify-content-between w-75  m-auto mt-5">
                <div>
                    <h1 className="">Userlist</h1>
                </div>
                <div>
                    <InputGroup className="rounded-pill border border-dark" style={{
                        width: '600px', //  ปรับความยาวตรงนี้
                        position: 'relative'
                    }}>
                        <Form.Control
                            placeholder="Username, UserId"
                            className="border-0 rounded-pill"
                            style={{
                                boxShadow: 'none',
                                paddingLeft: '20px',
                                paddingRight: '40px'
                            }}
                        />
                        <Button
                            variant="light"
                            className="border-0 position-absolute end-0 me-2 bg-transparent"
                            style={{ zIndex: 10 }}
                        >
                            <i className="bi bi-search"></i>
                        </Button>
                    </InputGroup>
                </div>
            </div>
            {/* search bar end */}



            {/* Container */}
            <div className=" w-75 m-auto">
                {/* Table */}
                <Table striped bordered hover>
                    <thead className="table-dark ">
                        <tr>
                            <th style={{ width: '3rem' }}>ID</th>
                            <th>Username</th>
                            <th style={{ width: '6rem' }}>Role</th>
                            <th style={{ width: '8rem' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
{/* 
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>seller</td>
                            <td>inspect</td>
                        </tr> 
*/}                     
                            {users.map(user => (
                                <tr key={user.id}>
                                    <td className="text-center">{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    <td><Button variant="warning">Inspect <i class="bi bi-search"></i></Button></td>
                                </tr>
                            ))}
                        
                    </tbody>
                </Table>
                {/* table end  */}
            </div>
        </>
    );
}

export default Sellerlist;