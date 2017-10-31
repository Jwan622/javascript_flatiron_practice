class CommentsController {
  constructor() {
    this.$addCommentForm = $('.add-comment')
    this.$addCommentButton = $('.add-comment input[type=submit]')
  }

  init() {
    this.addCommentFormListener();
  }

  addCommentFormListener() {
    this.$addCommentButton.on('click', function(e) {
      e.preventDefault();

      let imageId = parseInt($(this).parents('ul').data('id'));
      let image = Image.all[imageId]
      let inputText = $(this).parents('ul').find('.user-text').val();
      let comment = new Comment(inputText, imageId);

      image.comments.push(comment);
      ImagesController.render(image);
    });
  }
}
