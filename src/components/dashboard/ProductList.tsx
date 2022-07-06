import { useContext, useEffect } from 'react';
import { useState } from 'react';
import useQuery from 'react-query';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalState';
import { ItemType } from '../../models/item';
// import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';
// import { Product } from './Product';

// const ProductFilter = (props: any) => (<Filter {...props}>
//     <SearchInput placeholder='Product ID' source='item_id'
//     resettable alwaysOn />
// </Filter>)
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function ProductList(){
    const {products} = useContext(GlobalContext)
    const productList = products.map(({id, title, desc, img}: ItemType) => (
        <Link key={id} to={`/product/${id}`}>
            <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image={img}
                alt={title}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">{desc}</Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </Link>
    ));
return(
    <div>
       {productList}
    </div>
  );

}

export default ProductList