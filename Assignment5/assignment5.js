$(document).ready(function () {
  // Hide loading indicator
  $('.loading').hide();
  // Hide search results
  $('.results-header').hide();
  $('.no-results').hide();
  $('.results').hide();
  // Load all years from 1920 to 2022 into the dropdown
  for (let i = 2022; i >= 1920; i--) {
    $('#year').append('<option value="' + i + '">' + i + '</option>');
  }
});

function search() {
  const year = $('#year').val();
  const sex = $('#birth-sex').val();
  $('.loading').show();
  $.ajax({
    url: "https://data.novascotia.ca/resource/emf8-vmuy.json",
    type: "GET",
    data: {
      "year": year,
      "sex": sex
    }
  }).done(function (data) {
    // Hide loading indicator
    $('.loading').hide();
    // Check for empty response
    if (datai.length === 0) {
      // Show results header, and no results message.
      // Hide previously found results and empty list.
      $('.results-header').show();
      $('.no-results').show();
      $('.results').hide().empty();
    } else {
      // Show results header and hide no results message
      // Empty previous found results
      $('.results-header').show();
      $('.no-results').hide();
      $('.results').empty().show();
      // Loop over each result add it to the list
      data.forEach(function (record) {
        $('.results').append('<li><span class="title-case">' + record.first_name + '</span><br>Count: ' + record.count + '</li>');
      })
    }
  });
}
