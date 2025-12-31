// chart.js

window.onload = () => {
  const score = +localStorage.getItem("score");
  const total = +localStorage.getItem("total");

  // update score text
  document.getElementById("summary").innerText = `You scored ${score} / ${total}`;

  // draw pie chart
  new Chart(document.getElementById("resultChart"), {
    type: "pie",
    data: {
      labels: ["Correct", "Wrong"],
      datasets: [{
        data: [score, total - score],
        backgroundColor: ["#4CAF50", "#FF5252"]
      }]
    }
  });
};
