//Bryan unit test
const {registerUser, getUserData, loginUser, logOutUser, editUserDetails} = require('./redux/actions/userAction')

describe('registerUser', () =>{
    test('test9 should be test9', () =>{
        expect(registerUser('test9')).toEqual({'payload': 'test9', 'type' : 'LOADING_UI'})
    })
})
describe('getUserData', () =>{
    test('test should be test', () =>{
        expect(getUserData('test')).toEqual({'payload': 'test', 'type' : 'LOADING_USER'})
    })
})
describe('loginUser', () =>{
    test('FBIdToken should be FBIdToken', () =>{
        expect(loginUser('FBIdToken')).toEqual({'payload': 'FBIdToken', 'type' : ''})
    })
})
describe('logOutUser', () =>{
    test('unauthenticated should be  unauthenticated', () =>{
        expect(logOutUser('unauthenticated')).toEqual({'payload': 'unauthenticated', 'type' : 'SET_UNAUTHENTICATED'})
    })
})
describe('editUserDetail', () =>{
    test('bio should edit bio', () =>{
        expect(editUserDetails).toEqual({'payload': 'bio', 'type' : 'LOADING_USER'})
    })
})