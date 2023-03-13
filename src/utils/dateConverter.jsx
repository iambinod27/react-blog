export default function dateConverter(utc) {
  const date = new Date(utc);
  const options = { month: "long", day: "numeric" };
  const textDate = date.toLocaleDateString("en-US", options);

  return textDate;
}
