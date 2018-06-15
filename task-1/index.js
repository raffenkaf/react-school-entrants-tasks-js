/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
    let Spiral = {
        size: 5,
        direction: ['right', 'down', 'left', 'top'],
        currentDirection: 0,
        resultArray: [],
        currentX: 0,
        currentY: 0,
        createSpiralArray: function (size) {
            this.size = size;
            let iterator;
            for (iterator = 1; iterator <= this.size; iterator++) {
                this.resultArray.push([]);
            }
            this.fillSpiralArrayFields();
            return this.resultArray;
        },
        fillSpiralArrayFields: function () {
            let iterator;
            for (iterator = 1; iterator <= (this.size * this.size); iterator++) {
                this.resultArray[this.currentY][this.currentX] = iterator;
                if (!this.isNextCellExistAndEmpty()) {
                    this.switchDirection();
                }
                this.changeCell();
            }
        },
        changeCell: function () {
            switch (this.currentDirection) {
                case 0:
                    this.currentX = this.currentX + 1;
                    break;
                case 1:
                    this.currentY = this.currentY + 1;
                    break;
                case 2:
                    this.currentX = this.currentX - 1;
                    break;
                case 3:
                    this.currentY = this.currentY - 1;
                    break;
            }
        },
        switchDirection: function () {
            if (this.currentDirection === (this.direction.length - 1)) {
                this.currentDirection = 0;
            } else {
                this.currentDirection = this.currentDirection + 1;
            }
        },
        isNextCellExistAndEmpty: function () {
            switch (this.currentDirection) {
                case 0:
                    if ((this.currentX + 1) === this.size) return false;
                    return this.resultArray[this.currentY][this.currentX + 1] == null;
                case 1:
                    if ((this.currentY + 1) === this.size) return false;
                    return this.resultArray[this.currentY + 1][this.currentX] == null;
                case 2:
                    if ((this.currentX - 1) === -1) return false;
                    return this.resultArray[this.currentY][this.currentX - 1] == null;
                case 3:
                    if ((this.currentY - 1) === -1) return false;
                    return this.resultArray[this.currentY - 1][this.currentX] == null;
            }
        }
    };

    return Spiral.createSpiralArray(n);
}

export default fillSpiralMatrix;
