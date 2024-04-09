type PathProps = {
  size?: string;
  path?: string;
};

export function parsePath({size = 'original', path}: PathProps) {
  return `https://image.tmdb.org/t/p/${size}/${path}`;
}
