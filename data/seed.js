const { ObjectId } = require('mongodb');

class ProductsDAO {
    static async getAllProducts(client) {
        try {
            return await client.find().toArray();
        } catch (err) {
            console.error(err);
            return [];
        }
    }

    static async addProduct(client, product) {
        try {
            return await client.insertOne(product);
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    static async deleteProduct(client, id) {
        try {
            return await client.deleteOne({ _id: new ObjectId(id) });
        } catch (err) {
            console.error(err);
            return null;
        }
    }

    static async updateProduct(client, id, update) {
        try {
            return await client.updateOne(
                { _id: new ObjectId(id) },
                { $set: update }
            );
        } catch (err) {
            console.error(err);
            return null;
        }
    }
}

module.exports = ProductsDAO;
