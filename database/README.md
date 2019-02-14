# Databases

## General

### Uniprot
* ftp.uniprot.org/pub/databases/uniprot/current_release/knowledgebase/complete/uniprot_sprot.xml.gz

## Domains

### Pfam
* ftp://ftp.ebi.ac.uk/pub/databases/Pfam/current_release/Pfam-A.regions.uniprot.tsv.gz
* ftp://ftp.ebi.ac.uk/pub/databases/Pfam/current_release/Pfam-A.clans.tsv.gz

## Expression

### Human protein atlas (RNA)
* https://www.proteinatlas.org/download/rna_celline.tsv.zip
* https://www.proteinatlas.org/download/rna_tissue.tsv.zip

## Interactions

### BioGRID
* https://downloads.thebiogrid.org/Download/BioGRID/Latest-Release/BIOGRID-ALL-LATEST.tab2.zip

### IntAct
* ftp.ebi.ac.uk/pub/databases/intact/current/psimitab/intact.zip

## Localization

### Compartments
* http://download.jensenlab.org/human_compartment_knowledge_full.tsv

### Human protein atlas
* https://www.proteinatlas.org/download/subcellular_location.tsv.zip

## Create database

Use at least node v10.13.0 (yauzl module produces an error otherwise).
Databases for each species specified in configs.js will be written to `files/databases`. Javascript files containing tissues in expression databases for each species will be written to `files/rna-expression.js`. Creating the database consumes a lot of memory so increase the limit. 

```
node --max-old-space-size=8192 index.js
```

### Flags

* --skip-download
* --skip-unzip
* --skip-min

## Tests

```
npm test
```
