
;(function() {

  var StlReader = (function() {

    var DataStream = require('data-stream').DataStream;

    var StlReader = function(options) {
    };

    /**
     * Reads the triangle vertices of an STL file into a Float32Array
     *
     * @param  {ArrayBuffer} fileData The file as an ArrayBuffer
     * @return {Float23Array}
     */
    StlReader.prototype.read = function(fileData) {

      var ds = new DataStream(fileData);
    };

    return StlReader;
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = StlReader;
  } else {
    window.StlReader = StlReader;
  }

})();
