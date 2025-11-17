function parseQueryString(queryString) {
  const queryParams = {};
  if (!queryString || queryString.length === 0) {
    return queryParams;
  }

  if (queryString.startsWith("?")) {
    queryString = queryString.slice();
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const findIndexOfEqual = pair.indexOf("=");
    const key = pair.slice(0,findIndexOfEqual);
    const value = pair.slice(findIndexOfEqual+1);
    queryParams[key] = value;
  }

  return queryParams;
}

module.exports = parseQueryString;
