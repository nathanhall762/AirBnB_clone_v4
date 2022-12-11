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
  fetchPlaces('http://c66a74704532.93090521.hbtn-cod.io:5001/api/v1/places_search/');

  getStatus('http://c66a74704532.93090521.hbtn-cod.io:5001/api/v1/status/');
});

function getStatus (url) {
  $.get(url, function (json) {
    if (json.status === 'OK') {
      $('div#api_status').addClass('available');
    } else {
      $('div#api_status').removeClass('available');
    }
  });
}

function fetchPlaces (url) {
  $.ajax({
    url: url,
    type: 'POST',
    contentType: 'application/json',
    data: '{}',
    success: function (data) {
      console.log('POST request successful:', data);
    }
  });
}
