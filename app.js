// Function to update weather data and chart
        function updateWeatherData(location) {
            // This is a placeholder function for updating weather data.
            // In a real application, you would use a weather API.
            // Here, we are just updating the content with dummy data.

            document.getElementById('location').textContent = location;
            document.getElementById('temperature').textContent = '25°C';
            document.getElementById('description').textContent = 'Clear Sky';
            document.getElementById('icon').src = 'https://example.com/clear-sky-icon.png';

            // Dummy data for 5-day forecast
            const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
            const temperatures = [25, 28, 23, 20, 22];

            // Update the chart
            updateChart(days, temperatures);
        }

        // Function to update the chart using Chart.js
        function updateChart(days, temperatures) {
            const ctx = document.getElementById('weather-chart').getContext('2d');

            const weatherChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: days,
                    datasets: [{
                        label: 'Temperature (°C)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        data: temperatures,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        }

        // Event listener for the search button
        document.getElementById('search-button').addEventListener('click', function() {
            const locationInput = document.getElementById('search-input').value;
            // Use the locationInput to fetch weather data from an API
            // Update the content dynamically
            updateWeatherData(locationInput);
        });

        // Initial update with placeholder data
        updateWeatherData('City, Country');