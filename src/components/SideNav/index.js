import React from 'react'
import {Link} from 'react-router-dom'

function SideNav() {
    return (
        <div className="side-content-wrap">
            <div className="sidebar-left open rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                <ul className="navigation-left">
                    <li className="nav-item"><Link className="nav-item-hold" to="/dashboard"><i className="nav-icon i-Bar-Chart"></i><span className="nav-text">Dashboard</span></Link>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="pages"><Link className="nav-item-hold" to="/dashboard/static/view"><i className="nav-icon i-One-Window"></i><span className="nav-text">Blocks</span></Link>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="services"><Link className="nav-item-hold" to="/dashboard/service/view"><i className="nav-icon i-Management"></i><span className="nav-text">Services</span></Link>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="contents"><Link className="nav-item-hold" to="/dashboard/content/view"><i className="nav-icon i-Newspaper"></i><span className="nav-text">Contents</span></Link>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="portfolio"><Link className="nav-item-hold" to="/dashboard"><i className="nav-icon i-Film-Video"></i><span className="nav-text">Portfolio</span></Link>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item"><Link className="nav-item-hold" to="/dashboard/contact"><i className="nav-icon i-Address-Book"></i><span className="nav-text">Contacts</span></Link>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="newsletter"><Link className="nav-item-hold" to="/dashboard"><i className="nav-icon i-Letter-Open"></i><span className="nav-text">Newsletter</span></Link>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item active" data-item="settings"><Link className="nav-item-hold" to="/dashboard"><i className="nav-icon i-Gear-2"></i><span className="nav-text">Settings</span></Link>
                        <div className="triangle"></div>
                    </li>
                    <li className="nav-item" data-item="clients"><Link className="nav-item-hold" to="/dashboard/client/all-clients"><i className="nav-icon i-Administrator"></i><span className="nav-text">Clients</span></Link>
                        <div className="triangle"></div>
                    </li>
                </ul>
            </div>
            <div className="sidebar-left-secondary rtl-ps-none" data-perfect-scrollbar="" data-suppress-scroll-x="true">
                <ul className="childNav" data-parent="pages">
                    <li className="nav-item"><Link to="/dashboard/static/create"><i className="nav-icon i-Add-File"></i><span className="item-name">Create Block</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard/static/view"><i className="nav-icon i-Files"></i><span className="item-name">Block Lists</span></Link></li>
                </ul>
                <ul className="childNav" data-parent="services">
                    <li className="nav-item"><Link to="/dashboard/service/create"><i className="nav-icon i-Add-File"></i><span className="item-name">Create Service</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard/service/view"><i className="nav-icon i-Files"></i><span className="item-name">Service Lists</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard/service/group"><i className="nav-icon i-Folders"></i><span className="item-name">Service Group</span></Link></li>
                </ul>
                <ul className="childNav" data-parent="contents">
                    <li className="nav-item"><Link to="/dashboard/content/create"><i className="nav-icon i-Add-File"></i><span className="item-name">Create Content</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard/content/view"><i className="nav-icon i-Files"></i><span className="item-name">Content Lists</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard/content/attributes"><i className="nav-icon i-File-Network"></i><span className="item-name">Attributes</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard/content/comments"><i className="nav-icon i-Speach-Bubble-3"></i><span className="item-name">Comments</span></Link></li>
                </ul>
                <ul className="childNav" data-parent="portfolio">
                    <li className="nav-item"><Link to="/dashboard"><i className="nav-icon i-Add-File"></i><span className="item-name">Create Portfolio</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard"><i className="nav-icon i-Files"></i><span className="item-name">Portfolio Lists</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard"><i className="nav-icon i-Folders"></i><span className="item-name">Collections</span></Link></li>
                </ul>
                <ul className="childNav" data-parent="newsletter">
                    <li className="nav-item"><Link to="/dashboard"><i className="nav-icon i-Add-File"></i><span className="item-name">New Bulletin</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard"><i className="nav-icon i-Envelope"></i><span className="item-name">All Sent</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard"><i className="nav-icon i-Add-User"></i><span className="item-name">Add Subscriber</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard"><i className="nav-icon i-Conference"></i><span className="item-name">Subscribers</span></Link></li>
                </ul>
                <ul className="childNav" data-parent="settings">
                    <li className="nav-item"><Link to="/dashboard"><i className="nav-icon i-Optimization"></i><span className="item-name">General</span></Link></li>
                </ul>
                <ul className="childNav" data-parent="clients">
                    <li className="nav-item"><Link to="/dashboard/client/add-new"><i className="nav-icon i-Add-File"></i><span className="item-name">Create Client</span></Link></li>
                    <li className="nav-item"><Link to="/dashboard/client/all-clients"><i className="nav-icon i-Files"></i><span className="item-name">Client Lists</span></Link></li>
                </ul>
            </div>
            <div className="sidebar-overlay"></div>
        </div>
    )
}

export default SideNav
