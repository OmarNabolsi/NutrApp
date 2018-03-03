import { Gender } from './gender-interface';
export interface Profile {
    username: string;
    firstName: string;
    lastName: string;
    gender: Gender;
    dateOfBirth: string;    
    activityLvl: string;
    phone: string,
    mobile: string;
    email: string;
    address: string;
    comments: string;
}