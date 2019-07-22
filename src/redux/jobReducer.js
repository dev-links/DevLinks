

const initialState = {
    Company: '',
    JobTitle: '',
    Address: '',
    City: '',
    State: '',
    Zipcode: '',
    JobDescription: '',
    EmploymentTypeMenu:'',
    SeniorityLevelMenu:'',
    VisaStatusMenu: '',
    SubmitResumeMenu:'',
    EducationMenu: '',
    JobListings: []
}

const HANDLE_COMPANY = 'HANDLE_COMPANY'

export const handleCompany = (Company) => {
    console.log(Company)
    return {
        type: HANDLE_COMPANY,
        payload: Company
    }
 }

 const HANDLE_JOBTITLE = 'HANDLE_JOBTITLE'

export const handleJobTitle = (JobTitle) => {
    return {
        type: HANDLE_JOBTITLE,
        payload: JobTitle
    }
 }

 const HANDLE_ADDRESS = 'HANDLE_ADDRESS'

export const handleAddress = (Address) => {
    return {
        type: HANDLE_ADDRESS,
        payload: Address
    }
 }

 const HANDLE_CITY = 'HANDLE_CITY'

export const handleCity = (City) => {
    return {
        type: HANDLE_CITY,
        payload: City
    }
 }
 const HANDLE_STATE = 'HANDLE_STATE'

export const handleState = (State) => {
    return {
        type: HANDLE_STATE,
        payload: State
    }
 }
 const HANDLE_ZIPCODE = 'HANDLE_ZIPCODE'

export const handleZipcode = (Zipcode) => {
    return {
        type: HANDLE_ZIPCODE,
        payload: Zipcode
    }
 }
 const HANDLE_JOBDESCRIPTION = 'HANDLE_JOBDESCRIPTION'

export const handleJobDescription = (JobDescription) => {
    return {
        type: HANDLE_JOBDESCRIPTION,
        payload: JobDescription
    }
 }

 const HANDLE_EMPLOYMENTTYPEMENU = 'HANDLE_EMPLOYMENTTYPEMENU'

export const handleEmploymentTypeMenu = (EmploymentTypeMenu) => {
    return {
        type: HANDLE_EMPLOYMENTTYPEMENU,
        payload: EmploymentTypeMenu
    }
 }
 const HANDLE_SENIORITYLEVELMENU = 'HANDLE_SENIORITYLEVELMENU'

export const handleSeniorityLevelMenu = (SeniorityLevelMenu) => {
    return {
        type: HANDLE_SENIORITYLEVELMENU,
        payload: SeniorityLevelMenu
    }
 }

 const HANDLE_VISASTATUSMENU = 'HANDLE_VISASTATUSMENU'

export const handleVisaStatusMenu = (VisaStatusMenu) => {
    return {
        type: HANDLE_VISASTATUSMENU,
        payload: VisaStatusMenu
    }
 }

 const HANDLE_SUBMITRESUMEMENU = 'HANDLE_SUBMITRESUMEMENU'

 export const handleSubmitResumeMenu = (SubmitResumeMenu) => {
     return {
         type: HANDLE_SUBMITRESUMEMENU,
         payload: SubmitResumeMenu
     }
  }

  const HANDLE_EDUCATIONMENU = 'HANDLE_EDUCATIONMENU'

  export const handleEducationMenu = (EducationMenu) => {
      return {
          type: HANDLE_EDUCATIONMENU,
          payload: EducationMenu
      }
   }
   const HANDLE_JOBLISTINGS = 'HANDLE_JOBLISTINGS'

export const handleJobListings = (JobListing) => {
    return {
        type: HANDLE_JOBLISTINGS,
        payload: JobListing
    }
 }

   export default function reducer(state=initialState,action) {
    const { type, payload } = action
 
    switch(type) {
        case HANDLE_COMPANY:
            return { ...state,  Company: payload}
        case HANDLE_JOBTITLE:
            return { ...state, JobTitle: payload}
        case HANDLE_ADDRESS:
            return { ...state, Address: payload }
        case HANDLE_CITY:
                return { ...state, City: payload }
        case HANDLE_STATE:
            return { ...state, State: payload }
        case HANDLE_ZIPCODE:
            return { ...state, Zipcode: payload }
        case HANDLE_JOBDESCRIPTION:
            return { ...state, JobDescription: payload }
        case HANDLE_EMPLOYMENTTYPEMENU:
            return { ...state, EmploymentTypeMenu: payload }
        case HANDLE_SENIORITYLEVELMENU:
            return { ...state, SeniorityLevelMenu: payload }
        case HANDLE_VISASTATUSMENU:
            return { ...state, VisaStatusMenu: payload }
        case HANDLE_SUBMITRESUMEMENU:
            return { ...state, SubmitResumeMenu: payload }
        case HANDLE_EDUCATIONMENU:
            return { ...state, EducationMenu: payload }
        case HANDLE_JOBLISTINGS:
                return { ...state,  JobListing: payload}
        default: return state
    }
 }

