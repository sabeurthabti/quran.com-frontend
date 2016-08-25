export function alphabetically(property) {

  return (a, b) => {
    const textA = a[property].toUpperCase();
    const textB = b[property].toUpperCase();

    if (textA < textB) {
      return -1;
    }

    if (textA > textB) {
      return 1;
    }

    return 0;
  };
}
