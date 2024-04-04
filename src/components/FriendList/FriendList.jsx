import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
    return (
        <ul className={css.friends}>
            {friends.map((friend) => (
                <li key={friend.id} className={css.friend}>
                    <FriendListItem friendItem={friend} />
                </li>
            ))}  
        </ul>
    )
}