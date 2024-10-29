import { series } from './data.js';
var seriesTable = document.getElementById('series');
var seriesTbody = document.createElement('tbody');
function mostrarSeries(series) {
    series.forEach(function (serie) {
        var trEelement = document.createElement('tr');
        trEelement.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td>").concat(serie.name, "</td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n    ");
        seriesTbody.appendChild(trEelement);
    });
    seriesTable.appendChild(seriesTbody);
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var averageSeasons = (totalSeasons / series.length).toFixed(2);
    var averageSeasonsCell = document.getElementById('averageSeasons');
    if (averageSeasonsCell) {
        averageSeasonsCell.textContent = averageSeasons;
    }
}
mostrarSeries(series);
