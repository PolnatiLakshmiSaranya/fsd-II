class SmartHome{
    public ownerName: string;
    private alarmCode: number;
    private securityStatus: boolean;

    protected cameraCount: number=2;

    constructor(owner: string, code: number){
        this.ownerName=owner;
        this.alarmCode=code;
        this.securityStatus=false;
    }

    public armSystem(code: number): void{
        if(this.verifyCode(code)){
            this.securityStatus=true;
            console.log("Security system is now ARMED.");
        }else{
            console.log("Incorrect security code.");
        }
    }

    public disarmSystem(code: number): void{
        if(this.verifyCode(code)){
            this.securityStatus=false;
            console.log("Security system is now DISARMED.");
        }else{
            console.log("Incorrect security code.");
        }
    }

    private verifyCode(code: number): boolean{
        return this.alarmCode===code;
    }
}

class PremiumSmartHome extends SmartHome{
    public addCamera(): void{
        this.cameraCount++;
        console.log(`New camera installed. Total Cameras: ${this.cameraCount}`);
    }
}

const myHome = new SmartHome("Saranya", 44464);

console.log(`Home Owner: ${myHome.ownerName}`);
myHome.armSystem(44464);
myHome.disarmSystem(44464);

const premiumHome = new PremiumSmartHome("Hasini", 44021);
console.log(`Premium Home Owner: ${premiumHome.ownerName}`);
premiumHome.addCamera();
premiumHome.armSystem(44021);