import mongoose from 'mongoose';

const Schema = mongoose.Schema;



class serviceSchema {
    constructor(model) {
        this.model = model;
    }

    getData = () => {
    return mongoose.model(this.model, new Schema({}), this.model);
    }
}

const menuSchema = new serviceSchema("menus").getData();
const cartSchema = new serviceSchema("cart").getData(); 

export {
    menuSchema,
    cartSchema,
} 
