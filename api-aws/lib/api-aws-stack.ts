import { Stack, StackProps } from 'aws-cdk-lib';
import { HttpApi, HttpMethod } from '@aws-cdk/aws-apigatewayv2-alpha';
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import { GoFunction } from '@aws-cdk/aws-lambda-go-alpha';
import { Construct } from 'constructs';

class ApiAwsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const api = new HttpApi(this, 'api');

    const extensionHandler = new GoFunction(this, 'Extension', {
      entry: 'lambda/cmd/extension',
    });

    api.addRoutes({
      path: '/extension',
      methods: [HttpMethod.GET],
      integration: new HttpLambdaIntegration(
        'ExtensionIntegration',
        extensionHandler,
      ),
    });
  }
}

export default ApiAwsStack;
