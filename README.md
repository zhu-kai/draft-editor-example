# draft-js editor example

In the project directory, you can run:

### `yarn start`

## How to Reproduce

1. import Editor from '@draft-js-plugins/editor';
2. Type 'abcd'
3. Hit Enter or click 'Clear Editor' button
4. Type 'abcd'
5. The cursor move to the begining after type the first letter ‘a’.

Expected: 'abcd'
Actual: 'bcda'

## Works well with original Editor from draft-js

1. import { Editor } from 'draft-js
2. Type 'abcd'
3. Hit Enter or click 'Clear Editor' button
4. Type 'abcd'

Expected: 'abcd'
Actual: 'abcd'
