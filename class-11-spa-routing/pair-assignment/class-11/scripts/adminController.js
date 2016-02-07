(function(module) {
  var adminController = {};

  adminController.index = function() {
    Article.fetchAll(articleView.initAdminPage);
    $('#articles, #index-page-nav, #about').hide();
    $('#admin-page').fadeIn();
  };

  module.adminController = adminController;
})(window);
