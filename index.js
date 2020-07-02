"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_ec2_1 = require("@aws-cdk/aws-ec2");
const core_1 = require("@aws-cdk/core");
class VpcStack extends core_1.Stack {
    constructor(app, id) {
        super(app, id);
        // high level construct
        // new Vpc(this, 'vpc', {});
        // low level construct
        new aws_ec2_1.CfnVPC(this, 'vpc', {
            cidrBlock: '10.0.0.0/16'
        });
    }
}
const app = new core_1.App();
new VpcStack(app, 'VpcStack');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUEwQztBQUMxQyx3Q0FBMEM7QUFFMUMsTUFBTSxRQUFTLFNBQVEsWUFBSztJQUMxQixZQUFZLEdBQVEsRUFBRSxFQUFVO1FBQzlCLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDZix1QkFBdUI7UUFDdkIsNEJBQTRCO1FBRTVCLHNCQUFzQjtRQUN0QixJQUFJLGdCQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtZQUN0QixTQUFTLEVBQUUsYUFBYTtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFDRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQUcsRUFBRSxDQUFDO0FBQ3RCLElBQUksUUFBUSxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUU5QixHQUFHLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZm5WUEMgfSBmcm9tICdAYXdzLWNkay9hd3MtZWMyJztcbmltcG9ydCB7IFN0YWNrLCBBcHB9IGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuXG5jbGFzcyBWcGNTdGFjayBleHRlbmRzIFN0YWNrIHtcbiAgY29uc3RydWN0b3IoYXBwOiBBcHAsIGlkOiBzdHJpbmcpIHtcbiAgICBzdXBlcihhcHAsIGlkKTtcbiAgICAvLyBoaWdoIGxldmVsIGNvbnN0cnVjdFxuICAgIC8vIG5ldyBWcGModGhpcywgJ3ZwYycsIHt9KTtcblxuICAgIC8vIGxvdyBsZXZlbCBjb25zdHJ1Y3RcbiAgICBuZXcgQ2ZuVlBDKHRoaXMsICd2cGMnLCB7XG4gICAgICBjaWRyQmxvY2s6ICcxMC4wLjAuMC8xNidcbiAgICB9KTtcbiAgfVxufVxuY29uc3QgYXBwID0gbmV3IEFwcCgpO1xubmV3IFZwY1N0YWNrKGFwcCwgJ1ZwY1N0YWNrJyk7XG5cbmFwcC5zeW50aCgpO1xuIl19