import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';

function StudentListComponent() {
    let [data, setData] = useState([]);
    const getData = async () => {
        try {
            let res = await axios.get('https://66a89adbe40d3aa6ff58a43e.mockapi.io/users')
            if (res.status === 200) {
                setData(res.data)
                console.log(data);
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleDelete = async (id) => {
        try {
            let res = await axios.delete(`https://66a89adbe40d3aa6ff58a43e.mockapi.io/users/${id}`)
            if (res.status === 200) {
                getData()
            }
        }
        catch (error) {
            error
        }
    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <>
            <div className="container">
                <br />
                <br />
                <div className="card border-0 shadow my-5 ">
                    {data.length ?
                        <div className="card-body p-5" style={{ background: "#202230", border: "2px solid #f13635" }}>
                            <h1 className="fw-bold text-light text-center">USERS LIST</h1>
                            <br />
                            <Table striped variant='dark' hover responsive="xl">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                        <th>Website</th>
                                        <th>Company</th>
                                        <th>Actions</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((e) => {
                                            return < tr >
                                                <td>{e.id}</td>
                                                <td>{e.name}</td>
                                                <td>{e.username}</td>
                                                <td><a href={`mailto:${e.email}`}>{e.email}</a></td>
                                                <td>{e.address.street},<br />{e.address.city}, {e.address.state}, {e.address.zip}</td>
                                                <td><a href={`tel:${e.phone}`}>{e.phone}</a></td>
                                                <td><a href={`${e.website}`} target="_blank">{e.website}</a></td>
                                                <td>{e.company.name}</td>
                                                <td>
                                                    <Button variant="warning"><Link to={`/edit/${e.id}`}><i className="fa-solid fa-user-pen"></i></Link></Button>
                                                </td>
                                                <td><Button variant="danger" onClick={() => handleDelete(e.id)}><i className="fa-solid fa-trash"></i></Button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                        :
                        <>
                            <div className="container no_data">
                                <img
                                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F023%2F914%2F428%2Fnon_2x%2Fno-document-or-data-found-ui-illustration-design-free-vector.jpg&f=1&nofb=1&ipt=fbd368ff0c96fc4ab42e9880274ecf8f94c5fc4ce7cb4d69d23414b3463de488&ipo=images"
                                    className="img-fluid"
                                    alt="No Data Found"
                                />
                                <Link to={'/add_user'}>
                                    <Button variant="success" className="btn">
                                        <i className="fa-solid fa-add"></i> Add User
                                    </Button>
                                </Link>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default StudentListComponent