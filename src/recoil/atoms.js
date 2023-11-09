import { atom } from "recoil"
import React from "react";

export const allProductState = atom({
    key:"allProductState",
    default: [],
});
export const productInHeartState = atom ({
    key:"Lovely",
    default: [],
})

export const setCartState = atom({
    key:"cart",
    default: [],
})
export const setCountState = atom({
    key:"setCountState",
    default: 0,
});