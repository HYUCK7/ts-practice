import AddPost from "@/components/board/AddPost";
import Article from "@/components/board/Article";
import { IArticle } from "@/types";
import { InferGetStaticPropsType } from "next";
import React, { useState } from "react";

export default function BoardPage({articles}: InferGetStaticPropsType<typeof getStaticProps>){
    const [articleList, setArticleList] = useState(articles)

    const addpost = async (e:React.FormEvent, formData: IArticle) => {
        e.preventDefault()
        const article: IArticle = {
            artId: Math.random(),
            title: formData.title,
            content: formData.content
        }
        setArticleList([article, ...articleList]) // DB로 보내는 부분 생략되어있음.
    }

    if(!articleList) return <h1>Loading...</h1>

    const deletePost =async (artId:number) => {
        //filter 사용해서, 문제 해결
        const arr : IArticle[] = articles.filter((article: IArticle)=>(article.artId !== artId))
        // 람다는 함수니까 무조건 리턴 (()=>())
        setArticleList(arr)
    }

    return <>
    <AddPost write={addpost}/>
    {articleList.map((article: IArticle)=>(
        <Article key = {article.artId} deletePost = {deletePost} article = {article}/>
    ))}
    </>
}
export async function getStaticProps() { // 누구든 볼 수 있는 게시글
    const res = await fetch(BASE_URL)
    const articles: IArticle[] = await res.json()
    return { props: { articles } }
}// async의 이유는 서버를 다녀온다는 것.

const BASE_URL: string = "http://localhost:8080/articles"
