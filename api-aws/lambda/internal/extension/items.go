package extension

type Identifiers struct {
	GeneIDs []string `json:"geneids"`
}

type Items []Item

type Item struct {
	AlternativeNames []string `json:"alternativeNames"`
	Biogrid          int      `json:"biogrid"`
	Description      string   `json:"description"`
	EnsemblGene      []string `json:"ensembl-gene"`
	EnsemblProtein   []string `json:"ensembl-protein"`
	Fullname         string   `json:"fullname"`
	Gene             string   `json:"gene"`
	Geneid           int      `json:"geneid"`
	Go               struct {
		C []struct {
			ID   string `json:"id"`
			Term string `json:"term"`
		} `json:"c"`
		F []struct {
			ID   string `json:"id"`
			Term string `json:"term"`
		} `json:"f"`
		P []struct {
			ID   string `json:"id"`
			Term string `json:"term"`
		} `json:"p"`
	} `json:"go"`
	Hgnc         int `json:"hgnc"`
	Length       int `json:"length"`
	Localization struct {
		Compartments struct {
			Accession string   `json:"accession"`
			Terms     []string `json:"terms"`
		} `json:"compartments"`
		Hpa struct {
		} `json:"hpa"`
		Uniprot []string `json:"uniprot"`
	} `json:"localization"`
	Locus     string   `json:"locus"`
	Mw        int      `json:"mw"`
	Orf       []string `json:"orf"`
	Pathology []struct {
		Description string `json:"description"`
		Mim         int    `json:"mim"`
		Name        string `json:"name"`
		UniprotID   string `json:"uniprotID"`
	} `json:"pathology"`
	Pathway []struct {
		Id   string `json:"id"`
		Term string `json:"term"`
	} `json:"pathway"`
	Proteomicsdb         int      `json:"proteomicsdb"`
	Refseq               []string `json:"refseq"`
	Synonyms             []string `json:"synonyms"`
	Uniprot              []string `json:"uniprot"`
	Mim                  int      `json:"mim"`
	GeneAlternateSymbols []string `json:"geneAlternateSymbols"`
	Domains              []struct {
		Name  string `json:"name"`
		Start int    `json:"start"`
		End   int    `json:"end"`
		Type  string `json:"type"`
		Pfam  string `json:"pfam,omitempty"`
	} `json:"domains"`
	Interactors []struct {
		Gene    string   `json:"gene"`
		Biogrid []string `json:"biogrid"`
		Intact  []string `json:"intact"`
	} `json:"interactors"`
	ProteinExpression struct {
		Cells []struct {
			Intensity float64 `json:"intensity"`
			Name      string  `json:"name"`
			Level     string  `json:"level"`
		} `json:"cells"`
		Tissues []struct {
			Intensity float64 `json:"intensity"`
			Name      string  `json:"name"`
			Level     string  `json:"level"`
		} `json:"tissues"`
	} `json:"protein-expression"`
	RnaExpression struct {
		Cells []struct {
			Name  string  `json:"name"`
			Value float64 `json:"value"`
		} `json:"cells"`
		Tissues []struct {
			Name  string  `json:"name"`
			Value float64 `json:"value"`
		} `json:"tissues"`
	} `json:"rna-expression"`
	Essentiality struct {
		Cells []struct {
			Name  string  `json:"name"`
			Value float64 `json:"value"`
		} `json:"cells"`
		Stats struct {
			Mean   float64 `json:"mean"`
			Median float64 `json:"median"`
			Sd     float64 `json:"sd"`
		} `json:"stats"`
		CoDependencies [][]interface{} `json:"coDependencies"`
		SourceSymbol   string          `json:"sourceSymbol"`
	} `json:"essentiality"`
}
