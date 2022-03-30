package extension

import (
	"fmt"
	"os"

	"knightjdr/gene-info/api-aws/lambda/internal/errors"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

func query(fields Fields, dbClient *dynamodb.DynamoDB) (Items, errors.Error) {
	ids, err := mapIdentifier(fields, dbClient)
	if err != nil {
		return nil, err
	}

	if len(ids) == 0 {
		return Items{}, nil
	}

	items, err := getItems(ids, dbClient)
	if err != nil {
		return nil, err
	}

	return items, nil
}

func mapIdentifier(fields Fields, dbClient *dynamodb.DynamoDB) ([]string, errors.Error) {
	partitionKey := fmt.Sprintf("%s#%s", fields.identifier, fields.term)
	params := &dynamodb.GetItemInput{
		Key: map[string]*dynamodb.AttributeValue{
			"pk": {S: aws.String(partitionKey)},
			"sk": {S: aws.String(fields.species)},
		},
		ProjectionExpression: aws.String("ids"),
		TableName:            aws.String(os.Getenv("DYNAMODB_TABLE")),
	}

	resp, err := dbClient.GetItem(params)
	if err != nil {
		fmt.Println(err)
		return nil, errors.New(500, fmt.Sprintf("could not map identifier: %s-%s", fields.identifier, fields.term))
	}

	if resp.Item == nil {
		return []string{}, nil
	}

	identifiers := Identifiers{}
	err = dynamodbattribute.UnmarshalMap(resp.Item, &identifiers)
	if err != nil {
		return nil, errors.New(500, fmt.Sprintf("could not unmarshall mapped identifiers: %s-%s", fields.identifier, fields.term))
	}

	return identifiers.Ids, nil
}

func getItems(ids []string, dbClient *dynamodb.DynamoDB) (Items, errors.Error) {
	table := os.Getenv("DYNAMODB_TABLE")

	keys := make([]map[string]*dynamodb.AttributeValue, len(ids))
	for i, id := range ids {
		pk := fmt.Sprintf("UNIPROT#%s", id)
		sk := fmt.Sprintf("METADATA#%s", id)
		keys[i] = map[string]*dynamodb.AttributeValue{
			"pk": {S: aws.String(pk)},
			"sk": {S: aws.String(sk)},
		}
	}

	params := &dynamodb.BatchGetItemInput{
		RequestItems: map[string]*dynamodb.KeysAndAttributes{
			table: {
				Keys: keys,
			},
		},
	}

	resp, err := dbClient.BatchGetItem(params)
	if err != nil {
		return nil, errors.New(500, "could not retrieve gene information")
	}

	if resp.Responses[table] == nil {
		return Items{}, nil
	}

	items := Items{}
	err = dynamodbattribute.UnmarshalListOfMaps(resp.Responses[table], &items)
	if err != nil {
		return nil, errors.New(500, "could not unmarshall gene information")
	}

	return items, nil
}
