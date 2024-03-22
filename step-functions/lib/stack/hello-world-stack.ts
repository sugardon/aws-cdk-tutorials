import { Stack, type StackProps, Duration, RemovalPolicy } from "aws-cdk-lib";
import { type Construct } from "constructs";
import {
  aws_lambda_nodejs as node_lambda,
  aws_lambda as lambda,
  aws_logs as logs,
  aws_stepfunctions as sfn,
  aws_stepfunctions_tasks as tasks,
} from "aws-cdk-lib";

export class HelloWorldStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // TODO: Move this to a separete constructs
    const hwFunction = new node_lambda.NodejsFunction(
      this,
      "HelloWorldFunction",
      {
        runtime: lambda.Runtime.NODEJS_20_X,
        entry: "lambda/hello-world/hello-world.ts",
        handler: "helloWorld",
        memorySize: 256,
        timeout: Duration.seconds(10),
        logGroup: new logs.LogGroup(this, "HelloWorldLogGroup", {
          retention: logs.RetentionDays.ONE_DAY,
          removalPolicy: RemovalPolicy.DESTROY,
        }),
      },
    );

    // Step Functions
    const sfnDefinition: sfn.IChainable = new tasks.LambdaInvoke(
      this,
      "InvokeHelloWorldFunction",
      {
        lambdaFunction: hwFunction,
      },
    ).next(new sfn.Succeed(this, "HelloWorldSucceed"));
    new sfn.StateMachine(this, "HelloWorldStateMachine", {
      definitionBody: sfn.DefinitionBody.fromChainable(sfnDefinition),
    });
  }
}
