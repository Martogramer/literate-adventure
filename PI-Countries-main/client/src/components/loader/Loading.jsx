
import style from "./loader.module.css";

export default function Loader() {
    return (
        <div className={style.Load}>
            <div className={style.Spinner} />
        </div>
    );
}