'use strict'

var commands = {
  openNearbyRoutes: function () {
    this.waitForElementVisible("@nearbyRoutesPaneSelect");
    return this.click("@nearbyRoutesPaneSelect");
  },
  waitForRoutes: function () {
    this.waitForElementVisible("@scrollableRoutes");
    return this.waitForElementVisible("@routeDestination");
  },
  waitForRoutesWithRealtime: function () {
    this.waitForElementVisible("@scrollableRoutes");
    return this.waitForElementVisible("@realtime");
  }
}

module.exports = {
  commands: [commands],
  elements: {
    nearbyRoutesPaneSelect: {
      selector: ".nearby-routes"
    },
    scrollableRoutes: {
      selector: "#scrollable-routes"
    },
    routeDestination: {
      selector: ".route-destination"
    },
    realtime: {
      selector: ".time .realtime"
    }
  }
}
