import { UUID, Email } from './common';

export interface ResultsUser {
    id: UUID;
    firstName: string;
    lastName: string;
    email: Email;
}

/* Read */

export interface ReadUserParams {
    id: UUID;
}

export type ReadUserErrorCodes = 'USER_NOT_FOUND' | 'ERROR_FINDING_USER';
