import axios from 'axios'

class CategoriesServices {
    constructor() {
        this.instance = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/category`
        })
    }
    getCategories = () => this.instance.get('/')
    getCategoryById = (id) => this.instance.get(`/${id}`)
}


export default CategoriesServices; 