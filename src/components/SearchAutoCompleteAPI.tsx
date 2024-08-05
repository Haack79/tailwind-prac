'use client';
import { useEffect, useState } from "react";

const SearchAutoCompleteAPI = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([])
    const [error, setError] = useState<string | null>('');
    const [searchParam, setSearchParam] = useState<string>('');
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [filteredUsers, setFilteredUsers] = useState<string[]>([]);


    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        setSearchParam(e.currentTarget.innerText);
        setShowDropdown(false);
    }
    const fetchListOfUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            if (data && data.users && data.users.length > 0) {
                setUsers(data.users.map((userItem: {firstName: string}) => userItem.firstName));
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            if (error instanceof Error) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    }

    const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const filteredData = users && users.length ? users.filter((user: string) => user.toLowerCase().includes(query)) : [];
            setFilteredUsers(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }

    }
console.log(filteredUsers)
useEffect(() => {
  fetchListOfUsers();
},[]);

    return (
        <div className="flex justify-center items-center p-4 my-2">
            <input
                type="text"
                name="search"
                placeholder="Search"
                value={searchParam}
                onChange={handleOnchange}
            />
            <div>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {/* {users && users.length > 0 && (
                    <ul>
                        {users.map((user: string, index: number) => (
                            <li key={index}>{user}</li>
                        ))}
                    </ul>
                )} */}
                {showDropdown && filteredUsers && filteredUsers.length > 0 && (
                    <ul>
                        {filteredUsers.map((user: string, index: number) => (
                            <li key={index} onClick={handleClick}>{user}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default SearchAutoCompleteAPI;