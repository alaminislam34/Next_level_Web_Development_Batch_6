// practice cache implementation with Map()
const cacheData = new Map();

const expensiveTask = (id) => {
  console.log("Ran the expensive task for:", id);

  return {
    id: id,
    data: `Some data for id:${id}`,
    timestamp: new Date().getTime(),
  };
};

const getData = (id) => {
  if (cacheData.has(id)) {
    console.log("Cache Hit id:", id);
    return cacheData.get(id);
  }

  console.log("Cache Miss id:", id);
  const data = expensiveTask(id);
  cacheData.set(id, data);
  return data;
};

console.log(cacheData);

console.log(getData(123));
console.log(getData(123));
console.log(cacheData);
