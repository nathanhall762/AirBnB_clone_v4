$(document).ready(function () {
  const amenityDict = {};
  const amenities = [];
  $('li :checkbox').change(function () {
    if (this.checked) {
      amenityDict[$(this).data('id')] = $(this).data('name');
      console.log($(this).data('name') + ' added to amenityDict. New amenityDict= ' + JSON.stringify(amenityDict));
      amenities.push($(this).attr('data-name'));
    } else {
      delete amenityDict[$(this).data('id')];
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
      for (let i = 0; i < data.length; i++) {
        $('section.places').append(parsePlace(data[i]));
      }
    }
  });

  console.log('amenityDict:' + amenityDict);

  $('button').on('click', function () {
    $.ajax({
      url: placesUri,
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ amenities: Object.keys(amenityDict) }),
      success: function (data) {
        $('section.places').empty();
        for (let i = 0; i < data.length; i++) {
          $('section.places').append(parsePlace(data[i]));
        }
      }
    });
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

function parsePlace (place) {
  return placeBuilder(
    place.name,
    place.price_by_night,
    place.max_guest,
    place.number_rooms,
    place.number_bathrooms,
    place.description
  );
}

function placeBuilder (title, priceByNight, maxGuest, numberRooms, numberBathrooms, description) {
  return `<article>
      <div class="title_box">
        <h2>${title}</h2>
        <div class="price_by_night">$${priceByNight}</div>
      </div>
      <div class="information">
        <div class="max_guest">${maxGuest} Guest(s)</div>
              <div class="number_rooms">${numberRooms} Bedroom(s)</div>
              <div class="number_bathrooms">${numberBathrooms} Bathroom(s)</div>
      </div>
      <div class="user">
            </div>
            <div class="description">
        ${description}
            </div>
    </article>`;
}
