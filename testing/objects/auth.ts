import {
    LoginPayload,
    TokenResponse,
    DecodedToken,
    UserForToken,
} from '../../typings/auth';

export class TestLoginPayload implements LoginPayload {
    password = 'PASSWORD';
}

export class TestLoginResults implements TokenResponse {
    token = 'TEST_TOKEN';
}

export class TestDecodedToken implements DecodedToken {
    exp = 1;
    iat = 2;
    id = '00000000-0000-0000-0000-000000000001';
    firstName = 'TEST_FIRST_NAME';
    lastName = 'TEST_LAST_NAME';
    email = 'TEST@TEST.TEST';
}

export class TestUserForToken implements UserForToken {
    id = '00000000-0000-0000-0000-000000000001';
    firstName = 'TEST_FIRST_NAME';
    lastName = 'TEST_LAST_NAME';
    email = 'TEST@TEST.TEST';
}
