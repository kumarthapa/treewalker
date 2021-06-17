import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { AddItemCradAuth } from '../context/ContextProvider';

const useStyles = makeStyles({
  list: {
    width: 350,
  },
  fullList: {
    width: 'auto',
  },
  media: {
    height: '100px',
    width: '100px',
  },
  itemDetails: {
    width: '100%',
    display: 'flex',
    padding: 5,
    justifyContent: 'space-between'
  },
  cancleButton: {
    marginLeft: 10,

  }

});

export default function AddToCard() {
  const classes = useStyles();
  const { isopen, ItemListHandler, cardData, AddHandler, istrue } = AddItemCradAuth()
  const deleteHandler = () => {
    if (istrue) {
      AddHandler(null)
    }
  }
  return (
    <div>
      <>
        <SwipeableDrawer
          anchor={'right'}
          open={isopen}
          onClose={() => ItemListHandler(false)}
          onOpen={() => ItemListHandler(true)}
        >
          <List className={classes.list}>
            <ListItem className={classes.fullList}>
              <div>


                <div className={classes.itemDetails}>

                  <p>{cardData?.name}</p>
                  <CardMedia
                    className={classes.media}
                    image={cardData?.img}
                    title="image title"
                  />
                </div>
                <hr />
                <div className={classes.itemDetails}>
                  <p>Price:</p>
                  <p>{cardData?.price}</p>
                </div>
                <div className={classes.itemDetails}>
                  <p>Discount:</p>
                  <p>12%</p>
                </div>
                <hr />
                <div className={classes.itemDetails}>
                  <p>Total:</p>
                  <p>0</p>
                </div>



                <Button variant="contained" color="primary"
                  onClick={deleteHandler}>Continue</Button>
                <Button variant="contained" color="secondary"
                  onClick={deleteHandler} className={classes.cancleButton}>Cancle</Button>

              </div>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </>
    </div>
  );
}
