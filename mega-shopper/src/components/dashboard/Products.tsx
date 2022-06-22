import React from 'react';
import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';

const ProductFilter = (props) => (<Filter {...props}>
    <SearchInput placeholder='Product ID' source='item_id'
    resettable alwaysOn />
</Filter>)

function Products(props){
return(
     <List {...props} filters={ProductFilter}>
        <Datagrid>
            <TextField source='item_id'/>
            <TextField source='title'/>
            <TextField source='description'/>
            <TextField source='price'/>
            <TextField source='category_id'/>
        </Datagrid>

     </List>
    
  );

}

export default Products;