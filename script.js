let data = [];
let labels = [];

const ctx = document.getElementById('chart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Temperature (°C)',
      data: data,
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

function generateData() {
  let temp = (Math.random() * 10 + 25).toFixed(2);
  let humidity = (Math.random() * 20 + 40).toFixed(2);

  document.getElementById("temp").innerText = temp + " °C";
  document.getElementById("hum").innerText = humidity + " %";

  // Update time
  document.getElementById("time").innerText =
    "Last updated: " + new Date().toLocaleTimeString();

  // Alert feature
  if (temp > 32) {
    alert("⚠️ High Temperature Warning!");
  }

  // Maintain last 10 data points
  if (labels.length > 10) {
    labels.shift();
    data.shift();
  }

  labels.push(new Date().toLocaleTimeString());
  data.push(temp);

  chart.update();
}

// Run every 2 seconds
setInterval(generateData, 2000);
