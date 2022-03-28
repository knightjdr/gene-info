import * as apigwv2 from '@aws-cdk/aws-apigatewayv2-alpha';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';
import { Stack, StackProps } from 'aws-cdk-lib';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { GoFunction } from '@aws-cdk/aws-lambda-go-alpha';
import { Construct } from 'constructs';
import 'dotenv/config';

class ApiAwsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new apigwv2.HttpApi(this, 'gix-api', {
      corsPreflight: {
        allowMethods: [apigwv2.CorsHttpMethod.GET],
        allowOrigins: ['*'],
      },
    });

    const table = new dynamodb.Table(this, 'gix', {
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      partitionKey: { name: 'pk', type: dynamodb.AttributeType.STRING },
      sortKey: { name: 'sk', type: dynamodb.AttributeType.STRING },
    });

    const extensionHandler = new GoFunction(this, 'Extension', {
      bundling: {
        goBuildFlags: ['-tags lambda.norpc'],
      },
      entry: 'lambda/cmd/extension',
      environment: {
        DYNAMODB_TABLE: table.tableName,
        DYNAMODB_ENDPOINT: process.env.DYNAMODB_ENDPOINT || '',
        TEST_CONTAINER_NAME: process.env.TEST_CONTAINER_NAME || '',
        TEST_PORT: process.env.TEST_PORT || '',
      },
    });

    table.grantReadData(extensionHandler);

    api.addRoutes({
      path: '/extension',
      methods: [apigwv2.HttpMethod.GET],
      integration: new HttpLambdaIntegration(
        'ExtensionIntegration',
        extensionHandler,
      ),
    });
  }
}

export default ApiAwsStack;
