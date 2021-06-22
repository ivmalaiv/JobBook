import "./HeaderBack.scss";

const HeaderBack = ()=>{
    return(
        <div className="HeaderBack">
            <div className="logo">
            <h3>Admin Panel</h3>
            </div>
            <div className="button-wrapper">
                <button>Reports</button>
                <button>Create Report</button>
                <button>Log out</button>
            </div>
        </div>
    )
}


export default HeaderBack