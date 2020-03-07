import {
    ReadPostParams,
    ResultsPost,
    CreatePostPayload,
    UpdatePostParams,
    UpdatePostPayload,
    DeletePostParams,
    ReadPostQuery,
} from '../../typings/post';

export class TestResultsPost implements ResultsPost {
    id = '00000000-0000-0000-0000-000000000001';
    slug = 'TEST_SLUG';
    backgroundImage = 'TEST_BACKGROUND_IMAGE';
    heading = 'TEST_HEADING';
    subHeading = 'TEST_SUB_HEADING';
    meta = 'TEST_META';
    body = 'TEST_BODY';
}

/* Create */

export class TestCreatePostPayload implements CreatePostPayload {
    slug = 'TEST_SLUG';
    backgroundImage = 'TEST_BACKGROUND_IMAGE';
    heading = 'TEST_HEADING';
    subHeading = 'TEST_SUB_HEADING';
    meta = 'TEST_META';
    body = 'TEST_BODY';
}

/* Read */

export class TestReadPostParams implements ReadPostParams {
    id = '00000000-0000-0000-0000-000000000001';
}

export class TestReadPostQuery implements ReadPostQuery {
    findBy: 'slug' = 'slug';
}

/* Update */

export class TestUpdatePostParams implements UpdatePostParams {
    id = '00000000-0000-0000-0000-000000000001';
}

export class TestUpdatePostPayload implements UpdatePostPayload {
    backgroundImage = 'TEST_BACKGROUND_IMAGE';
    heading = 'TEST_HEADING';
    subHeading = 'TEST_SUB_HEADING';
    meta = 'TEST_META';
    body = 'TEST_BODY';
}

/* Delete */

export class TestDeletePostParams implements DeletePostParams {
    id = '00000000-0000-0000-0000-000000000001';
}
