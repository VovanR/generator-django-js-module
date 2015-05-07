/**<% if (description) { %>
 * <%= description %>
 *<% } %>
 * @module <%= moduleName %>
 * @author <%= authorName %> <<%= authorEmail %>>
 */

define([
    'jquery',

    // nothing returns
], function (
    $
) {

    'use strict';

    var <%= moduleName %>;

    /**
     * @param {Object} [o] Options
     * @constructor
     * @alias module:<%= moduleName %>
     */
    <%= moduleName %> = function (o) {

        this._init();
    };

    <%= moduleName %>.prototype = {
        /**
         * Initialize
         *
         * @private
         */
        _init: function () {
            console.info('<%= moduleName %> init');

            this._bindControls();
        },

        /**
         * Bindings
         *
         * @private
         */
        _bindControls: function () {
        },

        /**
         */
        destroy: function () {
            console.log('destroy');
        },
    };

    return <%= moduleName %>;

});
