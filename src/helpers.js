export const objectIsEmpty = (object) => {
    return object && Object.keys(object).length === 0 && object.constructor === Object;
}

export const arrayIsEmpty = (array) => {
    return array && array.length === 0 && array.constructor === Array;
}