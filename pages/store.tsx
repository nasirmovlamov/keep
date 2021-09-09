import axios from 'axios'
import React, { ReactElement, useEffect, useState } from 'react'
import ListingStoreProduct from '../components/ListingStoreProduct'
import PageTabs from '../components/PageTabs'
import { StorePage } from '../styles/global/styled-utils/styling-elements/Pages.style'

interface Props {
    
}

function Store({}: Props): ReactElement {
    const [storeListingProducts, setstoreListingProducts] = useState([])

    const getStoreProducts = async () => {
        try {
            const response = await axios.get("https://610685e81f34870017437966.mockapi.io/store")
            setstoreListingProducts(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    
    useEffect(() => {
        getStoreProducts()
    }, [])

    return (
        <StorePage>
            <PageTabs/>  
            {storeListingProducts.map(element => <ListingStoreProduct data={element}/>)} 
        </StorePage>
    )
}

export default Store
