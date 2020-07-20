"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const aws_ec2_1 = require("@aws-cdk/aws-ec2");
const core_1 = require("@aws-cdk/core");
class CfnVpcStack extends core_1.Stack {
    constructor(app, id) {
        super(app, id);
        new aws_ec2_1.CfnVPC(this, 'vpc', {
            cidrBlock: '10.0.0.0/16'
        });
    }
}
class VpcStack extends core_1.Stack {
    constructor(app, id) {
        super(app, id);
        new aws_ec2_1.Vpc(this, 'vpc', {});
    }
}
const app = new core_1.App();
new CfnVpcStack(app, 'CfnVpcStack');
new VpcStack(app, 'VpcStack');
app.synth();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUErQztBQUMvQyx3Q0FBMEM7QUFFMUMsTUFBTSxXQUFZLFNBQVEsWUFBSztJQUM3QixZQUFZLEdBQVEsRUFBRSxFQUFVO1FBQzlCLEtBQUssQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFZixJQUFJLGdCQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtZQUN0QixTQUFTLEVBQUUsYUFBYTtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFDRCxNQUFNLFFBQVMsU0FBUSxZQUFLO0lBQzFCLFlBQVksR0FBUSxFQUFFLEVBQVU7UUFDOUIsS0FBSyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUVmLElBQUksYUFBRyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztDQUNGO0FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFHLEVBQUUsQ0FBQztBQUN0QixJQUFJLFdBQVcsQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLENBQUM7QUFDcEMsSUFBSSxRQUFRLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBRTlCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZwYywgQ2ZuVlBDIH0gZnJvbSAnQGF3cy1jZGsvYXdzLWVjMic7XG5pbXBvcnQgeyBTdGFjaywgQXBwfSBmcm9tICdAYXdzLWNkay9jb3JlJztcblxuY2xhc3MgQ2ZuVnBjU3RhY2sgZXh0ZW5kcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKGFwcDogQXBwLCBpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoYXBwLCBpZCk7XG4gICAgXG4gICAgbmV3IENmblZQQyh0aGlzLCAndnBjJywge1xuICAgICAgY2lkckJsb2NrOiAnMTAuMC4wLjAvMTYnXG4gICAgfSk7XG4gIH1cbn1cbmNsYXNzIFZwY1N0YWNrIGV4dGVuZHMgU3RhY2sge1xuICBjb25zdHJ1Y3RvcihhcHA6IEFwcCwgaWQ6IHN0cmluZykge1xuICAgIHN1cGVyKGFwcCwgaWQpO1xuXG4gICAgbmV3IFZwYyh0aGlzLCAndnBjJywge30pO1xuICB9XG59XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbm5ldyBDZm5WcGNTdGFjayhhcHAsICdDZm5WcGNTdGFjaycpO1xubmV3IFZwY1N0YWNrKGFwcCwgJ1ZwY1N0YWNrJyk7XG5cbmFwcC5zeW50aCgpO1xuIl19