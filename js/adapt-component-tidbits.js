define(function(require) {

    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');

    var Tidbits = ComponentView.extend({

        events: {
            'click .tidbit-trigger': 'onClickTriggerTidbit'
        },

        preRender: function() {
            this.checkIfResetOnRevisit();
        },

        postRender: function() {
            this.setReadyStatus();

            this.setupInview();

            //

            this.removeBitColor();
        },

        // remove color from visited tidbits
        removeBitColor: function() {
            var links = this.$('.tidbit-trigger');
            var bits = this.model.get('_tidbits')

            _.each(bits, function(bit,index) {
                if(bit._isVisited){
                    $(links[index]).removeClass('tidbit-color');
                }
            });
        },

        // show tidbit
        onClickTriggerTidbit: function(event) {
            if(event && event.preventDefault) event.preventDefault();

            var bitnum = Number($(event.currentTarget).data('bitnum'));
            var bit = this.model.get('_tidbits')[bitnum];

            var popupObject = {
              title: bit.theTitle,
              body: bit.theBody
            };

            Adapt.trigger('notify:popup', popupObject);
            Adapt.trigger('popup:opened'); /*must be called when opening a popup manually, popup:closed must also be called when closing the popup manually. this is done automatically when closing the default popup.*/

            this.visitedBit(bitnum);
            $(event.currentTarget).removeClass('tidbit-color');
        },

        // set the visited status for tidbit
        visitedBit: function(n) {
            var bit = this.model.get('_tidbits')[n];
            bit._isVisited = true;
            this.checkDone();
        },

        // get required tidbits
        getRequiredBits: function() {
            return _.filter(this.model.get('_tidbits'), function(bit) {
                return bit._isRequired;
            });
        },

        // get visited tidbits
        /*getAllBitsVisited: function() {
            return _.filter(this.model.get('_tidbits'), function(bit) {
                return bit._isVisited;
            });
        },*/

        // set the complete status for component if all [required] tidbits are visited
        checkDone: function() {
            /*if (this.getAllBitsVisited().length === this.model.get('_tidbits').length) {
                this.setCompletionStatus();
            }*/
            var rBits = this.getRequiredBits()
            var vBits = _.filter(rBits, function(bit) {
                return bit._isVisited;
            });
            if(rBits.length === vBits.length){
                this.setCompletionStatus();
            }
        },

        setupInview: function() {
            var selector = this.getInviewElementSelector();

            if (!selector) {
                //this.setCompletionStatus(); //aq: only complete the component if all tidbits are visited
            } else {
                this.model.set('inviewElementSelector', selector);
                this.$(selector).on('inview', _.bind(this.inview, this));
            }
        },

        /**
         * determines which element should be used for inview logic - body, instruction or title - and returns the selector for that element
         */
        getInviewElementSelector: function() {
            if(this.model.get('body')) return '.component-body';

            if(this.model.get('instruction')) return '.component-instruction';

            if(this.model.get('displayTitle')) return '.component-title';

            return null;
        },

        checkIfResetOnRevisit: function() {
            var isResetOnRevisit = this.model.get('_isResetOnRevisit');

            // If reset is enabled set defaults
            if (isResetOnRevisit) {
                this.model.reset(isResetOnRevisit);
            }
        },

        inview: function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                if (visiblePartY === 'top') {
                    this._isVisibleTop = true;
                } else if (visiblePartY === 'bottom') {
                    this._isVisibleBottom = true;
                } else {
                    this._isVisibleTop = true;
                    this._isVisibleBottom = true;
                }

                if (this._isVisibleTop && this._isVisibleBottom) {
                    this.$(this.model.get('inviewElementSelector')).off('inview');
                    //this.setCompletionStatus(); //aq: only complete the component if all tidbits are visited

                    //complete the component if no tidbits are required
                    var rBits = this.getRequiredBits();
                    if(rBits.length === 0){
                        this.setCompletionStatus();
                    }
                }
            }
        },

        remove: function() {
            if(this.model.has('inviewElementSelector')) {
                this.$(this.model.get('inviewElementSelector')).off('inview');
            }

            ComponentView.prototype.remove.call(this);
        }
    },
    {
        template: 'tidbits'
    });

    Adapt.register('tidbits', Tidbits);

    return Tidbits;
});
