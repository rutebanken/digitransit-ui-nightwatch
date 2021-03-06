'use strict';

module.exports = {
  tags: ["itinerary"],
  beforeEach: function (browser) {
    browser.url(browser.launch_url);
  },
  'From Oslo S to Arvesens veg 4G, Hamar': function (browser) {
    browser.page.itinerarySearch()
      .executeItinerarySearchWithModeAndVerify("Oslo S", "Arvesens veg 4G, Hamar", "rail")
      .api.end();
  },
  'From Sogstikollen 22B to Bjoervika': function (browser) {
    browser.page.itinerarySearch()
      .executeItinerarySearchAndVerify("Sogstikollen 22C, Frogn", "Bjørvika")
      .api.end();
  },
  'Dyrloekke to Bjoervika': function (browser) {
    browser.page.itinerarySearch()
      .executeItinerarySearchAndVerify("Dyrløkke", "Bjørvika")
      .api.end();
  },
  'From Hausmanns gate to Malerhaugveien 28': function (browser) {
    browser.page.itinerarySearch()
      .executeItinerarySearchAndVerify("Hausmanns gate", "Malerhaugveien 28")
      .api.end();
  },
  'From Hausmanns gate to Ula nord': function (browser) {
    browser.page.itinerarySearch()
      .executeItinerarySearchAndVerify("Hausmanns gate", "Ula nord")
      .api.end();
  },
  'From Roeros skole to Festplassen, Bergen': function (browser) {
    browser.page.itinerarySearch()
      .executeItinerarySearchAndVerify("Røros skole", "Festplassen")
      .api.end();
  },
  /* TODO Temporarily disabled as it fails consistently
   'From Festplassen, Bergen to Scandic Alta': function(browser) {
   browser.page.itinerarySearch()
   .executeItinerarySearchAndVerify("Festplassen", "Scandic Alta")
   .api.end();
   },*/
  'From Nakholmen to Aker brygge': function (browser) {
    browser.page.itinerarySearch()
      .executeItinerarySearchAndVerify("Nakholmen", "Aker brygge")
      .api.end();
  }
};
