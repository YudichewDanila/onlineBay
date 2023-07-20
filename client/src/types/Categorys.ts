interface Categorys {
    categorys: [{
        id: number,
        NameCategory: string,
    }],
    undercategorys?: [{
        id:number,
        NameUnderCategory: string,
        idCategory:{
            id:number
        }
    }],
    user?:any
}

export default Categorys;