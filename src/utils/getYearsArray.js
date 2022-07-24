export function getYearsArray() {
  const yearsArray = [];
  const today = new Date();
  const currentYear = today.getFullYear();
  let year;

  for (year = 1970; year <= currentYear; year++) {
    yearsArray.push({ value: year, label: year });
  }
  return yearsArray.reverse();
}
