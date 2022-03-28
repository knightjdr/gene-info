import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import 'dotenv/config';
declare class ApiAwsStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps);
}
export default ApiAwsStack;
