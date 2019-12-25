const formatEnum = value => {
  if (value) {
    const formattedEnum = value.split("_").join(" ");
    return formattedEnum;
  }
  return "";
};

export default formatEnum;
