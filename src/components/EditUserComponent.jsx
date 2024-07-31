import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useNavigate, useParams } from 'react-router-dom';

function EditUserComponent() {
    const { id } = useParams(); // Extract the user ID from the URL
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        address: {
            street: '',
            city: '',
            state: '',
            zip: '',
            geo: {
                lat: '',
                lng: ''
            }
        },
        company: {
            name: '',
            catch_phrase: '',
            bs: ''
        }
    });

    useEffect(() => {
        // Fetch existing user data when the component mounts
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://66a89adbe40d3aa6ff58a43e.mockapi.io/users/${id}`);
                setFormData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                alert('Failed to load user data.');
            }
        };

        fetchUserData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const keys = name.split('.');

        setFormData(prevFormData => {
            let updatedData = { ...prevFormData };
            let nestedData = updatedData;

            keys.forEach((key, index) => {
                if (index === keys.length - 1) {
                    nestedData[key] = value;
                } else {
                    nestedData = nestedData[key];
                }
            });

            return updatedData;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://66a89adbe40d3aa6ff58a43e.mockapi.io/users/${id}`, formData);
            console.log('User updated successfully:', response.data);
            navigate('/');
            alert('User updated successfully!');
        } catch (error) {
            console.error('There was an error updating the user!', error);
            alert('Failed to update user. Please try again.');
        }
    };

    return (
        <>
            <br />
            <br />
            <br />
            <Form className='forms-input'>
                <br />
                <Form.Label className='text-light text-center fw-bold' as={Col}><h3>Personal-Info</h3></Form.Label>
                <Row className="justify-content-center">
                    <Form.Group as={Col} md="3" controlId="validationCustom01">
                        <Form.Label className='text-light'>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label className='text-light'>Username</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustomUsername">
                        <Form.Label className='text-light'>Email</Form.Label>
                        <InputGroup>
                            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Enter Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                aria-describedby="inputGroupPrepend"
                            />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <br />
                <Row className='justify-content-center'>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label className='text-light'>Phone Number</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <br />
                <div className='line'></div>
                <br />
                <br />
                <Form.Label className='text-light text-center fw-bold' as={Col}><h3>Address-Info</h3></Form.Label>
                <br />
                <Row className='justify-content-center'>
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label className='text-light'>Street</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Street"
                            required
                            name="address.street"
                            value={formData.address.street}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom03">
                        <Form.Label className='text-light'>City</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="City"
                            required
                            name="address.city"
                            value={formData.address.city}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom04">
                        <Form.Label className='text-light'>State</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="State"
                            required
                            name="address.state"
                            value={formData.address.state}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="validationCustom05">
                        <Form.Label className='text-light'>Zip</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Zip"
                            required
                            name="address.zip"
                            value={formData.address.zip}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <br />
                <Row className='justify-content-center mb-3'>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label className='text-light'>Latitude</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Latitude"
                            name="address.geo.lat"
                            value={formData.address.geo.lat}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label className='text-light'>Longitude</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Longitude"
                            name="address.geo.lng"
                            value={formData.address.geo.lng}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <br />
                <div className='line'></div>
                <br />
                <br />
                <Form.Label className='text-light text-center fw-bold' as={Col}><h3>Office-Info</h3></Form.Label>
                <br />
                <Row className='justify-content-center'>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label className='text-light'>Website</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="5" controlId="validationCustom02">
                        <Form.Label className='text-light'>Company Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Company Name"
                            name="company.name"
                            value={formData.company.name}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <br />
                <Row className='justify-content-center'>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label className='text-light'>Catch Phrase</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Catch Phrase"
                            name="company.catch_phrase"
                            value={formData.company.catch_phrase}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="validationCustom02">
                        <Form.Label className='text-light'>Business BS</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Business BS"
                            name="company.bs"
                            value={formData.company.bs}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <br />
                <Row className='justify-content-center text-center'>
                    <Button variant="primary" type="submit" as={Col} md="1" onClick={(e) => handleSubmit(e)}>Submit</Button>
                </Row>
                <br />
            </Form>
        </>
    );
}

export default EditUserComponent;
