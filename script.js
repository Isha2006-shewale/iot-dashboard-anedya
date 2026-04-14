let data = [];
let labels = [];

const ctx = document.getElementById('chart').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Temperature',
      data: data
    }]
  }
});

function generateData() {
  let temp = (Math.random() * 10 + 25).toFixed(2);
  let humidity = (Math.random() * 20 + 40).toFixed(2);

  document.getElementById("temp").innerText = temp + " °C";
  document.getElementById("hum").innerText = humidity + " %";

  if (labels.length > 10) {
    labels.shift();
    data.shift();
  }

  labels.push(new Date().toLocaleTimeString());
  data.push(temp);

  chart.update();
}

setInterval(generateData, 2000);
