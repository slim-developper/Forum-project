import React from 'react'
import { Button} from "@material-ui/core/";
import useStyles from './styles.js';

const show = () => {
    return (
        <div>
         
         <Button   variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
             
             
        </div>
    )
}

export default show










/*import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from '../Posts/Post/Post.js';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  return (
    
      <Grid container >
        {posts.map((post) => (
          <Grid key={post._id} >
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    
  );
};

export default Posts; */