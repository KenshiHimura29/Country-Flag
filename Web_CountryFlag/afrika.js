$(document).ready(function() {
    let container = document.getElementById("container");
    $.ajax({
        url: 'https://restcountries.com/v3.1/region/africa',
        type: 'GET',
        success: function(response) {
            const sortedRes = response.sort((a, b) => {
                return a.name.common.localeCompare(b.name.common);
            });

            sortedRes.map((data) => {
                container.innerHTML += `
                <div class="box">
                    <a href="detail-negara.html?country=${data.name.common}">
                        <img src="${data.flags.png}" alt="Flag of ${data.name.common}"/>
                    </a>
                    <h2>${data.name.common}</h2>
                    <h4>Continent: ${data.continents}</h4>
                    <h4>Official: ${data.name.official}</h4>
                    <h4>Capital: ${data.capital}</h4>
                    <h4>Population: ${data.population}</h4>
                </div>
                `;
            });
        }
    });
});
