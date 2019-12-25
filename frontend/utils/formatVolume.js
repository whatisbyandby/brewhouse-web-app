const formatBatchVolume = volume => {
  const parsedVol = (volume / 3.785).toFixed(1);
  return parsedVol;
};

export default formatBatchVolume;
