import css from "./Profile.module.css"

export default function Profile({
    profile: {
        username,
        tag,
        location,
        avatar,
        status: { followers, views, likes }
    }
})
{
    return (
        <div className={css.container}>
            <div >
                <img className={css.avatar}
                    src={avatar}
                    alt="User avatar"
                />
                <p className={css.username}>{username}</p>
                <p className={css.text}>@{tag}</p>
                <p className={css.text}>{location}</p>
            </div>
            <ul className={css.listData}>
                <li className={css.listItem}>
                    <span>Followers</span>
                    <span className={css.itemNumbers}>{followers}</span>
                </li>
                <li className={css.listItem}>
                    <span>Views</span>
                    <span className={css.itemNumbers}>{views}</span>
                </li>
                <li className={css.listItem}>
                    <span>Likes</span>
                    <span  className={css.itemNumbers}>{likes}</span>
                </li>
            </ul>
        </div>
    )
}
