const { handleCompany, handleJobTitle, handleAddress, handleCity, handleState } = require('./redux/jobReducer')

describe('handleCompany', () => {
    test('Facebook should be Facebook', () => {
        expect(handleCompany('Facebook')).toEqual({"payload": "Facebook", "type": "HANDLE_COMPANY"})
    });
})

describe('handleJobTitle', () => {
    test('Senior Frontend Dev should be Senior Frontend Dev', () => {
        expect(handleJobTitle('Senior Frontend Dev')).toEqual({"payload": "Senior Frontend Dev", "type": "HANDLE_JOBTITLE"})
    });
})

describe('handleAddress', () => {
    test('123 Main St. should be 123 Main St.', () => {
        expect(handleAddress('123 Main St.')).toEqual({"payload": "123 Main St.", "type": "HANDLE_ADDRESS"})
    });
})

describe('handleCity', () => {
    test('Austin should be Austin', () => {
        expect(handleCity('Austin')).toEqual({"payload": "Austin", "type": "HANDLE_CITY"})
    });
})

describe('handleState', () => {
    test('TX should be TX', () => {
        expect(handleState('TX')).toEqual({"payload": "TX", "type": "HANDLE_STATE"})
    });
})

//Collins Unit testing

const {handleZipcode, handleJobDescription, handleEmploymentTypeMenu,handleSeniorityLevelMenu,handleSubmitResumeMenu} =require('./redux/jobReducer')

describe('handleZipcode', () => {
    test('75038 should be 75038', () => {
        expect(handleZipcode('75038')).toEqual({"payload": "75038", "type": "HANDLE_ZIPCODE"})
    });
})

describe('handleJobDescription', () => {
    test('build an app should be build an app', () => {
        expect(handleJobDescription('build an app')).toEqual({"payload": "build an app", "type": "HANDLE_JOBDESCRIPTION"})
    });
})

describe('handleEmploymentTypeMenu', () => {
    test(' Full-Time should be Full-Time', () => {
        expect(handleEmploymentTypeMenu('Full-Time')).toEqual({"payload": "Full-Time", "type": 'HANDLE_EMPLOYMENTTYPEMENU'})
    });
})

describe('handleSeniorityLevelMenu', () => {
    test('Entry Level should be Entry Level', () => {
        expect(handleSeniorityLevelMenu('Yes')).toEqual({"payload": "Entry Level", "type": 'HANDLE_SENIORITYLEVELMENU'})
    });
})

describe('handleSubmitResumeMenu', () => {
    test('No should be No', () => {
        expect(handleSubmitResumeMenu('No')).toEqual({"payload": "No", "type": 'HANDLE_SUBMITRESUMEMENU'})
    });
})