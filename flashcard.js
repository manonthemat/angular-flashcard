angular.module('flashcards', [])
.directive('flashcard', function() {
  return {
    link: function(scope, e, attr) {
      e.css('perspective', '1000');
      e.css('-webkit-perspective', '1000');
      e.css('-moz-perspective', '1000');
      e.css('-o-perspective', '1000');

      // --- rotate function
      function rotate() {
        console.log('round round baby round round');
        e.css('transform', 'rotateY(180deg)');
        e.css('-webkit-transform', 'rotateY(180deg)');
        e.css('-moz-transform', 'rotateY(180deg)');
        e.css('-o-transform', 'rotateY(180deg)');
      };

      // --- rotate function
      function rotateback() {
        console.log('spin around');
        e.css('transform', 'rotateY(0deg)');
        e.css('-webkit-transform', 'rotateY(0deg)');
        e.css('-moz-transform', 'rotateY(0deg)');
        e.css('-o-transform', 'rotateY(0deg)');
      };

      // -- binding the rotate function
      angular.element(e).bind('mousedown', rotate);
      angular.element(e).bind('mouseup', rotateback);

      // --- setting the container's dimensions and positioning
      if(attr.width) {
        // taking the width attribute (if present) to set the container's width
        e.css('width', attr.width + 'px');
      } else {
        // setting the standard width to 800 px, if attribute width is not provided
        e.css('width', '800px');
      }
      if(attr.height) {
        // taking the height attribute (if present) to set the container's height
        e.css('height', attr.height + 'px');
      } else {
        // setting the standard height to 600 px, if attribute height is not provided
        e.css('height', '600px');
      }
      e.css('position', 'relative');

      // --- setting the duration of the transition and transformation style
      if (attr.transition) {
        var tval = parseFloat(attr.transition, 10) + 's';
        e.css('transition', tval);
        e.css('-webkit-transition', tval);
        e.css('-moz-transition', tval);
        e.css('-o-transition', tval);
      } else {
        e.css('transition', '0.6s');
        e.css('-webkit-transition', '0.6s');
        e.css('-moz-transition', '0.6s');
        e.css('-o-transition', '0.6s');
      }
      e.css('transform-style', 'preserve-3d');
      e.css('-webkit-transform-style', 'preserve-3d');
      e.css('-moz-transform-style', 'preserve-3d');
      e.css('-o-transform-style', 'preserve-3d');
    }
  };
})
.directive('front', function() {
  return {
    restrict: 'E',
    link: function(scope, e, attr) {
      // --- these attributes will also be there for 'back'
      e.css('backface-visibility', 'hidden');
      e.css('-webkit-backface-visibility', 'hidden');
      e.css('-moz-backface-visibility', 'hidden');
      e.css('-o-backface-visibility', 'hidden');
      e.css('position', 'absolute');
      e.css('top', '0');
      e.css('left', '0');
      e.css('width', '100%');
      e.css('height', '100%');

      // --- front only css
      e.css('transform', 'rotateY(0deg)');
      e.css('-webkit-transform', 'rotateY(0deg)');
      e.css('-moz-transform', 'rotateY(0deg)');
      e.css('-o-transform', 'rotateY(0deg)');
    }
  };
})
.directive('back', function() {
  return {
    restrict: 'E',
    link: function(scope, e, attr) {
      e.css('backface-visibility', 'hidden');
      e.css('-webkit-backface-visibility', 'hidden');
      e.css('-moz-backface-visibility', 'hidden');
      e.css('-o-backface-visibility', 'hidden');
      e.css('position', 'absolute');
      e.css('top', '0');
      e.css('left', '0');
      e.css('width', '100%');
      e.css('height', '100%');

      // --- back only css
      e.css('transform', 'rotateY(180deg)');
      e.css('-webkit-transform', 'rotateY(180deg)');
      e.css('-moz-transform', 'rotateY(180deg)');
      e.css('-o-transform', 'rotateY(180deg)');
    }
  };
})
;
