'use strict';
// CommentModel

function Comment(text, imageId) {
  this.id = this.constructor.all.length;
  this.text = text;
  this.imageId = imageId;
  this.constructor.all.push(this);
}

Comment.load = function() {
  Comment.defaults.map(function(comment){
    let newComment = new Comment(comment.text, comment.image)
  })
}

// used for creating the id.
Comment.all = [];

Comment.prototype.findImage = function() {
  return Image.all[this.imageId];
}

Comment.defaults = [
  {
    text: 'I am a comment'
  },
  {
    text: 'I am another comment'
  },
  {
    text: 'I am a last comment'
  },
];
