var _ = require('lodash');
var colors = require('colors/safe');
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
  console.log(colors.green('Loading ' + _.keys(this.options.load).join(', ') ));

  var r = repl.start({
    prompt: this.options.prompt
  });

  _.forOwn(this.options.load, function(elem, key) {
    r.context[key] = elem;
  });
};


module.exports = Supa;
