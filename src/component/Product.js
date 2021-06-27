import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchCompo from "./SearchCompo";
import SearchAuth from '../context/ContextProvider';
import ItemsList from './ItemsList';
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
    const { items, productData } = SearchAuth()
    const [udateData, setUpdateData] = useState([]);

    useEffect(() => {
        setUpdateData([])
        productData.filter(val => {
            if (val.name.toLowerCase().includes(items.toLowerCase())) {
                setUpdateData([...udateData, val])
            }
        })
    }, [items])
    return (
        <>
            <SearchCompo />
            <div className={classes.itemsContainer}>
                {
                    udateData?.map((item, index) => {
                        return <ItemsList img_title={item.cat_name} item_img={item.item_image} name={item.name} price={item.price} mrp={item.mrp} key={index} />
                    })
                }
            </div>
        </>
    )
}

export default Product