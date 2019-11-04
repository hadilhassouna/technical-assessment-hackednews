var express = require('express');
// var storyController = require('../../db/controllers/story.js');
var router = require('express').Router();
// const topTen = require('./topten.model.js');

router.route('/')
  .get(function (_req, res) {
    topTen.find(function(err, topTen) {
      if (err) {
        console.log(err);
      } else {
        res.json(topTen);
      }
    });
    //  TODO: Replace this with stories you've retrieved from the database
    //  res.json([
    //    {
    //      author: 'ocdtrekkie',
    //      title: 'Switch – New Video Game System [video]',
    //      score: 536
    //    },
    //    {
    //      author: 'mhb',
    //      title: 'Video Games Are Changing the Way Soccer Is Played',
    //      score: 100
    //    }
    //  ]);
  });

// Here we use express's route params
router.route('/:id')
  .get(function(req, res) {
    let id = req.params.id;
    topTen.findById(id, function(_err, topTen) {
      res.json(topTen);
    });
  });

module.exports = router;
