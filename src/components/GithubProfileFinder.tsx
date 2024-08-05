'use client';
import { useCallback, useEffect, useState } from "react";
import GithubCard from "./GithubCard";

const GithubProfileFinder = () => {
    const [githubUsername, setGithubUsername] = useState<string>('');
    const [nameToSearch, setNameToSearch] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>('');
    const [userData, setUserData] = useState<{login: string, avatar_url: string, url: string, followers: number, following: number, public_repos: number, name: string, created_at: Date | null} | null>({
        login: '',
        avatar_url: '',
        url: '',
        followers: 0,
        following: 0,
        public_repos: 0,
        name: '',
        created_at: null,
    });
    const handleSubmit = () => {
        setNameToSearch(githubUsername)
        setGithubUsername('')
    }
    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }
    const fetchGithubProfile = useCallback(async () => {
        if (!nameToSearch) return;
        setLoading(true);
        try {
            const response = await fetch(`https://api.github.com/users/${nameToSearch}`);
            const data = await response.json();
            if (data) {
                setUserData(data);
            }
            console.log(JSON.stringify(data))
            setLoading(false);
        } catch (error) {
            console.error(error);
            if (error instanceof Error) {
                setError('Error fetching user data: '+ error.message );
            }
            setUserData(null)
        } finally {
            setLoading(false);
        }
    },[nameToSearch]);
    useEffect(() => {
        fetchGithubProfile();
    },[fetchGithubProfile])
    if (loading) return <div>Loading...</div>;
    return (
        <div className="flex flex-col items-center justify-center p-4 mt-2">
            <h1>Github Profile Finder</h1>
            <div>
                <input 
                    type="text"
                    name="github-username"
                    placeholder="Enter Github Username"
                    onChange={(e) => setGithubUsername(e.target.value)}
                    value={githubUsername}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {userData && Object.keys(userData).length > 0 ? <GithubCard user={userData} /> : <div>No user found</div>}
        </div>
    )
}
export default GithubProfileFinder;