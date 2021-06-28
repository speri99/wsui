//common constants are defined here

import { allowedNodeEnvironmentFlags } from "process";
import {environment} from "../environments/environment";

export const dev01Env = {
    url: {
      signup:
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAgDF5MIVaqFlGIzUUhFemrKvnLmLymrgs",
      login:
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgDF5MIVaqFlGIzUUhFemrKvnLmLymrgs",
    },
  };
  
  export const devEnv = {
    apiHost: environment.apiUrl,
  };
  
  export const testEnv = {};
  
  //post url list
  export const apiHost =environment.apiUrl;
  export const saveMentorUrl = apiHost + "api/v1/mentor/saveMentor";
  export const saveMentorDetailsUrl = apiHost + "api/v1/mentor/saveMentorProfile";
  export const saveMentorAboutMeStep =
    apiHost + "api/v1/mentor/saveMentorAboutMeStep1";
  
  export const saveMentorPricing =
    apiHost + "api/v1/mentor/saveMentorPricingStep6";
  export const saveMentorGallery =
    apiHost + "api/v1/mentor/saveMentorGallaryStep5";
  export const saveMentorAvailability =
    apiHost + "api/v1/mentor/updateUserAvailableStatus";
  export const saveMentorMediaLinks =
    apiHost + "api/v1/mentor/saveMentorSocialLinks";
  export const saveMentorExpertiseUrl =
    apiHost + "api/v1/mentor/saveMentorExpertise";
  export const saveMentorProjectsUrl =
    apiHost + "api/v1/mentor/saveMentorProjects";
  export const saveMentorEmploymentsUrl =
    apiHost + "api/v1/mentor/saveMentorEmployments";
  export const saveMentorSocialPresenceUrl =
    apiHost + "api/v1/mentor/saveMentorSocialLinks";
  export const loginMentorUrl = apiHost + "api/v1/auth/login";
  export const loginUrl = apiHost + "api/v1/auth/login";
  export const signupUrl = apiHost + "api/v1/user/registerUser";
  export const resetPasswordUrl = apiHost + "api/v1/user/resetPassword";
  export const updatePasswordUrl = apiHost + "api/v1/user/updatePassword";
  export const emailChecklUrl = apiHost + "api/v1/user/emailCheck";
  
  //get languages
  
  export const getLanugages = apiHost + "api/v1/master/listAllLanguages";
  
  export const getUserProfileUrl = apiHost + "api/v1/user/getUserProfile";
  export const saveUserDetailsUrl = apiHost + "api/v1/user/saveProfile";
  //admin URL List
  export const getMasterTechnologiesUrl =
    apiHost + "api/v1/admin/listAllMasterTechnologies";
  export const addMasterTechnologyUrl =
    apiHost + "api/v1/admin/updateMasterTechnologies";
  //Category add,update url`s
  export const getAllSubCategories =
    apiHost + "api/v1/admin/listAllMasterSubCategories";
  export const updateSubCategories =
    apiHost + "api/v1/admin/updateMasterSubCategories";
  //Sub Category add,update
  export const getAllCategoriesList =
    apiHost + "api/v1/admin/listAllMasterCategories";
  export const updateMasterCategories =
    apiHost + "api/v1/admin/updateMasterCategories";
  export const getSubCategoriesForCategory =
    apiHost + "api/v1/admin/getSubCategoriesForCategory";
  //Services List
  export const getTechServices =
    apiHost + "api/v1/admin/listServicesToTechnologies";
  export const updateTechService =
    apiHost + "api/v1/admin/updateServicesToTechnologies";
  //Delivery times list
  export const getAllDeliveryTimes =
    apiHost + "api/v1/admin/listAllDeliveryTimes";
  export const updateDeliveryTimes = apiHost + "api/v1/admin/updateDeliveryTimes";
  
  //Mentor Levels List
  export const getMentorLevels = apiHost + "api/v1/admin/listMentorLevels";
  export const updateMentorLevels = apiHost + "api/v1/admin/updateMentorLevels";
  
  //Mentor Support Types
  export const getMentorSupportTypes =
    apiHost + "api/v1/admin/listMentorSupportTypes";
  export const updateMentorSupportTypes =
    apiHost + "api/v1/admin/updateMentorSupportTypes";
  
  //Countries
  export const getCountries = apiHost + "api/v1/admin/listAllMasterCountries";
  export const updateCountries = apiHost + "api/v1/admin/updateMasterCountries";
  
  //Service Mappings
  export const updateServiceMappings =
    apiHost + "api/v1/admin/updateSubCategoriesForTechnologyServices";
  
  //Language CRUD
  export const getLanguagesUrl = apiHost + "api/v1/admin/listAllMasterLanguages";
  export const updateLanguagesUrl =
    apiHost + "api/v1/admin/updateMasterLanguages";
  
  //Mentors
  
  export const getMentorsListUrl = apiHost + "api/v1/admin/listAllMentorsAdmin";
  export const getMediaTypesUrl = apiHost + "api/v1/admin/listAllMediaTypes";
  export const updateMentorMediaUrl =
    apiHost + "api/v1/admin/updateMentorMediaData";
  
  export const getMentorsInfoUrl = apiHost + "api/v1/mentor/listMentors";
  export const getMasterTechInfo =
    apiHost + "api/v1/admin/getSubCategoriesForTechnologyServices";
  export const addUpdateHomePageProjects =
    apiHost + "api/v1/admin/updateHomePageFreeLanceProjects";
  export const addUpdateTestimonials =
    apiHost + "api/v1/admin/updateHomePageTestimonials";
  export const listFreeLanceProjects =
    apiHost + "api/v1/admin/listFreeLanceProjects";
  export const getTestimonialsList = apiHost + "api/v1/admin/listTestimonials";
  
  export const assignMentorLevelsUrl =
    apiHost + "api/v1/admin/updateMentorMentorLevels";
  export const assignMentorSupportTypesUrl =
    apiHost + "api/v1/admin/updateMentorMentorSupportTypes";
  export const assignMentorDeliveryTimesUrl =
    apiHost + "api/v1/admin/updateMentorDeliveryTimes";
  export const getMentorInfoAdmin = apiHost + "api/v1/admin/mentor/getProfile";
  export const updateMentorGeneralInfo =
    apiHost + "api/v1/admin/updateMentorGeneralInfo";
  
  //get url list
  export const getTimezoneListUrl = apiHost + "api/v1/master/listAllTimezones";
  export const getTechnologyListUrl =
    apiHost + "api/v1/master/listSuggestedTechnologies";
  export const getTechnologies =
    apiHost + "api/v1/web/listAllMasterSubCategories";
  export const getMentorProfileUrl = apiHost + "api/v1/mentor/getProfile";
  export const getLanguageListUrl = apiHost + "api/v1/master/listAllLanguages";
  
  //delete url list
  export const deleteMentorDataUrl = apiHost + "api/v1/mentor/deleteMentorData";
  export const deleteAdminData = apiHost + "api/v1/admin/deleteAdminData";
  export const deleteFreelanceProject =
    apiHost + "api/v1/admin/deleteHomePageFreeLanceProjects";
  export const deleteTestimonial =
    apiHost + "api/v1/admin/deleteHomePageTestimonials";
  
  //constants used in app
  export const googleClientId =
    "879900369770-s96uh71bt373t4toee8e4q4gjcm12862.apps.googleusercontent.com"; //"593118829907-no4km78gdksnnngksauqprfrkqaj9rf1.apps.googleusercontent.com";
  //client secret - dpebmGJX3pCgqmwzf7Cddntt
  
  // need to include our email address for google test email accounts
  
  export const facebookAppId = "760108007948616"; //"577040223247630";
  
  //test Users for facebook
  //email rujhjwafkw_1612847981@tfbnw.net | pass Set44n0w
  
  export const githubClientId = "45f25f56bdf6247caf1e"; //"428d570768954af42fca";
  export const linkedInClientId = "81lx5we2omq9xh";
  export const linkedInRedirectUrl = "http://localhost:3001/signup";
  
  export const getTechList = apiHost + "api/v1/web/listTechnologies";
  export const mostSearchedKeywords =
    apiHost + "api/v1/web/listMostSearchedKeywords";
  export const homeAnalyticsInfo = apiHost + "api/v1/web/homeAnalyticsInfo";
  
  export const listAllKeyWords = apiHost + "api/v1/web/listAllKeyWords";
  export const listTestimonials = apiHost + "api/v1/web/listTestimonials";
  