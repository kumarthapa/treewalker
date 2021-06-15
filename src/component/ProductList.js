import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth:445,
    margin:6,
  },
  media: {
    height: '300px',
    width: '300px',
  },
});

const ProductList=(props)=> {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.item_img}
          title={props.img_title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {props.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            MRP: {props.mrp}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary">
          Add
        </Button>
        <Button size="small" color="primary">
          More details
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProductList;