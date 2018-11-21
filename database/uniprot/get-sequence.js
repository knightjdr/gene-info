const getSequence = sequence => ({
  length: Number(sequence.$.length),
  mw: Number(sequence.$.mass),
});

module.exports = getSequence;
