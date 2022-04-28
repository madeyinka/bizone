import React, {useContext, useEffect} from 'react'
import { GlobalContext } from '../../contexts/Provider'
import { userProfile } from '../../contexts/actions/auth/user'
import { Link } from 'react-router-dom'

function Header() {
    const {userState:{user:{data:{response}}}, userDispatch} = useContext(GlobalContext)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        userProfile(user.id)(userDispatch)
    },[user.id, userDispatch])

    return (
        <div className="main-header">
            <div className="logo">
                <img src="../../../assets/images/logo.png" alt="" />
            </div>
            <div className="menu-toggle">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div style={{margin:"auto"}}></div>
            <div className="header-part-right">
                <i className="i-Full-Screen header-icon d-none d-sm-inline-block" data-fullscreen></i>
                {/* <div className="dropdown">
                    <i className="i-Safe-Box text-muted header-icon" role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></i>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <div className="menu-icon-grid">
                            <a href="dashboard1.html#"><i className="i-Shop-4"></i> Home</a>
                            <a href="dashboard1.html#"><i className="i-Library"></i> UI Kits</a>
                            <a href="dashboard1.html#"><i className="i-Drop"></i> Apps</a>
                            <a href="dashboard1.html#"><i className="i-File-Clipboard-File--Text"></i> Forms</a>
                            <a href="dashboard1.html#"><i className="i-Checked-User"></i> Sessions</a>
                            <a href="dashboard1.html#"><i className="i-Ambulance"></i> Support</a>
                        </div>
                    </div>
                </div> */}
                <div className="dropdown">
                    <div className="badge-top-container" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {/* <span className="badge badge-primary">3</span> */}
                        <i className="i-Bell text-muted header-icon"></i>
                    </div>
                    {/* <div className="dropdown-menu dropdown-menu-right notification-dropdown rtl-ps-none" aria-labelledby="dropdownNotification" data-perfect-scrollbar data-suppress-scroll-x="true">
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon">
                                <i className="i-Speach-Bubble-6 text-primary mr-1"></i>
                            </div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center">
                                    <span>New message</span>
                                    <span className="badge badge-pill badge-primary ml-1 mr-1">new</span>
                                    <span className="flex-grow-1"></span>
                                    <span className="text-small text-muted ml-auto">10 sec ago</span>
                                </p>
                                <p className="text-small text-muted m-0">James: Hey! are you busy?</p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon">
                                <i className="i-Receipt-3 text-success mr-1"></i>
                            </div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center">
                                    <span>New order received</span>
                                    <span className="badge badge-pill badge-success ml-1 mr-1">new</span>
                                    <span className="flex-grow-1"></span>
                                    <span className="text-small text-muted ml-auto">2 hours ago</span>
                                </p>
                                <p className="text-small text-muted m-0">1 Headphone, 3 iPhone x</p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon">
                                <i className="i-Empty-Box text-danger mr-1"></i>
                            </div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center">
                                    <span>Product out of stock</span>
                                    <span className="badge badge-pill badge-danger ml-1 mr-1">3</span>
                                    <span className="flex-grow-1"></span>
                                    <span className="text-small text-muted ml-auto">10 hours ago</span>
                                </p>
                                <p className="text-small text-muted m-0">Headphone E67, R98, XL90, Q77</p>
                            </div>
                        </div>
                        <div className="dropdown-item d-flex">
                            <div className="notification-icon">
                                <i className="i-Data-Power text-success mr-1"></i>
                            </div>
                            <div className="notification-details flex-grow-1">
                                <p className="m-0 d-flex align-items-center">
                                    <span>Server Up!</span>
                                    <span className="badge badge-pill badge-success ml-1 mr-1">3</span>
                                    <span className="flex-grow-1"></span>
                                    <span className="text-small text-muted ml-auto">14 hours ago</span>
                                </p>
                                <p className="text-small text-muted m-0">Server rebooted successfully</p>
                            </div>
                        </div>
                    </div> */}
                </div>
                
                <div className="dropdown">
                    <div className="user col align-self-end">
                        <img src={response.avatar} id="userDropdown" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <div className="dropdown-header">
                                <i className="i-Lock-User mr-1"></i> {response.fname} {response.lname}
                            </div>
                            <a href="/" className="dropdown-item">View Site</a>
                            <Link to="/dashboard/profile" className="dropdown-item">View Profile</Link>
                            <Link to="/dashboard/update-profile" className="dropdown-item">Update Profile</Link>
                            <a className="dropdown-item" href="/">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
