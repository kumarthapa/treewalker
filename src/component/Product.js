import React, { useState, useEffect } from 'react';
import Data from '../Data.json';
import { makeStyles } from '@material-ui/core/styles';
import SearchCompo from "./SearchCompo";
import SearchAuth from '../context/ContextProvider';
import ItemsList from './ItemsList'
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
    const {items} = SearchAuth()
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        setProductData(Data.products.data)
    }, [productData])
    //console.log(productData)
    return (
        <>
            <SearchCompo />
            <div className={classes.itemsContainer}>
                {
                    productData?.map((item) => {
                        return (items==item.name)?<ItemsList img_title={item.cat_name} item_img={item.item_image} name={item.name} price={item.price} mrp={item.mrp} key={item.id} />:console.log(item.name)
                    })
                }
            </div>
        </>
    )
}

export default Product
