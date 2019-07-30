export class User {
    'id': number;
    'username': string;
    'email': string;
    'first_name': string;
    'last_name': string;
    'password': any;
    'profile': {
        'user_id': number;
        'customuser_phone_no': any;
        'customuser_profile_pic': any;
        'team': any;
        'position': any;
        'get_permissions': []
    };
}
