var Todos = require('../models/todoModel');
module.exports = function(app) {

  app.get('/api/setupTodos', function (req, res) {

    var starterTodos = [
      {
        username: "zhibin",
        todo: "have lunch",
        isDone: false,
        hasAttachment: false
      },
      {
        username: "zhibin",
        todo: "have dinner",
        isDone: false,
        hasAttachment: false
      }

    ]

    Todos.create(starterTodos, function(err, results) {
      res.send(results);
    });
  });



}
