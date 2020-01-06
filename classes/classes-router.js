const router = require('express').Router();

const Classes = require('../users/users-model');
const restricted = require('../auth/authenticate-middleware');

// GET - classes    >>    Working
router.get('/', restricted, (req, res) => {
  Classes.getClasses()
    .then(classes => {
      res.status(200)
        .json(classes);
    })
    .catch(err => {
      console.log('Error with classes GET', err)
      res.status(500)
        .json({ message: 'Could get retrieve classes' })
    });
});

// POST - classes    >>    1/2 Working
//              *** Working but gives wrong status code and message ***
router.post('/', restricted, (req, res) => {
  const classData = req.body;
  console.log(req.body);
  Classes.addClass(classData)
    .then(newClass => {
      if (newClass) {
        res.status(201)
          .json(newClass)
      } else {
        res.status(404)
          .json({ message: 'Please provide required information' })
      }
    })
    .catch(err => {
      console.log('Error posting new class POST', err)
      res.status(500)
        .json({ message: 'Failed to add new class' })
    })
});

// PUT - classes    >>    Working
router.put('/:id', restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Classes.getByIdClasses(id)
    .then(findClass => {
      if (findClass) {
        Classes.editClass(changes, id)
          .then(updatedClass => {
            res.json(updatedClass)
          })
      } else {
        res.status(404)
          .json({ message: 'Could not find class with given id' })
      }
    })
    .catch(err => {
      console.log('Error updating class PUT', err)
      res.status(500)
        .json({ message: 'Failed to update class information' })
    })
});

// DELETE - classes    >>    Working
router.delete('/:id', restricted, (req, res) => {
  const { id } = req.params;

  Classes.deleteClass(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted })
      } else {
        res.status(404)
          .json({ message: 'Could not find class with the given id' })
      }
    })
    .catch(err => {
      console.log('Error deleting class DELETE', err)
      res.status(500)
        .json({ message: 'Failed to delete class' })
    })
});

module.exports = router;