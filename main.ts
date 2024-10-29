import { series } from './data.js';
import { Serie } from './Serie.js';

let seriesTable: HTMLElement = document.getElementById('series')!;
let seriesTbody: HTMLElement = document.createElement('tbody');

function mostrarSeries(series: Serie[]):void {

    
    series.forEach((serie) => {
    let trEelement: HTMLElement = document.createElement('tr');
    trEelement.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    seriesTbody.appendChild(trEelement);

}); 

    seriesTable.appendChild(seriesTbody);

    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const averageSeasons = (totalSeasons / series.length).toFixed(2);

    let averageSeasonsCell: HTMLElement = document.getElementById('averageSeasons')!;
    if (averageSeasonsCell) {
        averageSeasonsCell.textContent = averageSeasons;
    }

}

mostrarSeries(series);