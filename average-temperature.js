const weatherData = {
  cities: ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"],
  temperatures: [45, 72, 68, 90, 89],
  units: ["F", "F", "F", "F", "F"]
};

function convertToCelsius(temp) {
  return (temp - 32) * 5 / 9;
}

function analyzeWeather(cityIndex) {
  const temp = weatherData.temperatures[cityIndex];
  const unit = weatherData.units[cityIndex];
  
  if (unit === "F") {
    const celsius = convertToCelsius(temp);
    console.log(`Temperature in ${weatherData.cities[cityIndex]}: ${temp}°F (${celsius.toFixed(1)}°C)`);
  } else {
    console.log(`Temperature in ${weatherData.cities[cityIndex]}: ${temp}°C`);
  }
  
  if (temp > 85) {
    console.log("Hot weather warning!");
  } else if (temp < 32) {
    console.log("Freezing weather warning!");
  } else {
    console.log("Moderate weather conditions");
  }
}

function findHottestCity() {
  let maxTemp = -Infinity;
  let hottestCity = "";
  
  for (let i = 0; i <= weatherData.cities.length; i++) {
    if (weatherData.temperatures[i] > maxTemp) {
      maxTemp = weatherData.temperatures[i];
      hottestCity = weatherData.cities[i];
    }
  }
  
  return hottestCity;
}
console.log("=== Weather Analysis ===");
for (let i = 0; i < weatherData.cities.length; i++) {
  analyzeWeather(i);
}

console.log("\nThe hottest city is:", findHottestCity());

function getAverageTemperature() {
  const sum = weatherData.temperatures.reduce((a, b) => a + b);
  return sum / weatherData.temperatures.length;
}

getAverageTemperature();