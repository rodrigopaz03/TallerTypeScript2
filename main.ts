import { series } from './data.js';
import { Serie } from './Serie.js';

let seriesTable: HTMLElement = document.getElementById('series')!;
let seriesTbody: HTMLElement = document.createElement('tbody');
let serieDetails: HTMLElement = document.getElementById('serieDetails')!;
let cardTitle: HTMLElement = document.getElementById('cardTitle')!;
let cardDescription: HTMLElement = document.getElementById('cardDescripction')!;
let cardChannel: HTMLElement = document.getElementById('cardChannel')!;
let cardSeasons: HTMLElement = document.getElementById('cardSeasons')!;

function mostrarSeries(series: Serie[]): void {
    series.forEach((serie) => {
        let trElement: HTMLElement = document.createElement('tr');
        trElement.innerHTML = `
            <td>${serie.id}</td>
            <td class="serie-name">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        
       
        trElement.addEventListener('click', () => mostrarDetallesSerie(serie));

        seriesTbody.appendChild(trElement);
    });

    seriesTable.appendChild(seriesTbody);
    calcularPromedio(series);
}

function calcularPromedio(series: Serie[]): void {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    const averageSeasons = (totalSeasons / series.length).toFixed(2);
    let averageSeasonsCell: HTMLElement = document.getElementById('averageSeasons')!;
    if (averageSeasonsCell) {
        averageSeasonsCell.textContent = averageSeasons;
    }
}

function mostrarDetallesSerie(serie: Serie): void {
    serieDetails.style.display = 'block';
    cardTitle.textContent = serie.name;
    cardChannel.textContent = `Channel: ${serie.channel}`;
    cardSeasons.textContent = `Seasons: ${serie.seasons}`;

    let cardImage: HTMLImageElement = document.getElementById('cardImage') as HTMLImageElement;
    cardImage.src = serie.imageUrl;
    cardImage.alt = `Image of ${serie.name}`;

    let cardDescription: HTMLElement = document.getElementById('cardDescription')!;
    cardDescription.textContent = serie.description;
}


mostrarSeries(series);
