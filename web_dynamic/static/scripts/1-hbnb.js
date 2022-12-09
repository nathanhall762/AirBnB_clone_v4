const $ = window.$;
$(document).ready(function () {
  const amenityDict = {};
  $('input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
      console.log('checked');
      $('div.amenities h4').text('test');
    } else {
      console.log('unchecked');
    }
  });
});
