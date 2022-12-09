const $ = window.$;
$(document).ready(function () {
  const amenityDict = {};
  $('input[type=checkbox]').click(function () {
    if ($(this).is(':checked')) { console.log('checked'); } else { console.log('unchecked'); }
  });
});
