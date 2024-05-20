

export type menuItemsTypes = {
    id : number
    name : string
    price : number
}

export type orderType = menuItemsTypes & {
    quantity : number
}