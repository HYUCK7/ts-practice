export interface IUser{
    userId : number
    username : string
    password : string
    name : string
    email : string
    regDate : string
    token : string
    roles : string[]
}

export interface IArticle{
    artId: number
    title?: string // Optional null 허용.
    content? :string
}

export interface IBoard{

}