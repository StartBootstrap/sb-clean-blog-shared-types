import {
    ReadUserParams,
    ResultsUser,
} from '../../typings/user';

export class TestResultsUser implements ResultsUser {
    id = '00000000-0000-0000-0000-000000000001';
    firstName = 'TEST_FIRST_NAME';
    lastName = 'TEST_LAST_NAME';
    email = 'TEST@TEST.TEST';
}

/* Read */

export class TestReadUserParams implements ReadUserParams {
    id = '00000000-0000-0000-0000-000000000001';
}
