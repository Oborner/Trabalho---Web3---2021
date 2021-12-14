const express = require ('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

// teste: http://localhost:5000/api/teste
router.get('/teste', apiController.test);

//Listar todos os usuários ou um específico
router.get('/usuario/:nome',apiController.busca);
router.get('/usuario',apiController.listar);

//Adicionar novo usuário
router.post('/usuario',apiController.create);

//Atualizar usuário
router.put('/usuario/:id',apiController.update);

//Deletar usuário
router.delete('/usuario/:id',apiController.delete);

module.exports = router;