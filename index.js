var _ = require('lodash');
var repl = require('repl');
var vm = require('vm');


var DEFAULT_OPTIONS = {
  prompt: 'Supa CLI > ',
  load: {}
};


/**
 * Supa
 *
 * @constructor
 * @param {object} options
 */
function Supa(options) {
  this.options = _.assign(DEFAULT_OPTIONS, options);
}


Supa.prototype.run = function() {
  var r = repl.start({
    prompt: this.options.prompt
  });

  r.context = vm.createContext(this.options.load);
};


module.exports = Supa;
