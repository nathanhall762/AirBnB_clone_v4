const $ = window.$;
$(document).ready(function () {
  const amenityDict = {};
  $('input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
      console.log('checked');
      $('div.h4').html('<p>test</p>');
    } else {
      console.log('unchecked');
    }
  });
});
