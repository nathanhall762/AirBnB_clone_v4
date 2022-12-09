const $ = window.$;
$(document).ready(function () {
  const amenityDict = {};
  $('input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) {
      console.log('checked');
	  amenityDict[$(this).data('id')] = $(this).data('name');
      $('div.amenities h4').text(Object.values(amenityDict).join(', '));
    } else {
      console.log('unchecked');
	  delete amenityDict[$(this).data('id')]
      $('div.amenities h4').text(Object.values(amenityDict).join(', '));
    }
  });
});
