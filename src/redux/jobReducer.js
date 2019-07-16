

const initialState = {
    Company: '',
    JobTitle: '',
    Location: '',
    JobDescription: '',
    EmploymentTypeMenu:false,
    SeniorityLevelMenu:false,
    VisaStatusMenu: false,
    SubmitResumeMenu:false,
    EducationMenu: false,
    JobPosting: []
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

 const HANDLE_LOCATION = 'HANDLE_LOCATION'

export const handleLocation = (Location) => {
    return {
        type: HANDLE_LOCATION,
        payload: Location
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

   export default function reducer(state=initialState,action) {
    const { type, payload } = action
 
    switch(type) {
        case HANDLE_COMPANY:
            return { ...state,  Company: payload}
        case HANDLE_JOBTITLE:
            return { ...state, JobTitle: payload}
        case HANDLE_LOCATION:
            return { ...state, Location: payload }
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
        default: return state
    }
 }

 