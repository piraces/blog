module.exports = function(collection) {
  let tagSet = new Set();
  collection.getAll().forEach(function(item) {
    if( "short" in item.data  && item.data.short ) {
      tagSet.add(item);
    }
  });

  // returning an array in addCollection works in Eleventy 0.5.3
  return [...tagSet].sort((a, b) => b.date - a.date);
};
