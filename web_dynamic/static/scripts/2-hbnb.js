$(document).ready(function () {
  const amenities = [];
  $('li :checkbox').change(function () {
    if (this.checked) {
      amenities.push($(this).attr('data-name'));
    } else {
      amenities.pop();
    }
    $('.amenities h4').html(amenities.join(', '));
  });
});

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  dataType: 'json',
  success: function (json) {
    if (json.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  }
}
);
