export const useUuid = () => {
  const str = () =>
    // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
    `00000000000000000${(Math.random() * 0xff_ff_ff_ff_ff_ff_ff_ff).toString(
      16,
    )}`.slice(-16);
  const uuid = () => {
    const a = str();
    const b = str();
    return `${a.slice(0, 8)}-${a.slice(8, 12)}-4${a.slice(13)}-a${b.slice(
      1,
      4,
    )}-${b.slice(4)}`;
  };

  return uuid();
};
