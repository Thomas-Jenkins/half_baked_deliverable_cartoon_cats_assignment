const { Router } = require('express');
const { cats } = require('../cats-data');


module.exports = Router()

  .get('/', (req, res) => {
    const catList = cats.map((cat) => {
      return { id: cat.id, name: cat.name };
    });
    res.json(catList);
  })

  .get('/:id', (req, res) => {
    const filteredCatList = cats.map((cat) => {
      if (cat.id === req.params.id) {
        return cat;
      }
    });
    res.json(filteredCatList[0]);
  });

