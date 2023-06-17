import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "your user pool",
    ClientId: "your client id"
}

export default new CognitoUserPool(poolData);