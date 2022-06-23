import { Navigate } from 'react-router-dom';
import { User } from '../../models/user';

import {List, Datagrid, TextField, Filter, SearchInput} from 'react-admin';

const ItemFilter = (props: any) => (
    <Filter {...props}>
        <SearchInput placeholder='Search items...' source='title' resettable alwaysOn>
        </SearchInput>
    </Filter>   
);  // would it make sense to use the item title? 

function Cart(props: any) {

    return(
        <div id='cartItems'>
            {
                <List {...props} filters={ItemFilter}>
                    <TextField source='title'></TextField>
                    <TextField source='description'></TextField>
                    <TextField source='price'></TextField>
                </List>
            }
        </div>
    );
}

export default Cart;