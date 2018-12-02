# Databases

## General

### Uniprot
* ftp.uniprot.org/pub/databases/uniprot/current_release/knowledgebase/complete/uniprot_sprot.xml.gz

## Domains

### Pfam
* ftp://ftp.ebi.ac.uk/pub/databases/Pfam/current_release/Pfam-A.regions.uniprot.tsv.gz
* ftp://ftp.ebi.ac.uk/pub/databases/Pfam/current_release/Pfam-A.clans.tsv.gz

## Interactions

### BioGRID
* https://downloads.thebiogrid.org/Download/BioGRID/Latest-Release/BIOGRID-ALL-LATEST.tab2.zip

### IntAct
* ftp.ebi.ac.uk/pub/databases/intact/current/psimitab/intact.zip

## Create database

```
node index.js
```

### Flags

* --skip-download
* --skip-unzip
* --skip-min

## Tests

```
npm test
```
