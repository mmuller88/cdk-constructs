import { Vpc, CfnVPC } from '@aws-cdk/aws-ec2';
import { Stack, App} from '@aws-cdk/core';

class VpcStack extends Stack {
  constructor(app: App, id: string) {
    super(app, id);

    new Vpc(this, 'vpc', {});
  }
}
class CfnVpcStack extends Stack {
  constructor(app: App, id: string) {
    super(app, id);
    
    new CfnVPC(this, 'vpc', {
      cidrBlock: '10.0.0.0/16'
    });
  }
}

const app = new App();
new VpcStack(app, 'VpcStack');
new CfnVpcStack(app, 'CfnVpcStack');

app.synth();
