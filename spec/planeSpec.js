describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("status changes to not flying after it has landed at an airport", function() {
    plane.land();
    expect(plane.isFlying).toEqual(false);
  });

  it("status changes to flying after it has taken off from the airport", function() {
    plane.takeoff();
    expect(plane.isFlying).toEqual(true);
  });

});
