import { ContainerProduct, Category, SizeButton, ButtonWrapper, SelectSizeTitle, SelectColorTitle, ColorWrapper } from "./ShowCaseItem.styled"; 
import { Gallery } from "../Gallery/Gallery"; 
import CategoriesServices from "../../../services/categories.service";
import { useEffect, useState } from "react"; 


export default function ShowCaseItem({name, beloning, size, price, description, photos, colors}) {
     
    
    const [category, setCategory] = useState([]) 
    const [show, setShow] = useState(false) 
    
     let categoryService = new CategoriesServices() 

      
     const getCategories = async () => {
         
     }

}