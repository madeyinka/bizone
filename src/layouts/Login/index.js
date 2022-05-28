import React from 'react'
import { Link } from 'react-router-dom'
 
function LoginLayout({form:{errMsg, email, setEmail, password, setPassword, userRef, errRef, handleSubmit}}) {
    return (
        <div className="auth-layout-wrap" style={{backgroundImage: 'url(../../assets/images/photo-wide-4.jpg)'}}>
            <div className="auth-content">
                <div className="card o-hidden">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="p-4">
                                <div className="auth-logo text-center mb-4"><img src="../../assets/images/logo.png" alt=""/></div>
                                <div ref={errRef} className={ errMsg ? "alert alert-danger" : "offscreen"} role="alert">{errMsg}</div>
                                <h1 className="mb-3 text-18">Sign In</h1>
                                <form className="needs-validation" noValidate="novalidate" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="useremail">Email address</label>
                                        <input 
                                            className="form-control form-control-rounded" 
                                            type="email"
                                            id="useremail"
                                            ref={userRef}
                                            autoComplete='off'
                                            value={email}
                                            placeholder="Email address"
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input 
                                            className="form-control form-control-rounded" 
                                            type="password"
                                            name="password"
                                            value={password}
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            />
                                    </div>
                                    <button className="btn btn-rounded btn-primary btn-block mt-2" type="submit">Sign In</button>
                                </form>
                                <div className="mt-3 text-center"><Link to="/auth/reset-password" className="text-muted">
                                        <u>Forgot Password?</u></Link></div>
                            </div>
                        </div>
                        <div className="col-md-6 text-center" style={{backgroundSize: "cover",backgroundImage: 'url(../../assets/images/photo-long-3.jpg)'}}>
                            {/* <div className="pr-3 auth-right"><a className="btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text" href="signup.html"><i className="i-Mail-with-At-Sign"></i> Sign up with Email</a><a href="google.com" className="btn btn-rounded btn-outline-google btn-block btn-icon-text"><i className="i-Google-Plus"></i> Sign up with Google</a><a href="facebook.com" className="btn btn-rounded btn-block btn-icon-text btn-outline-facebook"><i className="i-Facebook-2"></i> Sign up with Facebook</a></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginLayout
