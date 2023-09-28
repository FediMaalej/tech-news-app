const {Users} = require('../database/connction')

/* USERS CRUD OPERATON */

module.exports = {

    createUser: async (req, res) => {
        try {
            const createUser = await Users.create(req.body);
            res.status(201).send(createUser)
        } catch (error) {
            throw error
        }
    },

    readUser: async (req, res) => {
        try {
            const displayUsers = await Users.findAll();
            res.json(displayUsers)
        } catch (error) {
            throw error
        }
    },

    updateUser: async (req, res) => {
        try {
            const id = req.params.id
            const updateUser = await Users.update(req.body, {where: {id: id}});
            res.status(202).send(updateUser)
        } catch (error) {
            throw error
        }
    },

    deleteUser: async (req, res) => {
        try {
            const id = req.params.id
            const deleteUser = await Users.destroy({where: {id: id}});
            res.json(deleteUser)
        } catch (error) {
            throw error
        }
    }

}