const findMatching = (drivers,name) => drivers.filter(element => element.toLowerCase()===(name.toLowerCase()));
const fuzzyMatch = (drivers,name) => drivers.filter(element => element.slice(0,name.length)===name);
const matchName = (drivers,name) => drivers.filter(element => element.name===name);