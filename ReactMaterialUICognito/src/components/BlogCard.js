import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const BlogCard = (props) => {
    let data = Array.from(props.blogs)
  return (
    <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
        {data.map((value, index) => ( console.log(data)
        // <Card sx={{ maxWidth: 345 }}>
        // <CardMedia
        //     sx={{ height: 140 }}
        //     image="/static/images/cards/contemplative-reptile.jpg"
        //     title="green iguana"/>
        //     <CardContent>
        //     <Typography gutterBottom variant="h5" component="div">
        //         {value.title}
        //     </Typography>
        //     <Typography variant="body2" color="text.secondary">
        //         {value.title}
        //     </Typography>
        //     </CardContent>
        //     <CardActions>
        //     <Button variant="contained" color="secondary" size="small">Update Blog</Button>
        //     <Button variant="contained" color="error" size="small">Delete Blog</Button>
        // </CardActions>   
        // </Card>
        ))}
    </Grid>
    </Grid>
  );
}

export default BlogCard