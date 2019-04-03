const xmlEntry = `
<entry dataset="Swiss-Prot" created="2005-10-11" modified="2018-11-07" version="145" xmlns="http://uniprot.org/uniprot">
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
  <name type="primary">PDCD10</name>
  <name type="synonym">CCM3</name>
  <name type="synonym">TFAR15</name>
  <name type="ordered locus">locusTest</name>
  <name type="ORF">orfTest1</name>
  <name type="ORF">orfTest2</name>
</gene>
<organism>
  <name type="scientific">Homo sapiens</name>
  <name type="common">Human</name>
  <dbReference type="NCBI Taxonomy" id="9606"/>
  <lineage>
    <taxon>Eukaryota</taxon>
    <taxon>Metazoa</taxon>
    <taxon>Chordata</taxon>
    <taxon>Craniata</taxon>
    <taxon>Vertebrata</taxon>
    <taxon>Euteleostomi</taxon>
    <taxon>Mammalia</taxon>
    <taxon>Eutheria</taxon>
    <taxon>Euarchontoglires</taxon>
    <taxon>Primates</taxon>
    <taxon>Haplorrhini</taxon>
    <taxon>Catarrhini</taxon>
    <taxon>Hominidae</taxon>
    <taxon>Homo</taxon>
  </lineage>
</organism>
<comment type="function">
  <text evidence="7 8 9 10 12" status="by similarity">Promotes cell proliferation. Modulates apoptotic pathways. Increases mitogen-activated protein kinase activity and STK26 activity (PubMed:27807006, PubMed:20489202). Important for cell migration, and for normal structure and assembly of the Golgi complex (PubMed:27807006). Important for KDR/VEGFR2 signaling. Increases the stability of KDR/VEGFR2 and prevents its breakdown. Required for normal cardiovascular development. Required for normal angiogenesis, vasculogenesis and hematopoiesis during embryonic development.</text>
</comment>
<comment type="subunit">
  <text evidence="6 9 10 11 12">Homodimer (PubMed:20489202). Interacts (via C-terminus) with CCM2 (PubMed:17360971, PubMed:20489202). Interacts (via C-terminus) with PXN (PubMed:20489202). Interacts (via N-terminus) with STK25 (PubMed:17360971, PubMed:20332113). Interacts (via N-terminus) with STK26 (PubMed:17360971, PubMed:20332113, PubMed:27807006). Interacts (via N-terminus) with STK24 (PubMed:20332113, PubMed:27807006). Interacts with GOLGA2 (PubMed:20332113). Identified in a complex with KRIT1 and CCM2. Interacts with KDR/VEGFR2. Interaction with KDR/VEGFR2 is enhanced by stimulation with VEGFA (By similarity). Interacts with RIPOR1 (via C-terminus); this interaction is required for the association of RIPOR1 with either STK24 and STK26 kinases and occurs in a Rho-independent manner (PubMed:27807006).</text>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-10282278">
    <id>Q96BA2</id>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>5</experiments>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-10216552">
    <id>Q8IY42</id>
    <label>C4orf19</label>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>5</experiments>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-1573056">
    <id>Q9BSQ5</id>
    <label>CCM2</label>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>5</experiments>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-6137569">
    <id>Q499L9</id>
    <label>MST4</label>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>5</experiments>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-355227">
    <id>Q12923</id>
    <label>PTPN13</label>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>3</experiments>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-740175">
    <id>Q9Y6E0</id>
    <label>STK24</label>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>9</experiments>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-10299018">
    <id>Q9Y6E0-2</id>
    <label>STK24</label>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>5</experiments>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-618295">
    <id>O00506</id>
    <label>STK25</label>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>23</experiments>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-618239">
    <id>Q9P289</id>
    <label>STK26</label>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>7</experiments>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-15996971">
    <id>Q9P289-1</id>
    <label>STK26</label>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>10</experiments>
</comment>
<comment type="interaction">
  <interactant intactId="EBI-740195"/>
  <interactant intactId="EBI-1046642">
    <id>O43815</id>
    <label>STRN</label>
  </interactant>
  <organismsDiffer>false</organismsDiffer>
  <experiments>4</experiments>
</comment>
<comment type="subcellular location">
  <subcellularLocation>
    <location>Cytoplasm</location>
  </subcellularLocation>
  <subcellularLocation>
    <location>Golgi apparatus membrane</location>
    <topology>Peripheral membrane protein</topology>
    <orientation>Cytoplasmic side</orientation>
  </subcellularLocation>
  <subcellularLocation>
    <location>Cell membrane</location>
    <topology>Peripheral membrane protein</topology>
    <orientation>Cytoplasmic side</orientation>
  </subcellularLocation>
  <text>Partially co-localizes with endogenous PXN at the leading edges of migrating cells.</text>
</comment>
<comment type="tissue specificity">
  <text evidence="8">Ubiquitous.</text>
</comment>
<comment type="disease" evidence="8">
  <disease id="DI-00257">
    <name>Cerebral cavernous malformations 3</name>
    <acronym>CCM3</acronym>
    <description>A congenital vascular anomaly of the central nervous system that can result in hemorrhagic stroke (PubMed:11111111).</description>
    <dbReference type="MIM" id="603285"/>
  </disease>
  <text>The disease is caused by mutations affecting the gene represented in this entry.</text>
</comment>
<comment type="disruption phenotype">
  <text evidence="2">Animals are sterile and develop slowly (PubMed:11111111).</text>
</comment>
<comment type="similarity">
  <text evidence="14">Belongs to the PDCD10 family.</text>
</comment>
<dbReference type="EMBL" id="AF022385">
  <property type="protein sequence ID" value="AAB72225.1"/>
  <property type="molecule type" value="mRNA"/>
</dbReference>
<dbReference type="EMBL" id="CR457107">
  <property type="protein sequence ID" value="CAG33388.1"/>
  <property type="molecule type" value="mRNA"/>
</dbReference>
<dbReference type="EMBL" id="AK291130">
  <property type="protein sequence ID" value="BAF83819.1"/>
  <property type="molecule type" value="mRNA"/>
</dbReference>
<dbReference type="EMBL" id="AC079822">
  <property type="status" value="NOT_ANNOTATED_CDS"/>
  <property type="molecule type" value="Genomic_DNA"/>
</dbReference>
<dbReference type="EMBL" id="CH471052">
  <property type="protein sequence ID" value="EAW78574.1"/>
  <property type="molecule type" value="Genomic_DNA"/>
</dbReference>
<dbReference type="EMBL" id="CH471052">
  <property type="protein sequence ID" value="EAW78575.1"/>
  <property type="molecule type" value="Genomic_DNA"/>
</dbReference>
<dbReference type="EMBL" id="CH471052">
  <property type="protein sequence ID" value="EAW78576.1"/>
  <property type="molecule type" value="Genomic_DNA"/>
</dbReference>
<dbReference type="EMBL" id="CH471052">
  <property type="protein sequence ID" value="EAW78577.1"/>
  <property type="molecule type" value="Genomic_DNA"/>
</dbReference>
<dbReference type="EMBL" id="CH471052">
  <property type="protein sequence ID" value="EAW78578.1"/>
  <property type="molecule type" value="Genomic_DNA"/>
</dbReference>
<dbReference type="EMBL" id="CH471052">
  <property type="protein sequence ID" value="EAW78580.1"/>
  <property type="molecule type" value="Genomic_DNA"/>
</dbReference>
<dbReference type="EMBL" id="CH471052">
  <property type="protein sequence ID" value="EAW78581.1"/>
  <property type="molecule type" value="Genomic_DNA"/>
</dbReference>
<dbReference type="EMBL" id="BC002506">
  <property type="protein sequence ID" value="AAH02506.1"/>
  <property type="molecule type" value="mRNA"/>
</dbReference>
<dbReference type="EMBL" id="BC016353">
  <property type="protein sequence ID" value="AAH16353.1"/>
  <property type="molecule type" value="mRNA"/>
</dbReference>
<dbReference type="dictyBase" id="DDB_G0286499">
  <property type="gene designation" value="pspG"/>
</dbReference>
<dbReference type="FlyBase" id="flybaseTest">
  <property type="gene designation" value="ccm3"/>
</dbReference>
<dbReference type="MGI" id="MGITest">
  <property type="gene designation" value="CCM3"/>
</dbReference>
<dbReference type="PomBase" id="SPAC24B11.06c">
  <property type="gene designation" value="HOG1"/>
</dbReference>
<dbReference type="SGD" id="SGDTest">
  <property type="gene designation" value="CCM3"/>
</dbReference>
<dbReference type="TAIR" id="locus:2196506">
  <property type="gene designation" value="AT1G22300"/>
</dbReference>
<dbReference type="WormBase" id="M117.2a">
  <property type="protein sequence ID" value="CE06200"/>
  <property type="gene ID" value="WBGene00003920"/>
  <property type="gene designation" value="par-5"/>
</dbReference>
<dbReference type="Xenbase" id="XB-GENE-984751">
  <property type="gene designation" value="htr1a"/>
</dbReference>
<dbReference type="ZFIN" id="ZFINTest">
  <property type="gene designation" value="CCM3"/>
</dbReference>
<dbReference type="CCDS" id="CCDS3202.1"/>
<dbReference type="RefSeq" id="NP_009148.2">
  <property type="nucleotide sequence ID" value="NM_007217.3"/>
</dbReference>
<dbReference type="RefSeq" id="NP_665858.1">
  <property type="nucleotide sequence ID" value="NM_145859.1"/>
</dbReference>
<dbReference type="RefSeq" id="NP_665859.1">
  <property type="nucleotide sequence ID" value="NM_145860.1"/>
</dbReference>
<dbReference type="RefSeq" id="XP_005247143.1">
  <property type="nucleotide sequence ID" value="XM_005247086.4"/>
</dbReference>
<dbReference type="RefSeq" id="XP_005247144.1">
  <property type="nucleotide sequence ID" value="XM_005247087.4"/>
</dbReference>
<dbReference type="RefSeq" id="XP_005247145.1">
  <property type="nucleotide sequence ID" value="XM_005247088.3"/>
</dbReference>
<dbReference type="RefSeq" id="XP_006713548.1">
  <property type="nucleotide sequence ID" value="XM_006713485.3"/>
</dbReference>
<dbReference type="RefSeq" id="XP_011510670.1">
  <property type="nucleotide sequence ID" value="XM_011512368.2"/>
</dbReference>
<dbReference type="RefSeq" id="XP_011510671.1">
  <property type="nucleotide sequence ID" value="XM_011512369.2"/>
</dbReference>
<dbReference type="RefSeq" id="XP_016861133.1">
  <property type="nucleotide sequence ID" value="XM_017005644.1"/>
</dbReference>
<dbReference type="UniGene" id="Hs.478150"/>
<dbReference type="PDB" id="3AJM">
  <property type="method" value="X-ray"/>
  <property type="resolution" value="2.30 A"/>
  <property type="chains" value="A/B=8-212"/>
</dbReference>
<dbReference type="PDB" id="3L8I">
  <property type="method" value="X-ray"/>
  <property type="resolution" value="2.50 A"/>
  <property type="chains" value="A/B/C/D=1-212"/>
</dbReference>
<dbReference type="PDB" id="3L8J">
  <property type="method" value="X-ray"/>
  <property type="resolution" value="3.05 A"/>
  <property type="chains" value="A=14-212"/>
</dbReference>
<dbReference type="PDB" id="3RQE">
  <property type="method" value="X-ray"/>
  <property type="resolution" value="2.80 A"/>
  <property type="chains" value="A/B/C/D=1-212"/>
</dbReference>
<dbReference type="PDB" id="3RQF">
  <property type="method" value="X-ray"/>
  <property type="resolution" value="2.70 A"/>
  <property type="chains" value="A/B/C/D=1-212"/>
</dbReference>
<dbReference type="PDB" id="3RQG">
  <property type="method" value="X-ray"/>
  <property type="resolution" value="2.50 A"/>
  <property type="chains" value="A/B/C/D=1-212"/>
</dbReference>
<dbReference type="PDB" id="3W8H">
  <property type="method" value="X-ray"/>
  <property type="resolution" value="2.43 A"/>
  <property type="chains" value="A=8-212"/>
</dbReference>
<dbReference type="PDB" id="3W8I">
  <property type="method" value="X-ray"/>
  <property type="resolution" value="2.40 A"/>
  <property type="chains" value="A=8-212"/>
</dbReference>
<dbReference type="PDB" id="4GEH">
  <property type="method" value="X-ray"/>
  <property type="resolution" value="1.95 A"/>
  <property type="chains" value="A/C=9-212"/>
</dbReference>
<dbReference type="PDB" id="4TVQ">
  <property type="method" value="X-ray"/>
  <property type="resolution" value="2.80 A"/>
  <property type="chains" value="A/B/C/D=1-212"/>
</dbReference>
<dbReference type="PDBsum" id="3AJM"/>
<dbReference type="PDBsum" id="3L8I"/>
<dbReference type="PDBsum" id="3L8J"/>
<dbReference type="PDBsum" id="3RQE"/>
<dbReference type="PDBsum" id="3RQF"/>
<dbReference type="PDBsum" id="3RQG"/>
<dbReference type="PDBsum" id="3W8H"/>
<dbReference type="PDBsum" id="3W8I"/>
<dbReference type="PDBsum" id="4GEH"/>
<dbReference type="PDBsum" id="4TVQ"/>
<dbReference type="ProteinModelPortal" id="Q9BUL8"/>
<dbReference type="SMR" id="Q9BUL8"/>
<dbReference type="BioGrid" id="116400">
  <property type="interactions" value="60"/>
</dbReference>
<dbReference type="DIP" id="DIP-40607N"/>
<dbReference type="IntAct" id="Q9BUL8">
  <property type="interactions" value="38"/>
</dbReference>
<dbReference type="MINT" id="Q9BUL8"/>
<dbReference type="STRING" id="9606.ENSP00000376506"/>
<dbReference type="iPTMnet" id="Q9BUL8"/>
<dbReference type="PhosphoSitePlus" id="Q9BUL8"/>
<dbReference type="BioMuta" id="PDCD10"/>
<dbReference type="DMDM" id="74733232"/>
<dbReference type="OGP" id="Q9BUL8"/>
<dbReference type="EPD" id="Q9BUL8"/>
<dbReference type="MaxQB" id="Q9BUL8"/>
<dbReference type="PaxDb" id="Q9BUL8"/>
<dbReference type="PeptideAtlas" id="Q9BUL8"/>
<dbReference type="PRIDE" id="Q9BUL8"/>
<dbReference type="ProteomicsDB" id="79108"/>
<dbReference type="ProteomicsDB" id="test2"/>
<dbReference type="TopDownProteomics" id="Q9BUL8"/>
<dbReference type="DNASU" id="11235"/>
<dbReference type="Ensembl" id="ENST00000392750">
  <property type="protein sequence ID" value="ENSP00000376506"/>
  <property type="gene ID" value="ENSG00000114209"/>
</dbReference>
<dbReference type="Ensembl" id="ENST00000461494">
  <property type="protein sequence ID" value="ENSP00000420021"/>
  <property type="gene ID" value="ENSG00000114209"/>
</dbReference>
<dbReference type="Ensembl" id="ENST00000470131">
  <property type="protein sequence ID" value="ENSP00000417202"/>
  <property type="gene ID" value="ENSG00000114209"/>
</dbReference>
<dbReference type="Ensembl" id="ENST00000473645">
  <property type="protein sequence ID" value="ENSP00000418317"/>
  <property type="gene ID" value="ENSG00000114209"/>
</dbReference>
<dbReference type="Ensembl" id="ENST00000497056">
  <property type="protein sequence ID" value="ENSP00000420553"/>
  <property type="gene ID" value="ENSG00000114209"/>
</dbReference>
<dbReference type="GeneID" id="11235"/>
<dbReference type="KEGG" id="hsa:11235"/>
<dbReference type="UCSC" id="uc003fex.5">
  <property type="organism name" value="human"/>
</dbReference>
<dbReference type="CTD" id="11235"/>
<dbReference type="DisGeNET" id="11235"/>
<dbReference type="EuPathDB" id="HostDB:ENSG00000114209.14"/>
<dbReference type="GeneCards" id="PDCD10"/>
<dbReference type="GeneReviews" id="PDCD10"/>
<dbReference type="HGNC" id="HGNC:8761">
  <property type="gene designation" value="PDCD10"/>
</dbReference>
<dbReference type="HPA" id="HPA027095"/>
<dbReference type="MalaCards" id="PDCD10"/>
<dbReference type="MIM" id="603285">
  <property type="type" value="phenotype"/>
</dbReference>
<dbReference type="MIM" id="609118">
  <property type="type" value="gene"/>
</dbReference>
<dbReference type="neXtProt" id="NX_Q9BUL8"/>
<dbReference type="OpenTargets" id="ENSG00000114209"/>
<dbReference type="Orphanet" id="221061">
  <property type="disease" value="Familial cerebral cavernous malformation"/>
</dbReference>
<dbReference type="PharmGKB" id="PA33111"/>
<dbReference type="eggNOG" id="KOG4025">
  <property type="taxonomic scope" value="Eukaryota"/>
</dbReference>
<dbReference type="eggNOG" id="ENOG410XTA6">
  <property type="taxonomic scope" value="LUCA"/>
</dbReference>
<dbReference type="GeneTree" id="ENSGT00390000017913"/>
<dbReference type="HOGENOM" id="HOG000007888"/>
<dbReference type="HOVERGEN" id="HBG052811"/>
<dbReference type="InParanoid" id="Q9BUL8"/>
<dbReference type="KO" id="K18269"/>
<dbReference type="OMA" id="TMGDETP"/>
<dbReference type="OrthoDB" id="EOG091G0JQQ"/>
<dbReference type="PhylomeDB" id="Q9BUL8"/>
<dbReference type="TreeFam" id="TF105802"/>
<dbReference type="SIGNOR" id="Q9BUL8"/>
<dbReference type="ChiTaRS" id="PDCD10">
  <property type="organism name" value="human"/>
</dbReference>
<dbReference type="EvolutionaryTrace" id="Q9BUL8"/>
<dbReference type="GeneWiki" id="PDCD10"/>
<dbReference type="GenomeRNAi" id="11235"/>
<dbReference type="PRO" id="PR:Q9BUL8"/>
<dbReference type="Proteomes" id="UP000005640">
  <property type="component" value="Chromosome 3"/>
</dbReference>
<dbReference type="Bgee" id="ENSG00000114209">
  <property type="expression patterns" value="Expressed in 233 organ(s), highest expression level in bone marrow"/>
</dbReference>
<dbReference type="CleanEx" id="HS_PDCD10"/>
<dbReference type="ExpressionAtlas" id="Q9BUL8">
  <property type="expression patterns" value="baseline and differential"/>
</dbReference>
<dbReference type="Genevisible" id="Q9BUL8">
  <property type="Description" value="HS"/>
</dbReference>
<dbReference type="GO" id="GO:0005737">
  <property type="term" value="C:cytoplasm"/>
  <property type="evidence" value="ECO:0000314"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0005829">
  <property type="term" value="C:cytosol"/>
  <property type="evidence" value="ECO:0000314"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0070062">
  <property type="term" value="C:extracellular exosome"/>
  <property type="evidence" value="ECO:0007005"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0005794">
  <property type="term" value="C:Golgi apparatus"/>
  <property type="evidence" value="ECO:0000314"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0000139">
  <property type="term" value="C:Golgi membrane"/>
  <property type="evidence" value="ECO:0000501"/>
  <property type="project" value="UniProtKB-SubCell"/>
</dbReference>
<dbReference type="GO" id="GO:0005886">
  <property type="term" value="C:plasma membrane"/>
  <property type="evidence" value="ECO:0000501"/>
  <property type="project" value="UniProtKB-SubCell"/>
</dbReference>
<dbReference type="GO" id="GO:0042803">
  <property type="term" value="F:protein homodimerization activity"/>
  <property type="evidence" value="ECO:0000353"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0019901">
  <property type="term" value="F:protein kinase binding"/>
  <property type="evidence" value="ECO:0000353"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0047485">
  <property type="term" value="F:protein N-terminus binding"/>
  <property type="evidence" value="ECO:0000353"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0001525">
  <property type="term" value="P:angiogenesis"/>
  <property type="evidence" value="ECO:0000501"/>
  <property type="project" value="UniProtKB-KW"/>
</dbReference>
<dbReference type="GO" id="GO:1990830">
  <property type="term" value="P:cellular response to leukemia inhibitory factor"/>
  <property type="evidence" value="ECO:0000501"/>
  <property type="project" value="Ensembl"/>
</dbReference>
<dbReference type="GO" id="GO:0051683">
  <property type="term" value="P:establishment of Golgi localization"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0090168">
  <property type="term" value="P:Golgi reassembly"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0036481">
  <property type="term" value="P:intrinsic apoptotic signaling pathway in response to hydrogen peroxide"/>
  <property type="evidence" value="ECO:0000316"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0043066">
  <property type="term" value="P:negative regulation of apoptotic process"/>
  <property type="evidence" value="ECO:0000314"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:1903588">
  <property type="term" value="P:negative regulation of blood vessel endothelial cell proliferation involved in sprouting angiogenesis"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0090051">
  <property type="term" value="P:negative regulation of cell migration involved in sprouting angiogenesis"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0010629">
  <property type="term" value="P:negative regulation of gene expression"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0030335">
  <property type="term" value="P:positive regulation of cell migration"/>
  <property type="evidence" value="ECO:0000314"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0008284">
  <property type="term" value="P:positive regulation of cell proliferation"/>
  <property type="evidence" value="ECO:0000314"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0010628">
  <property type="term" value="P:positive regulation of gene expression"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0090316">
  <property type="term" value="P:positive regulation of intracellular protein transport"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0043406">
  <property type="term" value="P:positive regulation of MAP kinase activity"/>
  <property type="evidence" value="ECO:0000314"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0045747">
  <property type="term" value="P:positive regulation of Notch signaling pathway"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0033138">
  <property type="term" value="P:positive regulation of peptidyl-serine phosphorylation"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0071902">
  <property type="term" value="P:positive regulation of protein serine/threonine kinase activity"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0032874">
  <property type="term" value="P:positive regulation of stress-activated MAPK cascade"/>
  <property type="evidence" value="ECO:0000314"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0050821">
  <property type="term" value="P:protein stabilization"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0042542">
  <property type="term" value="P:response to hydrogen peroxide"/>
  <property type="evidence" value="ECO:0000314"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="GO" id="GO:0044319">
  <property type="term" value="P:wound healing, spreading of cells"/>
  <property type="evidence" value="ECO:0000315"/>
  <property type="project" value="UniProtKB"/>
</dbReference>
<dbReference type="InterPro" id="IPR009652">
  <property type="entry name" value="PDCD10"/>
</dbReference>
<dbReference type="PANTHER" id="PTHR13250">
  <property type="entry name" value="PTHR13250"/>
  <property type="match status" value="1"/>
</dbReference>
<dbReference type="Reactome" id="R-HSA-2995383">
  <property type="pathway name" value="Initiation of Nuclear Envelope Reformation"/>
</dbReference>
<dbReference type="Reactome" id="R-HSA-69231">
  <property type="pathway name" value="Cyclin D associated events in G1"/>
</dbReference>
<sequence length="212" mass="24702" checksum="5AA613F71FAAEF56" modified="2001-06-01" version="1">MRMTMEEMKNEAETTSMVSMPLYAVMYPVFNELERVNLSAAQTLRAAFIKAEKENPGLTQDIIMKILEKKSVEVNFTESLLRMAADDVEEYMIERPEPEFQDLNEKARALKQILSKIPDEINDRVRFLQTIKDIASAIKELLDTVNNVFKKYQYQNRRALEHQKKEFVKYSKSFSDTLKTYFKDGKAINVFVSANRLIHQTNLILQTFKTVA</sequence>
</entry>`;

module.exports = xmlEntry;
