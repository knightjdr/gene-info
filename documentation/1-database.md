# Database

Instructions for generating and deploying the database.

## Prerequisites

* Docker
* [Nodejs](https://nodejs.org/en/), at least v16
* Python3

### Install nodejs without sudo

```
mkdir -p ~/local/node
mkdir ~/node-latest-stable
cd ~/node-latest-stable
wget -c https://nodejs.org/dist/v16.14.0/node-v16.14.0-linux-x64.tar.xz
tar xvf node-v16.14.0-linux-x64.tar.xz --directory ~/local/node --strip-components=1
echo 'export PATH=$HOME/local/node/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

Confirm version number
```
node -v
npm -v
```

### Install python dependencies

```
pip3 install --user numpy pandas
```

## Install source code for GIX

1. Clone the repository:
```
git clone https://github.com/knightjdr/gene-info.git
```

2. Install dependencies:
```
cd gene-info
(cd database && npm install)
```

## Update database files

1. (Optional) Update DepMap resource links. See section below `Update DepMap resources`

2. Generate database collections. This step can take days as data is fetched from Pfam which has a very slow server. Check `nohup.out` for progress: a final message of `Database successfully generated` will be printed when the process is complete.
```
nohup npm run db-generate-linux &
```

## Upload database

The database can be uploaded to a local DynamoDB instance or to a remote AWS instance.

### Locally

Prerequisites:
* Docker

1. Get Docker image for DynamoDB
```
docker pull amazon/dynamodb-local
```

2. Start local instance. The docker-compose file will permanently store the local version in `~/.docker/dynamodb`.
```
MY_UID="$(id -u)" MY_GID="$(id -g)" docker-compose -f database/docker-compose.yaml up -d dynamodb-local
```

3. Create table for database.
```
aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name gix --attribute-definitions AttributeName=pk,AttributeType=S AttributeName=sk,AttributeType=S --key-schema AttributeName=pk,KeyType=HASH AttributeName=sk,KeyType=Range --billing-mode PAY_PER_REQUEST
```

4. Load database.
```
npm run db-upload-local
```

### Remote

TBD.

### Update DepMap resources

Check for updated URLs for DepMap resources. Check at https://depmap.org/portal/download. There are quarterly updates. Copy the download link for the relevant resource and update it in this file: `database/essentiality/get-data.js`

* cellData.file: sample_info.csv
* effectsData.file: CRISPR_gene_effect.csv

## Database structure

### ERD

* IDENTIFIER has a one-to-many relationship with UniProt accessions (most identifiers have a one-to-one, but gene symbols can be one-to-many).
* UNIPROT_ACCESSION has a one-to-one relationship with metadata.

### Access patterns

* Get a list of UniProt accessions for an identifier, identifier type and species.
* Get metadata for a UniProt accession.

### Primary keys

| PK                             | SK                            | Attributes                        |
| ------------------------------ | ----------------------------- | --------------------------------- |
| [IDENTIFIER_TYPE]#[IDENTIFIER] | [SPECIES]                     | ids: { SS: [...] }                |
| UNIPROT#[UNIPROT_ACCESSION]    | METADATA#[UNIPROT_ACCESSION]  | {...}                             |
