'use strict';
const settings = {
    rowCount: 8,
    colCount: 8,
    playerCellColor: '#AA3333',
    emptyCellColor: '#070606',
};

const game = {
    settings,
    containerElement: document.getElementById('game'),
    cellElements: [],

    run() {
          this.render();
    },


    render() {
        this.containerElement.innerHTML = '';

        for (let row = 0; row < this.settings.rowCount; row++) {
            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);

            for (let col = 0; col < this.settings.colCount; col++) {
                const cell = document.createElement('td');
                trElem.appendChild(cell);
                if ((row - col) % 2 === 0) {
                    cell.style.backgroundColor = this.settings.emptyCellColor
                }
            }
        }

        // this.cellElements.forEach(cell => cell.style.backgroundColor = this.settings.emptyCellColor);

    },

};

game.run();