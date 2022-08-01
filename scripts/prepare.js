const isCi = process.env.CI !== undefined;
if (!isCi) {
  import('husky').then((m) => {
    m.install();
  });
}
