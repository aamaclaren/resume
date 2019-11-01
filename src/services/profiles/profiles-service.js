import ProfilesApi from './profiles-api';
import Profile from './profile-model';

export default class ProfileService{

    static async GetProfilesByUser(user){
        let profileData = await ProfilesApi.GetProfilesByUserDoc(user.getDoc());
        return profileData.map((profileItem) => {
            return new Profile(profileItem);
        }); 
    };
}