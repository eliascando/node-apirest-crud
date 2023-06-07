export const queries = {
    getAllProduct : 'SELECT * FROM Products',
    createProduct : 'INSERT INTO Products(name, description, stock) VALUES(@name, @description, @stock)',
    getProductById : 'SELECT * FROM Products WHERE Id = @Id',
    deleteProduct : 'DELETE FROM Products WHERE Id = @Id',
    getTotalProduct : 'SELECT COUNT(*) FROM Products',
    updateProductById: 'UPDATE Products SET Name = @name, Description = @description, Stock = @stock WHERE Id = @id'
}