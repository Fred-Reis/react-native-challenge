export function parseDate(year: string): number {
  const parsedYear = new Date(year).getFullYear();
  return parsedYear;
}

export function parseRatings(rating: number): number {
  const parsedRating = Math.round(rating / 2);
  return parsedRating;
}
