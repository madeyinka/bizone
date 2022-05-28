import React, {useEffect, useState} from 'react'
import useAxiosPrivate from '../../hooks/useAxiosPrivate'
import { Link, useNavigate, useLocation } from 'react-router-dom'

function Header() {
    const axiosPrivate = useAxiosPrivate()
    const [user, setUser] = useState()
    const navigate = useNavigate()
    const location = useLocation()
   

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const getUser = async () => {
            try {
                const response = await axiosPrivate.get('/client/by-identity', {
                    signal: controller.signal
                })
                //console.log(response.data.response)
                isMounted && setUser(response.data.response)
            } catch (err) {
                console.error(err)
                navigate('/auth/login', { state: { from: location }, replace: true })
            }
        }

        getUser()

        return () => {
            isMounted = false
            controller.abort()
        }
    }, [axiosPrivate, navigate, location])

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
                
                <div className="dropdown">
                    <div className="badge-top-container" role="button" id="dropdownNotification" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {/* <span className="badge badge-primary">3</span> */}
                        <i className="i-Bell text-muted header-icon"></i>
                    </div>
                </div>
                
                <div className="dropdown">
                    <div className="user col align-self-end">
                        <img src={user?.avatar} id="userDropdown" alt="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                            <div className="dropdown-header">
                                <i className="i-Lock-User mr-1"></i> {user?.fname} {user?.lname}
                            </div>
                            <a href={user?.website} className="dropdown-item" target="_blank" rel='noreferrer'>View Site</a>
                            <Link to="/dashboard/profile" className="dropdown-item">View Profile</Link>
                            <Link to="/dashboard/update-profile" className="dropdown-item">Update Profile</Link>
                            <Link className="dropdown-item" to="/dashboard">Sign out</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
