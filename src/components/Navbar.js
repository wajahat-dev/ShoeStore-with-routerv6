import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar, 
    Toolbar,
    Typography,
    Button
    } from "@material-ui/core/";
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Shoe Store
          </Typography>
          <Button color="inherit"><Link to="/">Home</Link></Button>
          <Button color="inherit"><Link to="/launch">launch</Link></Button>
          <Button color="inherit">Sample</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
