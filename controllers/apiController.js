const PI = require('../models/PImodel');

//Teste
exports.test = function (req, res) {
  res.send('Olá! Teste');
};

//Listar todos os usuários ou um específico
exports.listar = function (req, res) {
  try {
    PI.find(req.body).then(function (pi) {
      res.send(pi);
    });
  }
  catch (error) {
    res.send(`Erro: ${error}`);
  }
};

//Adicionar novo usuário
exports.create = function (req, res, next) {
  try {
    PI.create(req.body).then(function (pi) {
      res.send(pi);
    }).catch(next);
  }
  catch (error) {
    res.send(`Erro: ${error}`);
  }
};

//Update num usuário
exports.update = function (req, res, next) {
  try {
    PI.findByIdAndUpdate({ _id: req.params.id },
      req.body).then(function () {
        PI.findOne({ _id: req.params.id }).then(function (pi) {
          res.send(pi);
        });
      }).catch(next);
  }
  catch (error) {
    res.send(`Erro: ${error}`);
  }
};

//deletar um usuário
exports.delete = function (req, res, next) {
  try {
    PI.findByIdAndRemove({ _id: req.params.id }).then(function (pi) {
      res.send(pi);
    }).catch(next);
  }
  catch (error) {
    res.send(`Erro: ${error}`);
  }
};

//realiza a busca por um nome específico
exports.busca = function (req, res) {
  try {
  PI.find({nome: req.params.nome}).then(function (pi) {
      res.send(pi);
    });
  }
  catch (error) {
    res.send(`Erro: ${error}`);
  }
};