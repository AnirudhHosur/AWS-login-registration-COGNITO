import React, { useEffect, useState } from "react";
import { makeStyles } from '@mui/styles';
import { Box, Button, Container, FormControl, FormGroup, Grid, Input, InputLabel } from "@mui/material";
import BlogCard from "./BlogCard";
import blogsData from "../dummyData";
import axios from "axios";

const useStyle = makeStyles({
    formStyle: {
        width: '70%',
        margin: "auto",
        padding: 30,
        paddingTop: 20,
        boxShadow: "0px 0px 10px rgba(0,0,0,0.5)"
    },
    btn: {
        marginTop: "40px",
    }
})

function HomePage() {

    const [userBlogs, setUserBlogs] = useState('');

    const classes = useStyle();

    //Create function to fetch all todo items from database -- we will use useEffect hook
    useEffect(()=>{
        const getItemsList = async () => {
        try{
            const res = await axios.get('https://tzmkqqksp9.execute-api.us-east-1.amazonaws.com/test/todos')
            var data = res.data.body
            setUserBlogs(data)
            console.log('render')
        }catch(err){
            console.log(err);
        }
        }
        getItemsList()
    },[]);

    return(
        <Box>
        <Grid container justifyContent="center">
            <FormGroup className={classes.formStyle}>
            <h1>Your Blogs</h1>
            <Button variant="contained" color="success">Add Post</Button>
            <BlogCard blogs={userBlogs} />
            </FormGroup>
        </Grid>
        </Box>
    )
}

export default HomePage;