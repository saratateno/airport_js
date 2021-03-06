function Airport(capacity) {
  var DEFAULT_CAPACITY = 30;
  capacity = typeof capacity !== 'undefined' ? capacity : DEFAULT_CAPACITY;
  this.capacity = capacity;
}

Airport.prototype.land = function(plane) {
  if (!this.isStormy()) {
    plane.land();
  }
  return plane.isFlying ? "Plane did not land." : "Plane has landed.";
}

Airport.prototype.takeoff = function(plane) {
  if (!this.isStormy()) {
    plane.takeoff();
  }
  return plane.isFlying? "Plane has left the airport." : "Plane did not take off";
}

Airport.prototype.isStormy = function() {
  return Math.random() >= 0.9;
}
