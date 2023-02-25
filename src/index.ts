import {usersArray, IArray1} from "./users";
import {usersInfoArra, IArray2, IOrganization} from "./userInfo";

interface INewArray{
    name: string
    position: string
    age: number
    gender: string
}

function getUsersJobPositions(usersArray: IArray1[], usersInfoArra: IArray2[]): INewArray[]{
    
    let arrayUser: INewArray[] = []

    for(let i=0; i<usersArray.length; i++){
        const {name, gender}: IArray1 = usersArray[i];
        const {organization: {position}, age}: IArray2 = usersInfoArra[i];

        const objUser: INewArray = {
            name: name,
            position: position,
            age: age,
            gender: gender
        };
        //console.log(objUser)
        arrayUser.push(objUser);       
    }       
    return arrayUser;
}

const usersPositions = getUsersJobPositions(usersArray, usersInfoArra);
console.log('userPositions', usersPositions)