//Bryan unit test
import {registerUser, getUserData, loginUser, logOutUser, editUserDetails} from './redux/actions/userAction'

describe('registerUser', () =>{
    test('test9 should be test9', () =>{
        expect(registerUser('test9')).toBeInstanceOf(Function)
    })
})
describe('getUserData', () =>{
    test('test should be test', () =>{
        expect(getUserData('test')).toBeInstanceOf(Function)
    })
})
describe('loginUser', () =>{
    test('FBIdToken should be FBIdToken', () =>{
        expect(loginUser('FBIdToken')).toBeInstanceOf(Function)
    })
})
describe('logOutUser', () =>{
    test('unauthenticated should be  unauthenticated', () =>{
        expect(logOutUser('unauthenticated')).toBeInstanceOf(Function)
    })
})
describe('editUserDetail', () =>{
    test('bio should edit bio', () =>{
        expect(editUserDetails('bio')).toBeInstanceOf(Function)
    })
})