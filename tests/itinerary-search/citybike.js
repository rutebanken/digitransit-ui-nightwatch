'use strict';

module.exports = {
  '@disabled': !isWithinValideRentalPeriode(),
  tags: ['citybike'],
  beforeEach: function (browser) {
    browser.url(browser.launch_url);
  },
  'CityBike in Trondheim': function (browser) {
    browser.page.itinerarySearch()
      .executeItinerarySearchWithModeAndVerify("Nidareid",
        "Gløshaugveien 4", "citybike")
      .api.end();

    browser.end();
  }
};

function isWithinValideRentalPeriode() {
  let current = new Date().getMonth();
  // valid from 1st of April till 31st of October
  return (current >= 3 && current <= 9);
}
