import React from 'react'
import {Link} from 'react-router-dom'

function SideNav() {
    return (
        <div className="side-content-wrap">
            <div className="sidebar-left open rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                <ul className="navigation-left">
                    <li className="nav-item"><a className="nav-item-hold" href="/dashboard/index"><i className="nav-icon i-Bar-Chart"></i><span className="nav-text">Dashboard</span></a>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="pages"><a className="nav-item-hold" href="/dashboard/static/view"><i className="nav-icon i-One-Window"></i><span className="nav-text">Blocks</span></a>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="services"><a className="nav-item-hold" href="/dashboard/service/view"><i className="nav-icon i-Management"></i><span className="nav-text">Services</span></a>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="contents"><a className="nav-item-hold" href="/dashboard/content/view"><i className="nav-icon i-Newspaper"></i><span className="nav-text">Contents</span></a>
                        <div className="triangle"></div>
                    </li>
                    {/* <li className="nav-item"><a className="nav-item-hold" href="dashboard1.html#"><i className="nav-icon i-Computer-Secure"></i><span className="nav-text">Commerce</span></a>
                        <div className="triangle"></div>
                    </li> */}
                    <li className="nav-item" data-item="portfolio"><a className="nav-item-hold" href="dashboard1.html#"><i className="nav-icon i-Film-Video"></i><span className="nav-text">Portfolio</span></a>
                        <div className="triangle"></div>
                    </li>
                    {/* <li className="nav-item" data-item="media"><a className="nav-item-hold" href="dashboard1.html#"><i className="nav-icon i-File-Clipboard-File--Text"></i><span className="nav-text">Media</span></a>
                        <div className="triangle"></div>
                    </li> */}
                    <li className="nav-item"><a className="nav-item-hold" href="/dashboard/contact"><i className="nav-icon i-Address-Book"></i><span className="nav-text">Contacts</span></a>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="newsletter"><a className="nav-item-hold" href="dashboard1.html#"><i className="nav-icon i-Letter-Open"></i><span className="nav-text">Newsletter</span></a>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item active" data-item="settings"><a className="nav-item-hold" href="dashboard1.html#"><i className="nav-icon i-Gear-2"></i><span className="nav-text">Settings</span></a>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="clients"><a className="nav-item-hold" href="/dashboard/client/all-clients"><i className="nav-icon i-Administrator"></i><span className="nav-text">Clients</span></a>
                        <div className="triangle"></div>
                    </li>
                    {/* <li className="nav-item"><a className="nav-item-hold" href="/"><i className="nav-icon i-Power"></i><span className="nav-text">Log Out</span></a>
                        <div className="triangle"></div>
                    </li> */}
                </ul>
            </div>
            <div className="sidebar-left-secondary rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                <ul className="childNav" data-parent="pages">
                    <li className="nav-item"><Link to="/dashboard/static/create"><i className="nav-icon i-Add-File"></i><span className="item-name">Create Block</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard/static/view"><i className="nav-icon i-Files"></i><span className="item-name">Block Lists</span></Link></li>
                </ul>
                <ul className="childNav" data-parent="services">
                    <li className="nav-item"><a href="/dashboard/service/create"><i className="nav-icon i-Add-File"></i><span className="item-name">Create Service</span></a></li>
                    <li className="nav-item"><a href="/dashboard/service/view"><i className="nav-icon i-Files"></i><span className="item-name">Service Lists</span></a></li>
                    <li className="nav-item"><a href="/dashboard/service/group"><i className="nav-icon i-Folders"></i><span className="item-name">Service Group</span></a></li>
                </ul>
                <ul className="childNav" data-parent="contents">
                    <li className="nav-item"><Link to="/dashboard/content/create"><i className="nav-icon i-Add-File"></i><span className="item-name">Create Content</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard/content/view"><i className="nav-icon i-Files"></i><span className="item-name">Content Lists</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard/content/attributes"><i className="nav-icon i-File-Network"></i><span className="item-name">Attributes</span></Link></li>
                    <li className="nav-item"><a href="/dashboard/content/comments"><i className="nav-icon i-Speach-Bubble-3"></i><span className="item-name">Comments</span></a></li>
                </ul>
                <ul className="childNav" data-parent="portfolio">
                    <li className="nav-item"><a href="charts.echarts.html"><i className="nav-icon i-Add-File"></i><span className="item-name">Create Portfolio</span></a></li>
                    <li className="nav-item"><a href="charts.chartsjs.html"><i className="nav-icon i-Files"></i><span className="item-name">Portfolio Lists</span></a></li>
                    <li className="nav-item"><a href="charts.chartsjs.html"><i className="nav-icon i-Folders"></i><span className="item-name">Collections</span></a></li>
                </ul>
                {/* <ul className="childNav" data-parent="media">
                    <li className="nav-item"><a href="/"><i className="nav-icon i-Crop-2"></i><span className="item-name">Upload New</span></a></li>
                    <li className="nav-item"><a href="/"><i className="nav-icon i-Loading-3"></i><span className="item-name">View Media</span></a></li>
                </ul> */}
                <ul className="childNav" data-parent="newsletter">
                    <li className="nav-item"><a href="accordion.html"><i className="nav-icon i-Add-File"></i><span className="item-name">New Bulletin</span></a></li>
                    <li className="nav-item"><a href="badges.html"><i className="nav-icon i-Envelope"></i><span className="item-name">All Sent</span></a></li>
                    <li className="nav-item"><a href="/"><i className="nav-icon i-Add-User"></i><span className="item-name">Add Subscriber</span></a></li>
                    <li className="nav-item"><a href="buttons.html"><i className="nav-icon i-Conference"></i><span className="item-name">Subscribers</span></a></li>
                </ul>
                <ul className="childNav" data-parent="settings">
                    <li className="nav-item"><a href="../sessions/signin.html"><i className="nav-icon i-Optimization"></i><span className="item-name">General</span></a></li>
                    {/* <li className="nav-item"><a href="../sessions/signup.html"><i className="nav-icon i-Add-User"></i><span className="item-name">Socials</span></a></li>
                    <li className="nav-item"><a href="../sessions/forgot.html"><i className="nav-icon i-Find-User"></i><span className="item-name">Integration</span></a></li> */}
                </ul>
                <ul className="childNav" data-parent="clients">
                    <li className="nav-item"><a href="/dashboard/client/add-new"><i className="nav-icon i-Add-File"></i><span className="item-name">Create Client</span></a></li>
                    <li className="nav-item"><a href="/dashboard/client/all-clients"><i className="nav-icon i-Files"></i><span className="item-name">Client Lists</span></a></li>
                </ul>
            </div>
            <div className="sidebar-overlay"></div>
        </div>
    )
}

export default SideNav
