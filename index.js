"use strict";

var find = require('dom-essentials/iters').find,
    some = require('dom-essentials/iters').some,
    queryAll = require('dom-essentials/by').queryAll,
    native = find(['matchesSelector', 'mozMatchesSelector',
    'webkitMatchesSelector', 'oMatchesSelector',
    'msMatchesSelector'], function(shim) {
    return shim in document.documentElement;
});

module.exports = function(el, selector) {
    if (native) {
        return el[native](selector);
    }

    var elts = queryAll(selector);
    return some(elts, function(elt) {
        return elt === el;
    });
};
