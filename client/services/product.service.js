import axios from 'axios';
class ProductsService {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/products`,
            withCredentials: true
        })
    }

    getProducts = () => this.instance.get("/")
    createProduct = (form) => this.instance.post("/new", form)


}

export default ProductsService;                                                 
 


