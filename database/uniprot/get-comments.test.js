/* eslint no-console: 0 */

const convertXML = require('../helpers/convert-xml');
const getComments = require('./get-comments');

const xmlEntry = `
<entry>
  <comment type="disease" evidence="8">
    <disease id="DI-00257">
      <name>Cerebral cavernous malformations 3</name>
      <acronym>CCM3</acronym>
      <description>A congenital vascular anomaly of the central nervous system that can result in hemorrhagic stroke (PubMed:11111111).</description>
      <dbReference type="MIM" id="603285"/>
    </disease>
    <text>The disease is caused by mutations affecting the gene represented in this entry (PubMed:11111111).</text>
  </comment>
  <comment type="disruption phenotype">
    <text evidence="2">Animals are sterile and develop slowly.</text>
  </comment>
  <comment type="disease">
    <text evidence="7">ACTA2 mutations predispose patients to a variety of diffuse and diverse vascular diseases.</text>
  </comment>
  <comment type="disease">
    <text>Increased levels of C3 and its cleavage product ASP, are associated with obesity.</text>
  </comment>
  <comment type="function">
    <text evidence="69 77 78 79 80 81 82 83 85 89 90 91 101 112 119 120 132 133 138 139 142" status="by similarity">Receptor tyrosine kinase binding ligands of the EGF family and activating several signaling cascades to convert extracellular cues into appropriate cellular responses (PubMed:2790960, PubMed:10805725, PubMed:27153536). Known ligands include EGF, TGFA/TGF-alpha, AREG, epigen/EPGN, BTC/betacellulin, epiregulin/EREG and HBEGF/heparin-binding EGF (PubMed:2790960, PubMed:7679104, PubMed:8144591, PubMed:9419975, PubMed:15611079, PubMed:12297049, PubMed:27153536, PubMed:20837704). Ligand binding triggers receptor homo- and/or heterodimerization and autophosphorylation on key cytoplasmic residues. The phosphorylated receptor recruits adapter proteins like GRB2 which in turn activates complex downstream signaling cascades. Activates at least 4 major downstream signaling cascades including the RAS-RAF-MEK-ERK, PI3 kinase-AKT, PLCgamma-PKC and STATs modules (PubMed:27153536). May also activate the NF-kappa-B signaling cascade (PubMed:11116146). Also directly phosphorylates other proteins like RGS16, activating its GTPase activity and probably coupling the EGF receptor signaling to the G protein-coupled receptor signaling (PubMed:11602604). Also phosphorylates MUC1 and increases its interaction with SRC and CTNNB1/beta-catenin (PubMed:11483589). Plays a role in enhancing learning and memory performance.</text>
  </comment>
  <comment type="function">
    <text>Isoform 2 may act as an antagonist of EGF action.</text>
  </comment>
  <comment type="function">
    <text evidence="122">(Microbial infection) Acts as a receptor for hepatitis C virus (HCV) in hepatocytes and facilitates its cell entry. Mediates HCV entry by promoting the formation of the CD81-CLDN1 receptor complexes that are essential for HCV entry and by enhancing membrane fusion of cells expressing HCV envelope glycoproteins.</text>
  </comment>
  <comment type="subcellular location">
    <subcellularLocation>
      <location evidence="102 132 133">Cell membrane</location>
      <topology evidence="132">Single-pass type I membrane protein</topology>
    </subcellularLocation>
    <subcellularLocation>
      <location evidence="132">Endoplasmic reticulum membrane</location>
      <topology>Single-pass type I membrane protein</topology>
    </subcellularLocation>
    <subcellularLocation>
      <location>Golgi apparatus membrane</location>
      <topology>Single-pass type I membrane protein</topology>
    </subcellularLocation>
    <subcellularLocation>
      <location>Nucleus membrane</location>
      <topology>Single-pass type I membrane protein</topology>
    </subcellularLocation>
    <subcellularLocation>
      <location evidence="102 132">Endosome</location>
    </subcellularLocation>
    <subcellularLocation>
      <location>Endosome membrane</location>
    </subcellularLocation>
    <subcellularLocation>
      <location evidence="101 117 118">Nucleus</location>
    </subcellularLocation>
    <text evidence="102 118 132 133">In response to EGF, translocated from the cell membrane to the nucleus via Golgi and ER (PubMed:20674546). Endocytosed upon activation by ligand (PubMed:2790960, PubMed:17182860, PubMed:27153536). Colocalized with GPER1 in the nucleus of estrogen agonist-induced cancer-associated fibroblasts (CAF) (PubMed:20551055).</text>
  </comment>
  <comment type="subcellular location">
    <molecule>Isoform 2</molecule>
    <subcellularLocation>
      <location>Secreted</location>
    </subcellularLocation>
  </comment>
</entry>
`;

let exampleEntry;
beforeAll(async (done) => {
  convertXML(xmlEntry)
    .then((converted) => {
      exampleEntry = converted.entry;
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });
});

describe('Get comments', () => {
  describe('with applicable comments', () => {
    let result;

    beforeAll(() => {
      result = getComments(exampleEntry.comment);
    });

    it('should return first function comment (paragraph) as description', () => {
      const expected = 'Receptor tyrosine kinase binding ligands of the EGF family and activating several signaling cascades to convert extracellular cues into appropriate cellular responses. Known ligands include EGF, TGFA/TGF-alpha, AREG, epigen/EPGN, BTC/betacellulin, epiregulin/EREG and HBEGF/heparin-binding EGF. Ligand binding triggers receptor homo- and/or heterodimerization and autophosphorylation on key cytoplasmic residues. The phosphorylated receptor recruits adapter proteins like GRB2 which in turn activates complex downstream signaling cascades. Activates at least 4 major downstream signaling cascades including the RAS-RAF-MEK-ERK, PI3 kinase-AKT, PLCgamma-PKC and STATs modules. May also activate the NF-kappa-B signaling cascade. Also directly phosphorylates other proteins like RGS16, activating its GTPase activity and probably coupling the EGF receptor signaling to the G protein-coupled receptor signaling. Also phosphorylates MUC1 and increases its interaction with SRC and CTNNB1/beta-catenin. Plays a role in enhancing learning and memory performance.';
      expect(result.description).toBe(expected);
    });

    it('should return localizations (unsorted)', () => {
      const expected = [
        'Cell membrane',
        'Endoplasmic reticulum membrane',
        'Golgi apparatus membrane',
        'Nucleus membrane',
        'Endosome',
        'Endosome membrane',
        'Nucleus',
        'Secreted',
      ];
      expect(result.localization).toEqual(expected);
    });

    it('should return pathologies', () => {
      const expected = [
        {
          description: 'A congenital vascular anomaly of the central nervous system that can result in hemorrhagic stroke.',
          mim: 603285,
          name: 'Cerebral cavernous malformations 3',
          uniprotID: 'DI-00257',
        },
        {
          description: 'Animals are sterile and develop slowly.',
          mim: undefined,
          name: '',
          uniprotID: '',
        },
        {
          description: 'ACTA2 mutations predispose patients to a variety of diffuse and diverse vascular diseases.',
          mim: undefined,
          name: '',
          uniprotID: '',
        },
        {
          description: 'Increased levels of C3 and its cleavage product ASP, are associated with obesity.',
          mim: undefined,
          name: '',
          uniprotID: '',
        },
      ];
      expect(result.pathology).toEqual(expected);
    });
  });

  describe('withoutout applicable comments', () => {
    let result;

    beforeAll(() => {
      result = getComments([]);
    });

    it('should return emptry string as description', () => {
      const expected = '';
      expect(result.description).toBe(expected);
    });

    it('should return empty array for localizations', () => {
      const expected = [];
      expect(result.localization).toEqual(expected);
    });

    it('should return emptry array for pathologies', () => {
      const expected = [];
      expect(result.pathology).toEqual(expected);
    });
  });
});
