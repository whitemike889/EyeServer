var events = require('events');

function SpawnAsserter() {
  var spawnAsserter = new events.EventEmitter();
  
  spawnAsserter.spawn = function (command, args) {
    spawnAsserter.command = command;
    spawnAsserter.args = args;
    
    spawnAsserter.stdout = new events.EventEmitter();
    spawnAsserter.stderr = new events.EventEmitter();
    
    return spawnAsserter;
  }
  
  return spawnAsserter;
}

module.exports = SpawnAsserter;