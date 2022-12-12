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
  
    const placesUri = 'http://c66a74704532.93090521.hbtn-cod.io:5001/api/v1/places_search/';
  
    $.ajax({
      url: placesUri,
      type: 'POST',
      contentType: 'application/json',
      data: '{}',
      success: function (data) {
        console.log
        for (let i = 0; i < data.length; i++) {
          buildPlaceArticle(data[i]);
        }
      }
    });
  
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
  
  function buildPlaceArticle (data) {
    console.log(data);
  }
  