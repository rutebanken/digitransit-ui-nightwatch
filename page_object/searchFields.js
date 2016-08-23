'use strict'

var searchCommands = {
    openFrontPageSearchBar: function() {
        return this.waitForElementVisible('@frontPageSearchBar')
            .click('@frontPageSearchBar');
    },
    enterSearchText: function(tabSelector, inputSelector, searchText) {
        return this.waitForElementVisible(tabSelector)
            .click(tabSelector)
            .waitForElementVisible(inputSelector)
            .clearValue(inputSelector)
            .setValue(inputSelector, searchText);
    },
    setDestination: function(destination) {
        return this.openFrontPageSearchBar()
          .enterSearchText("@destination", "@searchDestination", destination);
    },
    setOrigin: function(origin) {
        return this.openFrontPageSearchBar()
          .enterSearchText("@origin", "@searchOrigin", origin);
    },
    useCurrentLocationInOrigin: function(origin) {
        return this.openFrontPageSearchBar()
            .waitForElementVisible('@origin')
            .click('@origin')
            .waitForElementVisible('@searchOrigin')
            .clearValue('@searchOrigin')
            .setValue('@searchOrigin', this.api.Keys.SPACE)
            .setValue('@searchOrigin', '\b')
            .setValue('@searchOrigin', '')
            .waitForElementVisible("@searchResultCurrentLocation")
            .click("@searchResultCurrentLocation");
    },
    chooseSuggestion: function(text, tabNumber) {
        /* Keep in mind that there are three search tabs rendered with auto whatever suggestions: origin, destination and stop/route search.
         * These lists does not have unique identifiers.
         */
        let xpath = `(//*[@id='react-whatever-suggest'])[${tabNumber}]//*[contains(text(), "${text}")]`

        this.api.useXpath()
            .waitForElementVisible(xpath)
            .click(xpath)
            .useCss();
        return this;
    },
    chooseSuggestedDestination: function(destination) {
        return this.chooseSuggestion(destination, 2);
    },
    chooseSuggestedOrigin: function(origin) {
        return this.chooseSuggestion(origin, 1);
    },
    setSearch: function(search) {
        // Search for stops and routes. Third tab.
        this.openFrontPageSearchBar()
            .waitForElementVisible('@search')
            .click('@search')
            .waitForElementVisible('@searchInput')
            .setValue('@searchInput', search);

        this.api.pause(1000);
        // It does not necesarry select the correct suggested stop/route
        this.setValue('@searchInput', this.api.Keys.ENTER);
        return this;
    },
    itinerarySearch: function(origin, destination) {
        return this.setOrigin(origin)
            .chooseSuggestedOrigin(origin)
            .setDestination(destination)
            .chooseSuggestedDestination(destination);
    }
};

module.exports = {
    commands: [searchCommands],
    elements: {
        frontPageSearchBar: {
            selector: '#front-page-search-bar'
        },
        origin: {
            selector: '#origin'
        },
        searchOrigin: {
            selector: '#search-origin'
        },
        destination: {
            selector: '#destination'
        },
        searchDestination: {
            selector: '#search-destination'
        },
        firstSuggestedItem: {
            selector: "#react-autowhatever-suggest--item-0"
        },
        search: {
            selector: "[tabindex=\"2\"]"
        },
        searchInput: {
            selector: "#search"
        },
        searchResultCurrentLocation: {
            selector: ".search-result.CurrentLocation"
        }
    }
};
