import React from 'react'
import {Link} from 'react-router-dom'

function ResetPasswordLayout({form:{handleChange, formValues, loading, formError, message, validateForm, handleSubmit}}) {
    return (
        <div className="auth-layout-wrap" style={{backgroundImage: 'url(../../assets/images/photo-wide-4.jpg)'}}>
            <div className="auth-content">
                <div className="card o-hidden">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="p-4">
                                <div className="auth-logo text-center mb-4"><img src="../../assets/images/logo.png" alt=""/></div>
                                {/* <pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}
                                {formError && <div className="alert alert-danger" role="alert">{message}</div>}
                                {/* { <div className="alert alert-success" role="alert">{message}</div>} */}
                                <h1 className="mb-3 text-18">Forgot Password</h1>
                                <form className="needs-validation" noValidate="novalidate" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        {/* <label>Email address</label> */}
                                        <input 
                                            className="form-control form-control-rounded" 
                                            type="email"
                                            name="email"
                                            value={formValues.email}
                                            placeholder="Email address"
                                            onChange={handleChange}
                                            error={"email is required"}
                                        />
                                    </div>
                                    {/* load this button if loading is false...okay */}
                                    <button disabled={validateForm} className="btn btn-rounded btn-primary btn-block mt-2" type="submit">Reset Password</button>
                                </form>
                                <div className="mt-3 text-center"><Link to="/auth/login" className="text-muted">
                                        <u>Sign In</u></Link></div>
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

export default ResetPasswordLayout
