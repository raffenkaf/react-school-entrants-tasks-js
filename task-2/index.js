/**
 * Проверяет состоят ли массивы arr1 и arr2 из одинакового
 * числа одних и тех же элементов
 *
 * @param {Number[]} arr1 - отсортированный по возрастанию
 *                          массив уникальных элементов
 * @param {Number[]} arr2 - массив произвольной длинны произвольных чисел
 * @returns {Boolean}
 */
function haveSameItems(arr1, arr2) {
    let arr11 = arr1.slice();
    let arr22 = arr2.slice();

    if (arr11.length !== arr22.length) {
        return false;
    }

    arr22.sort();

    let iterator;
    for(iterator = 0; iterator < arr11.length; iterator++){
        if (arr11[iterator] !== arr22[iterator]) return false;
    }

    return true;
}

export default haveSameItems;
