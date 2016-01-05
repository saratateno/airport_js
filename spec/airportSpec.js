describe("Airport", function() {
  var airport;
  var DEFAULT_CAPACITY = 30;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('function construct', function() {
    it('sets capacity to the argument passsed', function() {
      smallAirport = new Airport(1);
      expect(smallAirport.capacity).toEqual(1);
    });

    it('sets capacity to a default value if non give', function() {
      expect(airport.capacity).toEqual(30);
    });
  });
});
