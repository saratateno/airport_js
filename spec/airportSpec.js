describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  describe('function construct', function() {
    it('sets capacity to the argument passsed', function() {
      smallAirport = new Airport(1);
      expect(smallAirport.capacity).toEqual(1);
    });
  });
});
