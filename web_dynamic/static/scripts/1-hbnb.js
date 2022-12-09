const $ = window.$;
$(document).ready(function () {
  const amenityList = [];
  $('li :checkbox').change(function () {
    if (this.checked) {
      amenityList.push($(this).attr('data-name'));
      $('.amenities h4').html(amenityList.join(', '));
    } else {
      amenityList.pop();
      $('.amenities h4').html(amenityList.join(', '));
    }
  });
});
