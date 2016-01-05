describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("status changes to not flying after it has landed at an airport", function() {
    plane.land();
    expect(plane.isFlying).toEqual(false);
  });
});
