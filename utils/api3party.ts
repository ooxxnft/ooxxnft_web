import { APIAccountNFT } from 'types/constants'
import contractAddress from "../contracts/contract-address.json";

export async function fetchAccountNFT(account: any, page: number = 1, offset: number = 100) {

    const apiUrl = `${APIAccountNFT}&contractaddress=${contractAddress.OOXXNFT}&address=${account}&page=${page}&offset=${offset}&sort=asc`;
    const result = await fetch(apiUrl).then(res => {
        return res.json();
    });
    console.log("fetchAccountNFT result:", result);
}