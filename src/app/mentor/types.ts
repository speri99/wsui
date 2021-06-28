export type SearchWord = {
    searchWord: string;
  };
  
  export type Skill = {
    id: string;
    name: string;
  } | null;
  
  export type SkillDetail = {
    expertise: number;
    id: string;
    name: string;
  };
  
  export type SocialProfile = {
    network: string;
    profileLink: string;
  };
  
  export type Auth = {
    fullName: string;
    email: string;
    password?: string;
  };
  
  export type TimeZone = {
    id?: string;
    value?: string;
  };
  
  export type LanguageName = {
    id: string;
    name: string;
  } | null;
  
  export type Language = {
    languageId?: string;
    languageName?: string;
    languageLevel?: string;
  };
  
  export type MentorData = {
    timeZone: TimeZone;
    expertise: SkillDetail[];
    socialProfiles: SocialProfile[];
    about: string;
    pic: string;
    UserCertifications: Certification[];
    socialMediaLinks: SocialPreference[];
    qualification: string;
    fromQualification: string;
    supportedCategories: string[];
  };
  
  export enum Roles {
    Mentor = "Mentor",
    User = "User",
    Admin = "Admin",
  }
  
  // export enum SupportCategories {
  //     SUPPORT = 0,
  //     Training,
  //     FullTime,
  //     contract,
  //     freelance,
  // }
  
  export enum SupportOptions {
    support = 0,
    training = 1,
    fulltime = 2,
    contract = 3,
    freelance = 4,
  }
  
  export type SocialPreference = {
    type: string;
    linkURL: string;
    socialDisplay: boolean;
  };
  
  export type MentorProfile = {
    registerType?: "app" | "web";
    noOfSessionJobs: string;
    rate: string;
    inMinutes: string;
    description: string;
    videoUrl: string;
    occupation: string;
    UserSocialMediaLinks: SocialPreference[];
    UserEmployments: UserEmployment[];
    UserProjects: any;
    UserTechnologies: UserTechnologies[];
    ToUserReviews: any;
    UserLanguages: Language[];
    galleryFiles: GalleryFiles | null;
    MentorPricings: PricingPlanType | null;
    UserMediaContents: UserMediaContent[] | null;
    onlineStatus: string | null;
    //socialMediaLinks: SocialPreference[]
  };
  
  export interface Mentor extends MentorData, Auth, MentorProfile {}
  
  export type Education = {
    qualification: string;
    from: string;
  };
  
  export type SocialFormData = {
    socialLinkedIn: string;
  };
  
  export type AboutForm = {
    description: string;
    videoUrl: string;
    category: string;
    searchTags: string;
    yourStory: string;
    // shortBio: string;
  };
  
  export type UserTechnologies = {
    id: string;
    expYears: string;
    description: string;
    totalEndorsements: string;
    order: string;
    MasterTechnologies: {
      id: string;
      name: string;
    };
    UserTechnologiesRelateds: RelatedSkill[];
  };
  
  export type RelatedSkill = {
    id: string;
    order: string;
    MasterTechnologies: {
      id: string;
      na: string;
      st: boolean;
      lo: any;
      di: any;
    };
  };
  
  export type UserEmployment = {
    id: string;
    designationRole: string;
    companyName: string;
    location?: string;
    fromDate: string;
    toDate: string;
    description: string;
    UserEmploymentsRelateds: UserEmploymentsRelateds[];
    isCurrent: boolean;
  };
  
  export type UserProject = {
    id: string;
    title: string;
    projectUrl: string;
    companyName: string;
    clientName: string;
    description: string;
    UserProjectsRelateds: UserEmploymentsRelateds[];
    year: string;
  };
  
  export type UserEmploymentsRelateds = {
    id: string;
    order: number;
    MasterTechnologies: Skill;
  };
  
  export type GalleryFiles = {
    [key: string]: any;
    video: any;
    application: any;
    image: any;
  };
  
  export type UserMediaContent = {
    id: string;
    userId: string;
    mediaType: Number;
    status: true;
    mediaContent: string;
    createdAt: string;
    updatedAt: string;
    createdBy: any;
    updatedBy: any;
    deletedAt: any;
  };
  
  // export type PricingPlanType = {
  //     [key: string]: PricingCardType;
  //     "100hrs": PricingCardType;
  //     "50hrs": PricingCardType;
  //     "30hrs": PricingCardType;
  //     "20hrs": PricingCardType;
  //     "10hrs": PricingCardType;
  // }
  
  export type PricingPlanType = PricingCardType[];
  
  export type PricingCardType = {
    [key: string]: any;
    id: string;
    planType: string;
    planTitle: string;
    planDescription: string | null;
    validity: string;
    price: string;
    keyPoints: string;
    related: Skill[];
  };
  
  export type Certification = {
    name: string;
    from: string;
    year: string;
  };
  
  export enum MediaTypes {
    Image = 1,
    Video,
    Audio,
    Doc,
  }
  