
function Airport(capacity) {
  var DEFAULT_CAPACITY = 30;
  capacity = typeof capacity !== 'undefined' ? capacity : DEFAULT_CAPACITY;
  this.capacity = capacity;
}

Airport.prototype.land = function(plane) {
  plane.land();
  return plane.isFlying ? "Plane did not land." : "Plane has landed.";
}
