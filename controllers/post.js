const mongoose = require('mongoose');
const Post = require('../models/post');

exports.add_post = (req,res,next) => {
  const post = new Post({
    desc: req.body.desc
  })
  post.save()
      .then(result=>{
        console.log(result);
        res.status(200).json({
          message:" post added to database ",
          data:result
        })
      })
      .catch(err=>{
        console.log(err);
        res.status(303).json(err)
      })
}
