export const objectIsEmpty = (object) => {
    return Object.keys(object).length === 0 && object.constructor === Object;
}