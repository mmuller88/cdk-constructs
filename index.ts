import { Vpc } from '@aws-cdk/aws-ec2';
import { Stack, App} from '@aws-cdk/core';

class VpcStack extends Stack {
  constructor(app: App, id: string) {
    super(app, id);
    // high level construct
    new Vpc(this, 'vpc', {});
    
    // low level construct
    // new CfnVPC(this, 'vpc', {
    //   cidrBlock: '10.0.0.0/16'
    // });
  }
}
const app = new App();
new VpcStack(app, 'VpcStack');

app.synth();
