'use strict';

module.exports = function(feature) {
  var choice = {
    inheritance: function() {

      var Counter = function() {
        this.count = 0;
      };

      Counter.prototype.increment = function() {
        ++this.count;
        return this;
      };

      Counter.prototype.getValue = function() {
        return this.count;
      };

      return Counter;

    },
    encapsulation: function() {

      var Counter = function() {
        var count = 0;

        return {
          increment: function() {
            ++count;
            return this;
          },

          getValue: function() {
            return count;
          }
        };
      };

      return Counter;

    }
  };
  return choice[feature]();
};
