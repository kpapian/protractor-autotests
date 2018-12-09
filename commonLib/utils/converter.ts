import { readFileSync } from 'fs';
import { AccountDetailsModel } from '../models/account-details-model';

const jsonEncoding = 'utf8';
export class Converter {

    static readFromJson<T>(filePath: string): T {
        return JSON.parse(readFileSync(filePath, jsonEncoding)) as T;
    }

    /// map function works only with arrays and need to be realized if model from json 
    /// is different than model from typescript
    static jsonToAccountDetailsModel(jsonPath: string): AccountDetailsModel[] {
        const json = this.readFromJson<any>(jsonPath);

        return json.map((jsonData) => {
            let accountDetailsModel = new AccountDetailsModel();
            accountDetailsModel.title = jsonData.title;
            accountDetailsModel.firstName = jsonData.firstName;
            accountDetailsModel.lastName = jsonData.lastName;
            accountDetailsModel.dob = jsonData.dob;
            accountDetailsModel.streetAddress = jsonData.streetAddress;
            accountDetailsModel.addressLine2 = jsonData.addressLine2;
            accountDetailsModel.city = jsonData.city;
            accountDetailsModel.postCode = jsonData.postCode;
            accountDetailsModel.phoneNumber = jsonData.phoneNumber;

            return accountDetailsModel;
        })
    }
    
}