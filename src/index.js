const parsePaths = pathArgs =>
  pathArgs.reduce(
    (resultArray, currentPath) =>
      Array.isArray(currentPath) && currentPath.length > 0
        ? [...resultArray, ...currentPath]
        : typeof currentPath === 'string'
        ? [...resultArray, ...currentPath.split('.')]
        : undefined,
    [],
  );

/**
 * Takes a variable number of arguments that will represent a path, returns a function that will
 * take an object as an argument and will return the value that resides in the path of the specified object.
 *
 * @param  {...string | string[]} paths Paths in the form of string keys, or arrays of string keys belonging to the object.
 * @param  {Object} obj The object in which to follow the specified path and extract the value.
 *
 * @returns A function that will take an object as an argument, that returns the value that resided in the specified path
 *          of that object
 *
 * @example
 *
 * const obj = { a: { b: { c: 123 }}};
 *
 * optional('a.b.c')(obj); // returns 123
 * optional(['a', 'b', 'c'])(obj); // returns 123
 * optional('a.c')(obj); // returns undefined
 */
const optional = (...paths) => obj => {
  if (paths.length < 1) return;

  const parsedPaths = parsePaths(paths);
  
  return (
    parsedPaths &&
    parsePaths(paths).reduce((val, path) => val && val[path], obj)
  );
};

module.exports = optional;
