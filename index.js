"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("./data");
const seriesTableBody = document.getElementById('seriesTableBody');
data_1.series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${serie.id}</td>
        <td>${serie.name}</td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
    `;
    seriesTableBody === null || seriesTableBody === void 0 ? void 0 : seriesTableBody.appendChild(row);
});
