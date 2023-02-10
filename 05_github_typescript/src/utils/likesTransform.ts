export const likesTransform = (count: number) => {
  if (count > 999) {
    return (count / 1000).toFixed(1).toString() + 'K';
  }
  return count;
};
