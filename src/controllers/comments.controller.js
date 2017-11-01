'use strict';

class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.$addCommentButton = $('.add-comment input[type=submit]')
  }

  init() {
    this.addCommentFormListener();
    this.addDefaultComments();
  }

  addCommentFormListener() {
    this.$addCommentButton.on('click', (e) => {
      e.preventDefault();

      const el = $(e.target)
      const imageId = parseInt(el.parents('ul').data('id'));
      const inputText = el.parents('ul').find('.user-text').val();
      const comment = new Comment(inputText, imageId);

      this.renderComment(comment, imageId)
      el.parents('ul').find('.user-text').val('')
    });
  }

  renderComment(comment, imageId) {
    let image = Image.all[imageId]
    image.comments.push(comment)
    $('#images').find(`ul[data-id=${imageId}] ul#comments-${imageId}`).append(`<li>${comment.commentContent}</li>\n`);
  }

  addDefaultComments() {
    // ask a question about function vs arrow functions here. odd behavior.

    $('.image').each((index, image) => {
      const imageId = parseInt($(image).find('ul').attr('data-id'))

      Comment.defaults.forEach(comment => {
        let commentItem = comment.commentEl();

        $('#images').find(`ul[data-id=${imageId}] ul#comments-${imageId}`).append(commentItem);
      })
    })
  }
}
