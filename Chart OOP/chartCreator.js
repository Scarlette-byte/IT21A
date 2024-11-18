class ChartCreator {
    constructor(dataUrl) {
      this.dataUrl = dataUrl;
      this.barCtx = document.getElementById("barChart");
      this.pieCtx = document.getElementById("pieChart");
    }
    async fetchData() {
    }
    createBarChart(data) {
        new Chart(this.barCtx, {
          type: "bar",
          data: {
            labels: ["Carnation", "Tulips", "Lily", "Dahlia", "Sunflower", "Rose"],
            datasets: [
              {
                label: "# of Votes",
                data: data.values,
                borderWidth: 1,
                backgroundColor: [
                  "red",
                  "blue",
                  "yellow",
                  "green",
                  "purple",
                  "orange",
                ],
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
      createPieChart(data) {
        new Chart(this.pieCtx, {
          type: "pie",
          data: {
            labels: ["Carnation", "Tulips", "Lily", "Dahlia", "Sunflower", "Rose"],
            datasets: [
              {
                data: data.values,
                backgroundColor: [
                  "red",
                  "blue",
                  "yellow",
                  "green",
                  "purple",
                  "orange",
                ],
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "bottom",
              },
            },
          },
        });
      }
      async init() {
        const data = await this.fetchData();
        if (data) {
          this.createBarChart(data);
          this.createPieChart(data);
        }
      }
    }
    
    const chartCreator = new ChartCreator("chart.json");
    chartCreator.init();      