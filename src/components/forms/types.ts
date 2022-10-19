export interface ILoginFormShape {
    email: string;
    password: string;
}

export interface ISignUpFormShape {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface IPublishFormShape {
    title: string;
    preview: string;
    body: string;
    tagId: string;
}