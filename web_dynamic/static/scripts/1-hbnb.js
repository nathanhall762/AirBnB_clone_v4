const $ = window.$;
$(document).ready(function () {
  const amenityList = [];
  $('li :checkbox').change(function () {
    if (this.checked) {
      console.log('checked');
	  amenityList.push($(this).attr('data-name'));
    } else {
      console.log('unchecked');
      amenityList.pop();
    }
    $('.amenities h4').html(amenityList.join(', '));
  });
});
