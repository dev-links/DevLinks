const { handleCompany, handleJobTitle, handleAddress, handleCity, handleState } = require('./jobReducer')

describe('handleCompany', () => {
    test('Facebook should be Facebook', () => {
        expect(handleCompany('Facebook')).toEqual('Facebook')
    });
})

describe('handleJobTitle', () => {
    test('Senior Frontend Dev should be Senior Frontend Dev', () => {
        expect(handleJobTitle('Senior Frontend Dev')).toEqual('Senior Frontend Dev')
    });
})

describe('handleAddress', () => {
    test('123 Main St. should be 123 Main St.', () => {
        expect(handleAddress('123 Main St.')).toEqual('123 Main St.')
    });
})

describe('handleCity', () => {
    test('Austin should be Austin', () => {
        expect(handleCity('Austin')).toEqual('Austin')
    });
})

describe('handleState', () => {
    test('TX should be TX', () => {
        expect(handleState('TX')).toEqual('TX')
    });
})