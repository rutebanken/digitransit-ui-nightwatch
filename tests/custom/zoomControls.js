/* NRP-837: Zoom control should be visible in map
 We have a created a PR (https://github.com/HSLdevcom/digitransit-ui/pull/1059) on this.
 */

module.exports = {
  tags: ['zoom-controls', 'custom'],
  beforeEach: function (browser) {
    browser.url(browser.launch_url);
  },
  'Zoom control buttons should be visible': function (browser) {
    browser.waitForElementVisible('.leaflet-control-zoom-in', 1000);
    browser.waitForElementVisible('.leaflet-control-zoom-out', 1000);
    browser.end();
  },
};
