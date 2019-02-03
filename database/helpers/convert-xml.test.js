const convertXML = require('./convert-xml');

describe('Convert xml', () => {
  it('should convert an XML string to js', async (done) => {
    const xml = `<entry>
    <accession>Q9BUL8</accession>
    <accession>A8K515</accession>
    <accession>D3DNN5</accession>
    <accession>O14811</accession>
    <protein>
      <recommendedName>
        <fullName>Programmed cell death protein 10</fullName>
      </recommendedName>
      <alternativeName>
        <fullName>Cerebral cavernous malformations 3 protein</fullName>
      </alternativeName>
      <alternativeName>
        <fullName>TF-1 cell apoptosis-related protein 15</fullName>
      </alternativeName>
    </protein>
    <gene>
      <name type='primary'>PDCD10</name>
      <name type='synonym'>CCM3</name>
      <name type='synonym'>TFAR15</name>
      <name type='ordered locus'>locusTest</name>
      <name type='ORF'>orfTest1</name>
      <name type='ORF'>orfTest2</name>
    </gene>
    </entry>
    `;
    const expected = {
      entry: {
        accession: ['Q9BUL8', 'A8K515', 'D3DNN5', 'O14811'],
        gene: [
          {
            name: [
              { $: { type: 'primary' }, _: 'PDCD10' },
              { $: { type: 'synonym' }, _: 'CCM3' },
              { $: { type: 'synonym' }, _: 'TFAR15' },
              { $: { type: 'ordered locus' }, _: 'locusTest' },
              { $: { type: 'ORF' }, _: 'orfTest1' },
              { $: { type: 'ORF' }, _: 'orfTest2' },
            ],
          },
        ],
        protein: [
          {
            alternativeName: [
              { fullName: ['Cerebral cavernous malformations 3 protein'] },
              { fullName: ['TF-1 cell apoptosis-related protein 15'] },
            ],
            recommendedName: [{ fullName: ['Programmed cell death protein 10'] }],
          },
        ],
      },
    };
    const converted = await convertXML(xml);
    expect(converted).toEqual(expected);
    done();
  });
});
