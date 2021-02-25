import React, {useRef,useState} from 'react'
import {Card, Button, Form, Alert} from "react-bootstrap"
import {useAuth} from '../contexts/AuthContext'
import {Link,useHistory} from 'react-router-dom'

function Login() {

const emailRef = useRef()
const passwordRef = useRef()
const {login} = useAuth()
const [error,setError]= useState('')
const [loading,setLoading]= useState(false)
const history= useHistory()
async function handleSubmit(event){
    event.preventDefault()

try {
    setError('')
    setLoading(true)
  await login(emailRef.current.value, passwordRef.current.value)
  history.push("/")
}catch{
    setError("Failed to Sign In")
}

setLoading(false)   
}

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form>
<Form.Group id="email">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" ref={emailRef} required />
</Form.Group>
<Form.Group id="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" ref={passwordRef} required />
</Form.Group>
</Form>
<Button disabled={loading} onClick={handleSubmit} className="w-100" type="submit">Log In</Button>

                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
              Create an Account? <Link to="/signup">SignUp</Link>  
            </div>
            </>
    )
}

export default Login
