let data = [];
let labels = [];
let alertShown = false;

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

  document.getElementById("time").innerText =
    "Last updated: " + new Date().toLocaleTimeString();

  let alertBox = document.getElementById("alertBox");

  if (temp > 32) {
    alertBox.innerText = "⚠️ High Temperature Warning!";
    alertBox.className = "alert";

    if (!alertShown) {
      alert("⚠️ High Temperature Warning!");
      alertShown = true;
    }
  } else {
    alertBox.innerText = "✅ System Normal";
    alertBox.className = "normal";
    alertShown = false;
  }

  if (labels.length > 10) {
    labels.shift();
    data.shift();
  }

  labels.push(new Date().toLocaleTimeString());
  data.push(temp);

  chart.update();
}

setInterval(generateData, 2000);
