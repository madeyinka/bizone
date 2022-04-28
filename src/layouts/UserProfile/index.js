import React from 'react'

function UserProfileLayout(
    {profile:{response}}
) {
    return (
        <div className="main-content">
            	<div className="breadcrumb">
                    <h1>User Profile</h1>
                    <ul>
                        <li><a href="/">Dashboard</a></li>
                        <li>Profile</li>
                    </ul>
                </div>
                <div className="separator-breadcrumb border-top"></div>
                <div className="card user-profile o-hidden mb-4">
                    <div className="header-cover" style={{backgroundImage:'url(../../assets/images/photo-wide-4.jpg)'}}></div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 mb-4">
                            {/* <div className="card"> */}
                                <div className="card-body">
                                    <div className="user-profile mb-4">
                                        <div className="ul-widget-card__user-info border-bottom-gray-200 pb-3"><img className="profile-picture avatar-xl mb-2" src={response.avatar} alt="alt" />
                                            <p className="m-0 text-24">{response.fname} {response.lname}</p>
                                            <p className="text-muted m-0"><a href="http://demos.ui-lib.com/gull/html/layout1/href">{response.email}</a></p>
                                            <div className="mt-3 ul-widget-app__skill-margin"><span className="text-15">{response.role}</span></div>
                                        </div>
                                        <div className="ul-widget-app__profile-footer mt-4">
                                            <div className="ul-widget-app__profile-footer-font"><a href="/"><i className="i-Speach-Bubble-6 text-16 font-weight-600 mr-1"></i><span className="text-16 font-weight-600">Activities</span></a></div>
                                            <div className="ul-widget-app__profile-footer-font"><a href="/"><i className="i-File-Clipboard-File--Text text-16 font-weight-600 mr-1"></i><span className="text-16 font-weight-600">Manage Profile</span></a></div>
                                        </div>
                                    </div>
                                </div>
                            {/* </div> */}
                        </div>
                        <div className="col-lg-8 col-md-8 mb-4">
                            {/* <div className="card"> */}
                                <div className="card-body">
                                    <h4>Company Information</h4>
                                        <p>
                                            {response.site_desc}
                                        </p>
                                    <hr />
                                <div className="row">
                                    <div className="col-md-4 col-6">
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Building text-16 mr-1"></i> Company</p><span>{response.company}</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Edit-Map text-16 mr-1"></i> LGA</p><span>{response.lga}</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Facebook text-16 mr-1"></i> Facebook</p><span>{response.facebook}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Life-Safer text-16 mr-1"></i> Category</p><span>{response.sector}</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Map text-16 mr-1"></i> State</p><span>{response.state}</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Twitter text-16 mr-1"></i> Twitter</p><span>{response.twitter}</span>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-6">
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Cloud text-16 mr-1"></i> Website</p><span>{response.website}</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Flag text-16 mr-1"></i> Country</p><span>{response.country}</span>
                                        </div>
                                        <div className="mb-4">
                                            <p className="text-primary mb-1"><i className="i-Instagram text-16 mr-1"></i> Instagram</p><span>{response.instagram}</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            {/* </div> */}
                        </div>
                        </div>
                    </div>

                </div>
            </div>








        // <div className="main-content">
        //     <div className="breadcrumb">
        //         <h1>User Profile</h1>
        //         <ul>
        //             <li><a href="/">Dashboard</a></li>
        //             <li>Profile</li>
        //         </ul>
        //     </div>
        //     <div className="separator-breadcrumb border-top"></div>
        //     <div className="card user-profile o-hidden mb-4">
        //         <div className="header-cover" style={{backgroundImage:'url(../../assets/images/photo-wide-4.jpg)'}}></div>
        //         <div className="user-info"><img className="profile-picture avatar-lg mb-2" src="../../assets/images/faces/1.jpg" alt="" />
        //             <p className="m-0 text-24">Timothy Carlson</p>
        //             <p className="text-muted m-0">Digital Marketer</p>
        //         </div>
        //         <div className="card-body">
        //             <ul className="nav nav-tabs profile-nav mb-4" id="profileTab" role="tablist">
        //                 <li className="nav-item"><a className="nav-link active" id="about-tab" data-toggle="tab" href="user.profile.html#timeline" role="tab" aria-controls="timeline" aria-selected="false">Profile</a></li>
        //                 <li className="nav-item"><a className="nav-link" id="company-tab" data-toggle="tab" href="user.profile.html#about" role="tab" aria-controls="about" aria-selected="true">Company</a></li>
        //                 <li className="nav-item"><a className="nav-link" id="friends-tab" data-toggle="tab" href="user.profile.html#friends" role="tab" aria-controls="friends" aria-selected="false">Socials</a></li>
        //                 <li className="nav-item"><a className="nav-link" id="photos-tab" data-toggle="tab" href="user.profile.html#photos" role="tab" aria-controls="photos" aria-selected="false">Activities</a></li>
        //             </ul>
        //             <div className="tab-content" id="profileTabContent">
        //                 <div className="tab-pane fade active show" id="about" role="tabpanel" aria-labelledby="about-tab">
        //                     {/* <h4>Personal Information</h4>
        //                     <p>
        //                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, commodi quam! Provident quis voluptate asperiores ullam, quidem odio pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla eos?
        //                         Cum non ex voluptate corporis id asperiores doloribus dignissimos blanditiis iusto qui repellendus deleniti aliquam, vel quae eligendi explicabo.
        //                     </p> 
        //                     <hr /> */}
        //                     <div className="row">
        //                         <div className="col-md-4 col-6">
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="i-Male text-16 mr-1"></i> First Name</p><span>Adefarasin</span>
        //                             </div>
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="i-Mail text-16 mr-1"></i> Email</p><span>isholaaruna@hotmail.com</span>
        //                             </div>
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="i-Home1 text-16 mr-1"></i> Lives In</p><span>Dhaka, DB</span>
        //                             </div>
        //                         </div>
        //                         <div className="col-md-4 col-6">
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="i-Male text-16 mr-1"></i> Last Name</p><span>Haruna. I</span>
        //                             </div>
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="i-Old-Telephone text-16 mr-1"></i> Phone</p><span>+234 805 821 3562</span>
        //                             </div>
        //                             {/* <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="i-Cloud-Weather text-16 mr-1"></i> Website</p><span>www.ui-lib.com</span>
        //                             </div> */}
        //                         </div>
        //                         <div className="col-md-4 col-6">
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="i-Face-Style-4 text-16 mr-1"></i> Profession</p><span>Digital Marketer</span>
        //                             </div>
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="i-MaleFemale text-16 mr-1"></i> Gender</p><span>Male</span>
        //                             </div>
        //                             {/* <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="i-Home1 text-16 mr-1"></i> School</p><span>School of Digital Marketing</span>
        //                             </div> */}
        //                         </div>
        //                     </div>
        //                     <hr />
        //                     {/* <h4>Other Info</h4>
        //                     <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolore labore reiciendis ab quo ducimus reprehenderit natus debitis, provident ad iure sed aut animi dolor incidunt voluptatem. Blanditiis, nobis aut.</p>
        //                     <div class="row">
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Plane text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Travelling</p>
        //                         </div>
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Camera text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Photography</p>
        //                         </div>
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Car-3 text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Driving</p>
        //                         </div>
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Gamepad-2 text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Gaming</p>
        //                         </div>
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Music-Note-2 text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Music</p>
        //                         </div>
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Shopping-Bag text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Shopping</p>
        //                         </div>
        //                     </div> */}
        //                 </div>
        //                 <div className="tab-pane fade" id="company" role="tabpanel" aria-labelledby="about-tab">
        //                     <h4>About Company</h4>
        //                     <p>
        //                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, commodi quam! Provident quis voluptate asperiores ullam, quidem odio pariatur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, nulla eos?
        //                         Cum non ex voluptate corporis id asperiores doloribus dignissimos blanditiis iusto qui repellendus deleniti aliquam, vel quae eligendi explicabo.
        //                     </p> 
        //                     <hr />
        //                     <div className="row">
        //                         <div className="col-md-4 col-6">
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="text-16 mr-1"></i>Company / Business Name</p><span>Revolutions Media</span>
        //                             </div>
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="text-16 mr-1"></i> LGA</p><span>Ibeju-Lekki</span>
        //                             </div>
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="text-16 mr-1"></i> Lives In</p><span>Dhaka, DB</span>
        //                             </div>
        //                         </div>
        //                         <div className="col-md-4 col-6">
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="text-16 mr-1"></i> Platform</p><span>Content Management</span>
        //                             </div>
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="text-16 mr-1"></i> State</p><span>Lagos State</span>
        //                             </div>
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="text-16 mr-1"></i> Website</p><span>www.ui-lib.com</span>
        //                             </div>
        //                         </div>
        //                         <div className="col-md-4 col-6">
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="i-Arrow-Around text-16 mr-1"></i> Sector</p><span>Fashion / Entertainment</span>
        //                             </div>
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="text-16 mr-1"></i> National</p><span>Nigeria</span>
        //                             </div>
        //                             <div className="mb-4">
        //                                 <p className="text-primary mb-1"><i className="text-16 mr-1"></i> Site Title</p><span>School of Digital Marketing</span>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <hr />
        //                     {/* <h4>Other Info</h4>
        //                     <p class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolore labore reiciendis ab quo ducimus reprehenderit natus debitis, provident ad iure sed aut animi dolor incidunt voluptatem. Blanditiis, nobis aut.</p>
        //                     <div class="row">
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Plane text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Travelling</p>
        //                         </div>
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Camera text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Photography</p>
        //                         </div>
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Car-3 text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Driving</p>
        //                         </div>
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Gamepad-2 text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Gaming</p>
        //                         </div>
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Music-Note-2 text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Music</p>
        //                         </div>
        //                         <div class="col-md-2 col-sm-4 col-6 text-center"><i class="i-Shopping-Bag text-32 text-primary"></i>
        //                             <p class="text-16 mt-1">Shopping</p>
        //                         </div>
        //                     </div> */}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default UserProfileLayout
