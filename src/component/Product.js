import React, { useState, useEffect } from 'react';
import Data from '../Data.json';
import Navbar from './Navbar';
import ProductList from './ProductList';
import AddToCard from './AddToCard';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    itemsContainer: {
        margin: '20px auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: 50,
        [theme.breakpoints.down("sm")]: {
            padding: 20,
          },
    }
}));
const Product = () => {
    const classes = useStyles()
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        setProductData(Data.products.data)
    }, [productData])
    return (
        <>
            <Navbar />
            <AddToCard />
            <div className={classes.itemsContainer}>
                {
                    productData.map((item) => {
                        return <ProductList img_title={item.cat_name} item_img={item.item_image} name={item.name} price={item.price} mrp={item.mrp} key={item.id} />
                    })
                }
            </div>
        </>
    )
}

export default Product
