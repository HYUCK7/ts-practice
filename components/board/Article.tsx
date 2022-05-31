import { IArticle } from "@/types"
import React from "react"

type Props = {
    article: IArticle
    deletePost: (id: number) => void // 타입의 추상화
}

const Article : React.FC<Props> = ({article, deletePost}) => {
    return (
        <>
        <h1>게시글</h1>
        <h1>글번호: {article.artId}</h1>
        <h1>제목: {article.title}</h1>
        <h1>내용: {article.content}</h1>
        <button onClick={ () => deletePost(article.artId)}></button>
        </>
    )
}
export default Article