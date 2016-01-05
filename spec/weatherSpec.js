describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  describe("#isStormy", function() {
    it("returns random boolean", function() {
      spyOn(Math, "random").and.returnValue(0.9);
      expect(weather.isStormy()).toEqual(true);
    });
  });
});
