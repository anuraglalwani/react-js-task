import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: "#FFEBC9"
  },
  inline: {
    display: 'inline',
  },
}));

export default function AlignItemsList(props) {
 // using props to show data in list format
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={props.image} />
        </ListItemAvatar>
        <ListItemText
          primary={props.provider}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
               {props.title} <br/>
              </Typography>
              {props.datePublished}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      
      
    </List>
  );
}
