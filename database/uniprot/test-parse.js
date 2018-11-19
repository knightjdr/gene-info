const { parseString } = require('xml2js');

const xml = `
  <?xml version="1.0" encoding="UTF-8"?>
  <uniprot xmlns="http://uniprot.org/uniprot"
   xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://uniprot.org/uniprot http://www.uniprot.org/docs/uniprot.xsd">
  <entry dataset="Swiss-Prot" created="2011-06-28" modified="2018-11-07" version="34" xmlns="http://uniprot.org/uniprot">
    <accession>Q6GZX4</accession>
    <name>001R_FRG3G</name>
    <protein>
      <recommendedName>
        <fullName>Putative transcription factor 001R</fullName>
      </recommendedName>
    </protein>
    <gene>
      <name type="ORF">FV3-001R</name>
      <name type="ORF">FV3-001R</name>
    </gene>
    <organism>
      <name type="scientific">Frog virus 3</name>
      <name type="common">isolate Goorha</name>
      <name type="synonym">FV-3</name>
      <dbReference type="NCBI Taxonomy" id="654924"/>
      <lineage>
        <taxon>Viruses</taxon>
        <taxon>dsDNA viruses, no RNA stage</taxon>
        <taxon>Iridoviridae</taxon>
        <taxon>Alphairidovirinae</taxon>
        <taxon>Ranavirus</taxon>
      </lineage>
    </organism>
    </entry>
    </uniprot>
`;

parseString(xml, (err, result) => {
  console.log(result.uniprot.entry[0].accession[0]);
});
