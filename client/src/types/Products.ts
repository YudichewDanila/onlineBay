interface Products {
    products: {
        id: number,
        ImgProducts: string,
        NameProduct: string,
        DescriptionProduct: string,
        CountProducts: number,
        IdUnderCategory:{
            id:number
        },
        PriceProducts: number,
        IdManufacturers: {
            id:number
        },
},
users?:any

}

export default Products;