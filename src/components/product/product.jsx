import React, { useEffect } from 'react'
import Img1 from '../../assets/1st.jpg'
import Img2 from '../../assets/2sed.jpg'
import Img3 from '../../assets/3th.jpg'
import Img4 from '../../assets//4th.jpg'
import { Box, Card, Snackbar, SnackbarContent, Typography } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Divider from '@mui/material/Divider';
import { useState } from 'react'


const product = [
    {
        id: 1,
        img: Img1,
        name: 'Product 1',
        price: 10
    },
    {
        id: 2,
        img: Img2,
        name: 'Product 2',
        price: 10
    },
    {
        id: 3,
        img: Img3,
        name: 'Product 3',
        price: 10
    },
    {
        id: 4,
        img: Img4,
        name: 'Product 4',
        price: 10
    },




]



function Product() {
    
    let [cartList, setCartList] = useState([]);
    console.log(cartList);

    const [openAlert, setOpenAlert] = useState(false);

    const cartHandler = (item) => {
        const isExist = cartList.find((product) => product.id === item.id);

        if (!isExist) {
            setCartList((prev) => [...prev, item]);
        } else {
            setOpenAlert(true);
        }
    };

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpenAlert(false);
    };

    useEffect(() => {
        let localItems = localStorage.getItem("cartItem");

        if (cartList.length > 0) {
            let strCartItems = JSON.stringify(cartList);
            localStorage.setItem("cartItem", strCartItems);
        }
    }, [cartList]);
    return (
        <>

            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={openAlert}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <SnackbarContent
                    style={{ backgroundColor: "#bb2124" }}
                    message={
                        <span id="client-snackbar">
                            This product already exists
                        </span>
                    }
                ></SnackbarContent>


            </Snackbar >

            <Box className="d-flex justify-content-around mt-5">
                {product?.map((items, ind) => {
                    return (
                        <Box key={ind}>
                            <Card sx={{ maxWidth: 345, padding: '20px 0px' }}>
                                <img width={350} src={items.img} alt="" srcset="" />
                                <Box>
                                    <Typography variant='h5'>{items.name}</Typography>
                                    <Typography variant='h5'>{items.price}</Typography>

                                </Box>
                                <Divider className='border border-black' />
                                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>

                                    <ShareIcon />
                                    <FavoriteBorderIcon />
                                    <ShoppingCartIcon onClick={()=> cartHandler(items)} />
                                </Box>

                            </Card>
                        </Box>

                    )
                })}
            </Box>
        </>
    );
};

export default Product