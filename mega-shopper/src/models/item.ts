export type ItemType = {
    id: number,
    title: string,
    desc: string,
    price: number, // typescript only has a number type, not dec. 
    categoryId: number,
    img: string
}