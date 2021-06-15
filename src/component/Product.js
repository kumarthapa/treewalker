import React, {useState, useEffect} from 'react';
import Data from '../Data.json';
import Navbar from './Navbar';
import ProductList from './ProductList';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    itemsContainer: {
     margin:'20px auto',
     display:'flex',
     flexWrap:'wrap',
     justifyContent:'space-around',
     padding:50,
    }
  });
const Product = () => {
   const classes = useStyles()
    const [productData, setProductData] = useState([]);
    useEffect(() => {
        setProductData(Data.products.data)
    }, [productData])
    return (
        <>
        <Navbar/>
        <div className={classes.itemsContainer}>
        {
            productData.map((item)=>{
                return <ProductList  img_title={item.cat_name}item_img={item.item_image} name={item.name} price={item.price} mrp={item.mrp} key={item.id}/>
            })
        }
        </div>
        </>
    )
}

export default Product
