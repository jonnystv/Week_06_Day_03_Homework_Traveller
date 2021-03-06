const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map( (journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map( (journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter( (journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter( (journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce( (total, journey) => {
    return total += journey.distance;
  }, 0);
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const uniqMode = this.journeys.map( (journey) => {
//     return journey.transport;
//   });
//   return uniqMode.reduce( (unique, item) => unique.includes(item) ? unique : [...unique, item], [] );
// };

//Rewritten using newer way of removing duplicates - 'Set'
Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqMode = this.journeys.map( (journey) => {
    return journey.transport;
  });
  return [...new Set(uniqMode)];
};



module.exports = Traveller;
