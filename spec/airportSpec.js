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

    it("confirms that the plane has landed", function() {
      plane = jasmine.createSpyObj('plane', ['land', 'isFlying']);
      plane.isFlying = false;
      expect(airport.land(plane)).toEqual("Plane has landed.")
    });
  });

  describe("#takeoff", function() {
    it("can instruct a plane to take off", function() {
      plane.takeoff = jasmine.createSpy("takeoff()");
      airport.takeoff(plane);
      expect(plane.takeoff).toHaveBeenCalled();
    });

    it("confirms that the plane is no longer in the airport", function() {
      plane = jasmine.createSpyObj('plane', ['takeoff', 'isFlying']);
      plane.isFlying = true;
      expect(airport.takeoff(plane)).toEqual("Plane has left the airport.");
    })
  });

});
