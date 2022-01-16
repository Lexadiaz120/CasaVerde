import React, {useState, useEffect} from 'react'
import { ContainerProduct, Category, SizeButton, ButtonWrapper, SelectSizeTitle, SelectColorTitle, ColorWrapper }  from '../ShowCaseItem/ShowCaseItem.styled'
import ProductsService from '../../../services/product.service' 
import { ContainerShowcase } from './ShowCase.styled';
 


export const ShowCase = () => {
     
    const [productList, setProductList] = useState([]); 
    const productService = new ProductsService();

    const getProducts = () => {
        productService 
         .getProducts() 
         .then((products) => {
             setProductList(products?.data)
         }) 
         .catch((err) => console.log("Error retreiving products", err))
    }

    useEffect(() => {
        getProducts()
    }, [] ) 
   
     

    return(
        <ContainerShowcase>
            {
                productList ? (
                    productList?.map((product, index) => {
                    
                    })
                ): <p>Loading </p>
            }
        </ContainerShowcase>
    )





}