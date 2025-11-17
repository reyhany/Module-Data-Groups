function createLookup() {
  const countryCurrency = [
  ['US', 'USD'], 
  ['CA', 'CAD'], 
  ['JP', 'JPY'], 
  ['GB', 'GBP'], 
  ['EU', 'EUR'], 
  ['AU', 'AUD'], 
  ['CH', 'CHF'], 
  ['CN', 'CNY'], 
  ['IN', 'INR'], 
  ['BR', 'BRL'], 
  ['ZA', 'ZAR'], 
  ['KR', 'KRW'], 
  ['MX', 'MXN'], 
  ['RU', 'RUB'], 
  ['SE', 'SEK'], 
  ['NZ', 'NZD'], 
  ];
    const lookup = {};
  for(const [key, value] of countryCurrency) {
    lookup[key] = value;
  }
  return lookup;
}

module.exports = createLookup;
