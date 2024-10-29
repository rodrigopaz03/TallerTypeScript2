import { series } from './data.js';
var seriesTable = document.getElementById('series');
var seriesTbody = document.createElement('tbody');
var serieDetails = document.getElementById('serieDetails');
var cardTitle = document.getElementById('cardTitle');
var cardDescription = document.getElementById('cardDescripction');
var cardChannel = document.getElementById('cardChannel');
var cardSeasons = document.getElementById('cardSeasons');
function mostrarSeries(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement('tr');
        trElement.innerHTML = "\n            <td>".concat(serie.id, "</td>\n            <td class=\"serie-name\">").concat(serie.name, "</td>\n            <td>").concat(serie.channel, "</td>\n            <td>").concat(serie.seasons, "</td>\n        ");
        trElement.addEventListener('click', function () { return mostrarDetallesSerie(serie); });
        seriesTbody.appendChild(trElement);
    });
    seriesTable.appendChild(seriesTbody);
    calcularPromedio(series);
}
function calcularPromedio(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var averageSeasons = (totalSeasons / series.length).toFixed(2);
    var averageSeasonsCell = document.getElementById('averageSeasons');
    if (averageSeasonsCell) {
        averageSeasonsCell.textContent = averageSeasons;
    }
}
function mostrarDetallesSerie(serie) {
    serieDetails.style.display = 'block';
    cardTitle.textContent = serie.name;
    cardChannel.textContent = "Channel: ".concat(serie.channel);
    cardSeasons.textContent = "Seasons: ".concat(serie.seasons);
    var cardImage = document.getElementById('cardImage');
    cardImage.src = serie.imageUrl;
    cardImage.alt = "Image of ".concat(serie.name);
    var cardDescription = document.getElementById('cardDescription');
    cardDescription.textContent = serie.description;
}
mostrarSeries(series);
