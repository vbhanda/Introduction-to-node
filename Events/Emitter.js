function Emitter() {
    this.events = {}
}

Emitter.prototype.on = function (action, listener) {
    this.events[action] = this.events[action] || [];
    this.events[action].push(listener);
};

Emitter.prototype.emit = function (action) {
  if(this.events[action]) {
      this.events[action].forEach(value => value());
  }
};

module.exports = Emitter;