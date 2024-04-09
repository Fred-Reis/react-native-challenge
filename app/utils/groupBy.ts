export function groupBy(arr: any[], key: string) {
  const result = arr.reduce((acc, cur) => {
    acc[cur[key]] = acc[cur[key]] || [];
    acc[cur[key]] = [...acc[cur[key]], cur];

    return acc;
  }, Object.create(null));

  return result;
}
