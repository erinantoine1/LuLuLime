const sortByRelevance = (a, b) => {
  const currentDate = new Date().getTime();
  const aDate = new Date(a.date).getTime();
  const bDate = new Date(b.date).getTime();
  // If helpfulness is the same sort by date
  if (a.helpfulness === b.helpfulness) {
    return aDate < bDate ? 1 : -1;
  }
  const aRelevance = (currentDate / aDate) + a.helpfulness;
  const bRelevance = (currentDate / bDate) + b.helpfulness;
  return aRelevance < bRelevance ? 1 : -1;
};

export default sortByRelevance;
