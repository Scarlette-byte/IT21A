const chartCanvas = document.createElement('canvas');
chartCanvas.id = 'talentChart';
chartCanvas.width = 800;
chartCanvas.height = 400;
document.body.appendChild(chartCanvas);

const talentCategories = ['Music', 'Art', 'Sports', 'Writing', 'Dance'];
const talentData = {
    labels: talentCategories,
    datasets: [{
        label: 'Talent Distribution',
        data: [25, 15, 30, 20, 10], 
        backgroundColor: [
            'rgba(255, 99, 132, 1)', 
            'rgba(54, 162, 235, 1)',  
            'rgba(255, 206, 86, 1)',   
            'rgba(75, 192, 192, 1)',   
            'rgba(153, 102, 255, 1)'   
        ],
        hoverOffset: 4
    }]
};


const chartConfig = {
    type: 'pie',
    data: talentData,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Distribution of Talents'
            }
        }
    },
};


const chartScript = document.createElement('script');
chartScript.src = 'https://cdn.jsdelivr.net/npm/chart.js';
chartScript.onload = () => {
    const talentChart = new Chart(chartCanvas.getContext('2d'), chartConfig);
};
document.head.appendChild(chartScript);
