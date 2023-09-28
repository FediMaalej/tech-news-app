const {Article} = require('../database/connction')

/* ARTICLE CRUD OPERATON */

module.exports = {

    createArticle: async (req, res) => {
        try {
            const newArticle = await Article.create(req.body);
            res.status(201).send(newArticle);
        } catch (error) {
            throw error
        }
    },

    readArticle: async (req, res) => {
        try {
            const articles = await Article.findAll();
            res.json(articles);
        } catch (error) {
            throw error
        }
    },

    updateArticle: async (req, res) => {
        try {
            const article = await Article.findByPk(req.params.id);
            await article.update(req.body);
            res.status(202).send(article);
        } catch (error) {
            throw error
        }
    },

    deleteArticle: async (req, res) => {
        try {
            const article = await Article.findByPk(req.params.id);
            await article.destroy();
            res.json({ message: 'Article deleted successfully' });
        } catch (error) {
            throw error
        }
    },

    deleteAllArticle: async (req, res) => {
        try {
            const deleteAll = await Article.truncate()
            res.json(deleteAll)
        } catch (error) {
            throw error
        }
    }

};
