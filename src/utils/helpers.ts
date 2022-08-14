interface IAddressShortner {
  address: string;
  shorter: boolean;
}
export const addressShortner = ({ address, shorter }: IAddressShortner) => {
  if (shorter)
    return `${address.slice(0, 5)}...${address.slice(
      address.length - 4,
      address.length,
    )}`;
  return `${address.slice(0, 12)}.....${address.slice(
    address.length - 10,
    address.length,
  )}`;
};
