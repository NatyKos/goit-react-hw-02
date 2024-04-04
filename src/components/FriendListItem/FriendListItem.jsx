import css from "./FriendListItem.module.css"
import clsx from "clsx"

export default function FriendListItem(
    {friendItem: { avatar, name, isOnline, id } }
) {
    const status = clsx(css.status, isOnline ? css.online : css.offline)
    
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48"/>
            <p>{name}</p>
            <p className={status}>{isOnline ? 'online': 'offline' }</p>
        </div>
    )
}
