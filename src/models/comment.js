'use strict';
// CommentModel

class Comment {
  constructor(commentContent, imageId) {
    this.id = this.constructor.all.length;
    this.commentContent = commentContent;
    this.imageId = imageId;
    this.constructor.all.push(this);
  }

  commentEl() {
    return `<li>${this.commentContent}</li>\n`
  }

  findImage(imageId) {
    return Image.all[imageId];
  }
}

Comment.all = [];

Comment.defaults = [
  new Comment('I am a comment', 0),
  new Comment('I am another comment', 1),
  new Comment('I am a last comment', 2)
];
