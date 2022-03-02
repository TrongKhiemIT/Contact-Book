module.exports = {
    create: async (req, res) => {
        res.send({ message: "create handler"});
    },
    
    findAll: async (req, res) => {
        res.send({ message: "findAll handler"});
    },

    findOne: async (req, res) => {
        res.send({ message: "findOne handler"});
    },

    update: async (req, res) => {
        res.send({ message: "update handler"});
    },

    delete: async (req, res) => {
        res.send({ message: "delete handler"});
    },

    deleteAll: async (req, res) => {
        res.send({ message: "deleteAll handler"});
    },

    findAllFavorite: async (req, res) => {
        res.send({ message: "findAllFavorite handler"});
    },
};
