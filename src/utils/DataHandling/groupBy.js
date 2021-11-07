const groupBy = key => array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key]
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj)
    return objectsByKeyValue
  }, {})

export default groupBy

// const groupBy = keys => array =>
//   array.reduce((objectsByKeyValue, obj) => {
//     const value = keys.map(key => obj[key]).join('-');
//     objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
//     return objectsByKeyValue;
//   }, {});

// const groupByBrand = groupBy(['brand']);
// const groupByColor = groupBy(['color']);
// const groupByBrandAndYear = groupBy(['brand', 'produced']);

// Note: This is not obsolette, I am using Lodash ..
