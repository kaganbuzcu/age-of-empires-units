export default function apiCaller<T>(
  method: string,
  path: string,
  data?: any,
): Promise<T[] | null> {
  const request = new Request('./age-of-empires-units.json', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  return fetch(request).then((res) => {
    return res.json();
  });
}
