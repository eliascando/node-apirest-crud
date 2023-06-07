import {getConnection, sql, queries} from '../database';

export const getProducts = async(req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllProduct)

        res.status(200).json(result.recordset);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

export const createProduct = async(req, res) => {
    const {name, description, stock} = req.body

    if(name == null || description == null || stock == null){
        return res.status(400).json({msg: "Bad Request, please fill all fields"})
    }
    
    try{
        const pool = await getConnection();

        await pool
            .request()
            .input('name', sql.VarChar , name)
            .input('description', sql.Text, description)
            .input('stock', sql.Int, stock)
            .query(queries.createProduct);

        res.status(201).json({name, description, stock})
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const getProductById = async(req, res) => {
    const {id} = req.params;

    try{
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('id',sql.Int, id)
            .query(queries.getProductById)

        res.send(result.recordset[0])
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const deleteProductById = async(req, res) => {
    const {id} = req.params;
    try{
        const pool = await getConnection()
        const result = await pool
            .request()
            .input('id',sql.Int, id)
            .query(queries.deleteProduct)
    
        res.status(204);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const countTotalProducts = async(req, res) => {
    try{
        const pool = await getConnection()
        const result = await pool
            .request()
            .query(queries.getTotalProduct) 
        
        console.log(result)
        res.status(200);
        res.json(result.recordset[0][''])
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

export const updateProductById = async(req, res) => {
    const {name, description, stock} = req.body;
    const {id} = req.params;

    if(name == null || description == null || stock == null){
        return res.status(400).json({msg: "Bad Request, please fill all fields"})
    }
    
    try{
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('name', sql.VarChar, name)
            .input('description', sql.Text, description)
            .input('stock',sql.Int, stock)
            .input('id',sql.Int, id)
            .query(queries.updateProductById)
            
        res.json({name, description, stock})
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}