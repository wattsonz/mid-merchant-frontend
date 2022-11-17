import styled from 'styled-components'
import { Key, useEffect, useState } from "react"

import UserRow from './UserRow'

type Props = {}

const Div = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    .hover:hover {
        color: #00c8ff;
    }

    .username {
        width: 50%;
    }

    .email {
        width: 50%;
    }

    .action {
        width: 100px;
    }

    thead {
        background-color: #00c8ff;
    }

    th {
        padding: 2px;
    }

    tbody {
        background-color: #e8aadd;
    }

    td{
        padding: 10px;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    a {
        padding-left: 5px;
        padding-right: 5px;
    }
`
export default function TableList({ }: Props) {
    const USER_API_BASE_URL = "http://localhost:8080/api/v1/users"
    const [users, setUsers] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true);
        try {
            fetch(USER_API_BASE_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(data => {
                    setUsers(data);
                    setIsLoading(false);
                });
        } catch (error) {
            console.log("Error => ", error);
        }
    }, []);

    return (
        <Div>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {!isLoading && (
                    <tbody>
                        {users && users.map((user: { id: Key | null | undefined }) =>
                            <UserRow key={user.id} user={user} />
                        )}
                    </tbody>
                )}
            </table>
        </Div>
    )
}