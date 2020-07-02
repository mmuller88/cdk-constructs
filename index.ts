import { Vpc, CfnVPC } from '@aws-cdk/aws-ec2';
import { Stack, App} from '@aws-cdk/core';

class CfnVpcStack extends Stack {
  constructor(app: App, id: string) {
    super(app, id);
    
    new CfnVPC(this, 'vpc', {
      cidrBlock: '10.0.0.0/16'
    });
  }
}
class VpcStack extends Stack {
  constructor(app: App, id: string) {
    super(app, id);

    new Vpc(this, 'vpc', {});
  }
}

const app = new App();
new CfnVpcStack(app, 'CfnVpcStack');
new VpcStack(app, 'VpcStack');

app.synth();
