$(document).ready(function() {
    travelMart.init();

});

var travelMart = {
    init: function() {
        this.materialbox();
        this.scrollspy();
        this.autocomplete();
        this.sidenav();
        this.slider();
    },
    materialbox: function() {
        $('.materialboxed').materialbox();
    },
    scrollspy: function() {
        $('.scrollspy').scrollSpy();
    },
    autocomplete: function() {
        $('input.autocomplete').autocomplete({
            data: {
                "Delhi": null,
                "Dhaka": null,
                "Milan": null,
                "Rome": null,
                "Palermo": null,
                "Belfast": null,
                "Mumbai": null,
                "Florida": null,
                "miami": null,
                "alexandria": null,
                "Sylhet": null,
                "Rangpur": null,
                "Infinity office": null,
                "Nahian vaiar Bari": null,
                "Faisal Vaiyar Bari": null,
                "Nazmul Vaiyar Bari": null,
                "Haiti": null,
                "Tripura": null,
                "Babol": null,
                "comilla": null,
            }
        });
    },
    sidenav: function() {
        $('.sidenav').sidenav();
    },
    slider: function() {
        $('.slider').slider({
            indicators: false,
            height: 550,
            transition: 500,
            interval: 6000

        });
    }
}