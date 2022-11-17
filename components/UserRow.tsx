type Props = {
    user: any
}

export default function UserRow({ user }: Props) {

    return (
        <tr key={user.id}>
            <td className='username'>{user.username}</td>
            <td className='email'>{user.email}</td>
            <td className='action'>
                <a href="#" className="hover">Edit</a>
                <a href="#" className="hover">Delete</a>
            </td>
        </tr>
    )
}