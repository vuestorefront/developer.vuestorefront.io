export function debounce<A = unknown, R = void>(
  fn: (args?: A) => R,
  ms = 1000,
): (args?: A) => Promise<R> {
  let timer: NodeJS.Timeout;
  return (args?: A): Promise<R> =>
    new Promise((resolve) => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        resolve(fn(args));
      }, ms);
    });
}
