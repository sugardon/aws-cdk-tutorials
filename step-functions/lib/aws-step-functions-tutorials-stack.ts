import { type Construct } from "constructs";
import { Stack, type StackProps } from "aws-cdk-lib";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsStepFunctionsTutorialsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    console.log("TODO: Implement AwsStepFunctionsTutorialsStack");

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsStepFunctionsTutorialsQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
