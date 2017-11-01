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

      this.render(comment, imageId)
      el.parents('ul').find('.user-text').val('')
    });
  }

  render(comment, imageId) {
    // what are we going to use the associations for?
    let image = Image.all[imageId]
    image.comments.push(comment)
    $('#images').find(`ul[data-id=${imageId}] ul#comments-${imageId}`).append(comment.commentEl());
  }

  addDefaultComments() {
    // ask a question about function vs arrow functions here. odd behavior in Chrome.

    // this is an N+1, should fix this obviously if there's time.
    $('.image').each((index, image) => {
      const imageId = parseInt($(image).find('ul').attr('data-id'))

      Comment.defaults.forEach(comment => {
        let commentItem = comment.commentEl();
        let commentImageId = comment.imageId

        if (commentImageId === imageId) {
          $('#images').find(`ul[data-id=${imageId}] ul#comments-${imageId}`).append(commentItem);
        }
      })
    })
  }
}
