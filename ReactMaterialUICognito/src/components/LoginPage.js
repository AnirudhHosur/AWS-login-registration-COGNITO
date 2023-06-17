import { Box, Button, Container, FormControl, FormGroup, Grid, Input, InputLabel } from "@mui/material";
import { makeStyles } from '@mui/styles';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
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

function LoginPage() {

    const classes = useStyle();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        });

        const authDetails = new AuthenticationDetails({
            Username: email,
            Password: password
        });

        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                console.log("onSuccess: ", data)
            }, 
            onFailure: (err) => {
                console.log("onFailure: ", err)
            },
            newPasswordRequired: (data) => {
                console.log("newPasswordRequired: ", data)
            }
        })
    }

    return(
        <Box>
            <Grid container justifyContent="center">
                <FormGroup className={classes.formStyle}>
                <h1>Login please</h1>
                    <FormControl>
                        <InputLabel>Email</InputLabel>
                        <Input value={email} onChange={(event) => setEmail(event.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input value={password} onChange={(event) => setPassword(event.target.value)}/>
                    </FormControl>
                    <Button onClick={handleSubmit} variant="contained" color="secondary" className={classes.btn}>
                        Login
                    </Button>
                    <Link to="/register">
                    <Button variant="text">Not Registered? Register here</Button>
                    </Link>
                </FormGroup>
            </Grid>
        </Box>
    )
}

export default LoginPage;