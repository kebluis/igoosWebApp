import express from 'express';
import { cartSchema, menuSchema} from '../model/serviceSchema.js';

const app = express();
const router = express.Router();

router.route('/menu').get( async(req, res) => {
    try {
        const data = await menuSchema.find(); 
        res.json(data);
    } catch (error) {
        console.log(error);
    }
});

router.route('/cart').get( async(req, res) => {
    try {
        const data = await cartSchema.find();
        res.json(data);
    } catch (error) {
        console.log(error); 
    }
});

export default router;