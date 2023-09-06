import { useEffect, useState } from "react"

function Profile(){

    const[user, setUser] = useState()

    useEffect(() => {
        fetch('https://api.github.com/users/Alexandro2022014041')
        .then((response) => response.json())
        .then((responseUserJson) => setUser(responseUserJson))
    }, [])

    return(
        <>
            {user?.login}
            <img src={user?.avatar_url}/>
            {user?.company}
        </>
    )
}
export default Profile