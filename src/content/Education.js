import wildcard from "../common/Wildcard";

export default function Education () {
    return (
        <div className="contents">
            <h1>My education</h1>
            <br />
            <wildcard 
            title="bachelor of science"
            desc="New Media"
            from="2004"
            to="2007" />
        </div>
    )
}