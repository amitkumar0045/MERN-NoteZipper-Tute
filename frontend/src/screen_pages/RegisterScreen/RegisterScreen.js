import React, { useState } from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
import ErrorMessage from '../../components/ErrorMessage'
import Loading from '../../components/Loading'
import axios from 'axios'

const RegisterScreen = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [pic, setPic] = useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [picMessage, setPicMessage] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);


    const submitHandler = async (e) => {
        e.preventDefault();
        // console.log(email);
        if (password !== confirmPassword) {
            setMessage('Password Do Not Match !!');
        } else {
            setMessage(null)
            try {
                const config = {
                    headers: {
                        "Content-type": "application/json"
                    },
                };

                setLoading(true);

                const { data } = await axios.post("/api/users",
                    { name, pic, email, password },
                    config
                );

                console.log(data);
                setLoading(false);
                localStorage.setItem("userInfo", JSON.stringify(data));
            } catch (error) {
                setError(error.response.data.message);
            }
        }
    }

    // >> using CLOUDNARY for image store >> https://cloudinary.com/
    const postDetails = (pics) => {
        if (pics === "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg") {
            return setPicMessage("Please Select an Image");
        }
        setPicMessage(null);
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "notezipper");
            data.append("cloud_name", "amittaraya");
            fetch("https://api.cloudinary.com/v1_1/amittaraya/image/upload", {
                method: "post",
                body: data,
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("picData>>", data);
                    setPic(data.url.toString());
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            return setPicMessage("Please Select an Image");
        }
    };

    return (
        <MainScreen title="REGISTER" >
            <div className="loginContainer">
                {/* // */}
                {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
                {message && <ErrorMessage variant="danger" >{message}</ErrorMessage>}
                {loading && <Loading />}
                {/* // */}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="name"
                            value={name}
                            placeholder="Enter name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            value={email}
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>

                    {picMessage && (<ErrorMessage variant="danger">{picMessage}</ErrorMessage>)}
                    <Form.Group controlId="pic">
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.File
                            onChange={(e) => postDetails(e.target.files[0])}
                            id="custom-file"
                            type="image/png"
                            label="Upload Profile Picture"
                            custom
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

                <Row className="py-3">
                    <Col>
                        Have an Account ? <Link to="/login">Login</Link>
                    </Col>
                </Row>

            </div>
        </MainScreen>
    )
}

export default RegisterScreen
