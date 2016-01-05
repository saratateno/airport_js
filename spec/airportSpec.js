describe("Airport", function() {
  var airport, plane;
  var DEFAULT_CAPACITY = 30;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe("function construct", function() {
    it("sets capacity to the argument passsed", function() {
      smallAirport = new Airport(1);
      expect(smallAirport.capacity).toEqual(1);
    });

    it("sets capacity to a default value if non give", function() {
      expect(airport.capacity).toEqual(30);
    });
  });

  describe("#land", function() {
    it("can instruct a plane to land", function() {
      plane.land = jasmine.createSpy("land()");
      airport.land(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });
});
