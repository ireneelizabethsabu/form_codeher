import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  const [student,setStudent] = useState({
    name: "",
    college: "",
    passingyear: "",
    email: "",
    phonenumber: "",
  });
  const [valid,setValid] = useState({
    name: "",
    college: "",
    passingyear: "",
    email: "",
    phonenumber: "",
  }); 

  const validateState = () => {  
    let errors = {};
    let valid = true;
    

    if (!student["name"]) {
      valid = false;
      errors["name"] = "Please enter your username.";
    }

    if (typeof student["name"] !== "undefined") {
      if (!student["name"].match(/^[a-zA-Z ]*$/)) {
        valid = false;
        errors["name"] = "Please enter alphabet characters only.";
      }
    }

    if (!student["email"]) {
      valid = false;
      errors["email"] = "Please enter your email-ID.";
    }

    if (typeof student["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(student["email"])) {
        valid = false;
        errors["email"] = "Please enter valid email-ID.";
      }
    }
    
    if (!student["phonenumber"]) {
      valid = false;
      errors["phonenumber"] = "Please enter your mobile no.";
    }
  
    if (typeof student["phonenumber"] !== "undefined") {
      if (!student["phonenumber"].match(/^[0-9]{10}$/)) {
        valid = false;
        errors["phonenumber"] = "Please enter valid mobile no.";
      }
    }

    if (!student["passingyear"]) {
      valid = false;
      errors["passingyear"] = "Please enter passing year";
    }
  
    if (typeof student["passingyear"] !== "undefined") {
      if (!student["passingyear"].match(/^[2-9][0-9]{4}$/)) {
        valid = false;
        errors["passingyear"] = "Please enter valid passing year";
      }
    }
    
    setValid(errors);
    return valid;
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();

    if(validateState()){
      setStudent({
        name: "",
        college: "",
        passingyear: "",
        email: "",
        phonenumber: "",
      });
      setValid({
        name: "",
        college: "",
        passingyear: "",
        email: "",
        phonenumber: "",
      })
      alert('Form submitted');
    }

  }
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });    
  }

  return (
    <div className="container min-vh-100 p-5">
      <div className="p-5 inner-container ">
        <h4 className="text-center mb-5">Register here to avail student discount</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control type="text" name="name" placeholder="Name" value={student.name} onChange={handleChange} required/>
            <Form.Text className="error">
              {valid.name}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control type="text" name="college" placeholder="College Name" value={student.college} onChange={handleChange} required/>
            <Form.Text className="error" >
              {valid.college}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control type="text" name="passingyear" placeholder="Year Of Passing" value={student.passingyear} onChange={handleChange} required/>
            <Form.Text className="error" >
              {valid.passingyear}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            
            <Form.Control type="email" name="email" placeholder="Enter email" value={student.email} onChange={handleChange} />
            <Form.Text className="error">
              {valid.email}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control type="text" name="phonenumber" placeholder="Phone Number" value={student.phonenumber} onChange={handleChange} />
            <Form.Text className="error">
              {valid.phonenumber}
            </Form.Text>
          </Form.Group>
         
          <Button variant="primary" type="submit" className="mb-3 w-100" disabled={valid.formValid}>
            Sign Up
          </Button>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Text >
              Already a member? <a href="/">Sign in</a>
            </Form.Text>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Home;
