import { Box, Button, Container, FormControl, FormGroup, Grid, Input, InputLabel } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserPool from "../awsConfig/UserPool";

const useStyle = makeStyles({
    formStyle: {
        width: '50%',
        margin: "auto",
        padding: 30,
        paddingTop: 20,
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)"
    },
    btn: {
        marginTop: "40px",
    }
})

function RegisterPage() {

    const classes = useStyle();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        UserPool.signUp(email, password, [], null, (err, data) => {
            if(err) {
                alert(err);
            }
            alert('Registration Successful!')
        })
    }

    return(
        <Box>
            <Grid container justifyContent="center">
                <FormGroup className={classes.formStyle}>
                <h1>Register Here</h1>
                    <FormControl>
                        <InputLabel>Email</InputLabel>
                        <Input value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </FormControl>
                    <Button onClick={handleSubmit} variant="contained" color="secondary" className={classes.btn}>
                        Register
                    </Button>
                    <Link to="/login">
                    <Button variant="text">Already Registered? Login in</Button>
                    </Link>
                </FormGroup>
            </Grid>
        </Box>
    )
}

export default RegisterPage;