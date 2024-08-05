import React from 'react';
import Image from "next/image";
// instead of doing it inline,  use the typescript interface to define the props and pass it in
// interface GithubUser {
//     login: string;
//     avatar_url: string;
//     url: string;
//     followers: number;
//     following: number;
//     public_repos: number;
//     name: string;
// }

// interface GithubCardProps {
//     user: GithubUser;
// }
// const GithubCard = ({ user }: GithubCardProps) => {

const GithubCard = ( {user} : {user: {login: string, avatar_url: string, url: string, followers: number, following: number, public_repos: number, name: string, created_at: Date | null}}) => {
    const {login, avatar_url, url, followers, public_repos, following, name, created_at} = user;
    console.log(JSON.stringify(user))
    const createdDate = new Date(created_at as Date);
    console.log(createdDate)
    return (
        <div className="cursor-pointer">
            <div className="flex justify-center items-center pb-2 my-2 rounded-full">
                {avatar_url &&
                    <Image src={avatar_url} alt='user image' width={68} height={68} className="rounded-full m-2"/>
                }
            </div>
            <div className="flex justify-center items-center mb-2 bg-blue-500 p-2 rounded-md">
                <a href={`https://github.com/${login}`}>{name || login}</a>
            </div>
            {created_at &&
                <p className="flex justify-center items-center pb-2 my-2">User joined on {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                    month: "short",
                })} ${createdDate.getFullYear()}`}</p>
            }
            <div className="flex justify-center items-center gap-2">
                <p className="bg-green-400 rounded-md p-2">Followers: {followers}</p>
                <p className="bg-green-400 rounded-md p-2">Following: {following}</p>
                <p className="bg-green-400 rounded-md p-2">Public Repos: {public_repos}</p>
            </div>
        </div>
    )
}
export default GithubCard;