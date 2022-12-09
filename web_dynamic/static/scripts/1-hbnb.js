const $ = window.$;
$(document).ready(function () {
  const amenityList = [];
  $('input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
      console.log('checked');
	  amenityList.push($(this).attr('data-name'));
    } else {
      console.log('unchecked');
      amenityList.pop();
    }
    $('div.amenities h4').html(amenityList.join(', '));
  });
});
