export const getStyle = (style, mode = {}, additional = []) => {
  const modeStyles = Object.entries(mode)
    .filter(([, value]) => Boolean(value))
    .map(([key]) => key)

  return [style, ...modeStyles, ...additional]
    .filter(Boolean)
    .join(' ')
};
