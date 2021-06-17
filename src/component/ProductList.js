import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { AddItemCradAuth } from '../context/ContextProvider';
const useStyles = makeStyles((theme) => ({
  root: {
    width:'-webkit-fill-available',
    maxWidth: 310,
    margin: 6,

  },
  media: {
    height: '300px',
    width: '-webkit-fill-available',
    margin:'auto'
  },
}));

const ProductList = (props) => {
  const classes = useStyles();
  const { AddHandler } = AddItemCradAuth()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {
          props.item_img ? <CardMedia
            className={classes.media}
            image={props.item_img}
            title={props.img_title}
          />
            : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Price: {props?.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            MRP: {props?.mrp}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" color="primary"
          onClick={() => AddHandler({
            img: props?.item_img,
            name: props?.name,
            price: props?.price
          })}>

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