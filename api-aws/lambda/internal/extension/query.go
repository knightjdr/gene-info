package extension

import (
	"errors"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

func query(fields Fields, dbClient *dynamodb.DynamoDB) (Items, error) {
	queryFields := Fields{
		identifier: getIdentifier(fields),
		species:    fields.species,
		term:       parseTerm(fields.term, fields.identifier),
	}

	if queryFields.identifier == "gene" {
		return getGene(queryFields, dbClient)
	} else {
		return getItem(queryFields, dbClient)
	}
}

func getGene(fields Fields, dbClient *dynamodb.DynamoDB) (Items, error) {
	items := Items{}

	// Query official gene symbol
	params := &dynamodb.GetItemInput{
		Key: map[string]*dynamodb.AttributeValue{
			"gene": {S: aws.String(fields.term)},
		},
		TableName: aws.String(fields.species),
	}

	resp, err := dbClient.GetItem(params)
	if err != nil {
		return items, errors.New("error getting gene")
	}

	if resp.Item != nil {
		item := Item{}
		err = dynamodbattribute.UnmarshalMap(resp.Item, &item)
		if err == nil {
			items = append(items, item)
		}
	}

	// Scan synonyms and alternate symbols
	paramsScan := &dynamodb.ScanInput{
		FilterExpression: aws.String("contains(synonyms, :gene) or contains(geneAlternateSymbols, :gene)"),
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":gene": {S: aws.String(fields.term)},
		},
		TableName: aws.String(fields.species),
	}

	respScan, err := dbClient.Scan(paramsScan)
	if err != nil {
		return items, errors.New("error getting gene")
	}

	if len(respScan.Items) > 0 {
		scanItems := Items{}
		err = dynamodbattribute.UnmarshalListOfMaps(respScan.Items, &scanItems)
		if err == nil {
			items = append(items, scanItems...)
		}
	}

	return items, nil
}

func getItem(fields Fields, dbClient *dynamodb.DynamoDB) (Items, error) {
	key := map[string]*dynamodb.AttributeValue{}

	if fields.identifier == "geneid" {
		key["geneid"] = &dynamodb.AttributeValue{
			N: aws.String(fields.term),
		}
	} else {
		key[fields.identifier] = &dynamodb.AttributeValue{
			S: aws.String(fields.term),
		}
	}

	params := &dynamodb.GetItemInput{
		Key:       key,
		TableName: aws.String(fields.species),
	}

	resp, err := dbClient.GetItem(params)
	if err != nil {
		return Items{}, errors.New("error getting item")
	}

	if resp.Item == nil {
		return Items{}, errors.New("item not found")
	}

	item := Item{}
	err = dynamodbattribute.UnmarshalMap(resp.Item, &item)
	if err != nil {
		return Items{}, errors.New("error parsing item")
	}
	return Items{item}, nil
}
