import { series } from './data';
import { Serie } from './Serie';

function renderTable() {
    const seriesTableBody = document.getElementById('seriesTableBody');
    seriesTableBody!.innerHTML = '';  
    series.forEach((serie, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="series-link" data-index="${index}">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        seriesTableBody?.appendChild(row);
    });

    
    const links = document.querySelectorAll('.series-link');
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            const index = (event.target as HTMLElement).getAttribute('data-index');
            if (index !== null) {
                showSeriesDetail(parseInt(index));
            }
        });
    });
}

function showSeriesDetail(index: number) {
    const selectedSeries = series[index];
    const seriesDetailCard = document.getElementById('seriesDetailCard')!;
    const seriesImage = document.getElementById('seriesImage') as HTMLImageElement;
    const seriesTitle = document.getElementById('seriesTitle')!;
    const seriesDescription = document.getElementById('seriesDescription')!;
    const seriesLink = document.getElementById('seriesLink') as HTMLAnchorElement;

    seriesImage.src = `./images/${selectedSeries.name.replace(/\s+/g, '').toLowerCase()}.jpg`;  // Imagen simulada
    seriesTitle.textContent = selectedSeries.name;
    seriesDescription.textContent = `This is a description of the series ${selectedSeries.name}.`;
    seriesLink.href = `https://www.example.com/series/${selectedSeries.name.replace(/\s+/g, '').toLowerCase()}`;

    seriesDetailCard.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', renderTable);

