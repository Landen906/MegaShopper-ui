import { Navigate } from "react-router-dom";
import { User } from "../../models/user";

import { ItemType } from "../../models/item";
import { ReactElement } from "react";
import { AnyRecord } from "dns";
import { createInterface } from "readline";
const items: Array<ItemType> = [
	{
		id: 1,
		title: "Testing",
		desc: "Test description",
		price: 1.99,
		categoryId: 1,
		img: "https://media.discordapp.net/attachments/535920055121346563/989735250206797824/20220623_223411.jpg",
	},
	{
		id: 2,
		title: "Testing",
		desc: "Test description",
		price: 1.99,
		categoryId: 1,
		img: "https://media.discordapp.net/attachments/535920055121346563/989735250206797824/20220623_223411.jpg",
	},
	{
		id: 3,
		title: "Testing",
		desc: "Test description",
		price: 1.99,
		categoryId: 1,
		img: "https://media.discordapp.net/attachments/535920055121346563/989735250206797824/20220623_223411.jpg",
	},
];
// const ItemFilter = (props: any) => (
// 	<Filter {...props}>
// 		<SearchInput
// 			placeholder="Search items..."
// 			source="title"
// 			resettable
// 			alwaysOn
// 		></SearchInput>
// 	</Filter>
// ); // would it make sense to use the item title?

// TO-DO: add functions pulling from the api
function Cart() {
	//to-do: put this in the props

	const cartItem = items.map((item) => {
		
        return <li className="collection-item avatar" key={item.id}>
			<div className="image">
				<img src={item.img}></img>
			</div>
			<div className="description">
				<p>{item.title}</p>
				<p>{item.desc}</p>
				<p>Price: {item.price}</p>
			</div>
		</li>
	});
    return (<div>{cartItem}</div>);     
}

export default Cart;
