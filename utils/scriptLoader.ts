export async function scriptLoader(
  url: string,
  id: string,
  htmlTag: 'script' | 'link' = 'script',
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    const head = document.head || document.querySelectorAll('head')[0];
    let tag;

    if (htmlTag === 'script') {
      tag = document.createElement(htmlTag);
      tag.async = true;
      tag.src = url;
      tag.id = id;
    }

    if (htmlTag === 'link') {
      tag = document.createElement(htmlTag);
      tag.type = 'text/css';
      tag.rel = 'stylesheet';
      tag.href = url;
    }
    if (tag) {
      head.append(tag);

      tag.addEventListener('load', () => resolve(true));
      tag.addEventListener(
        'error',
        (
          _event: Event | string,
          _source?: string,
          _lineno?: number,
          _colno?: number,
          error?: Error,
        ) => reject(error),
      );
    }
  });
}

export default scriptLoader;
