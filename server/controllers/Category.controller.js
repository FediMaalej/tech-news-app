const {Category} = require('../database/connction')

/* CATEGORY CRUD OPERATON */

module.exports = {

    createCategory: async (req, res) => {
        try {
            const createCategory = await Category.create(req.body);
            res.status(201).send(createCategory)
        } catch (error) {
            throw error
        }
    },

    readCategory: async (req, res) => {
        try {
            const displayCategory = await Category.findAll();
            res.json(displayCategory)
        } catch (error) {
            throw error
        }
    },

    updateCategory: async (req, res) => {
        try {
            const id = req.params.id
            const updateCategory = await Category.update(req.body, {where: {id: id}});
            res.status(202).send(updateCategory)
        } catch (error) {
            throw error
        }
    },

    deleteCategory: async (req, res) => {
        try {
            const id = req.params.id
            const deleteCategory = await Category.destroy({where: {id: id}});
            res.json(deleteCategory)
        } catch (error) {
            throw error
        }
    }

}
