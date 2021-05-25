import React from "react";
import errorimage from "../Assets/errorimage.svg";

function handleClick(){
    window.location.href="/";
}

const ErrorPage= () => {
    return(
        <div>
          <div className="svg-error">
            <img src={errorimage} style={{ height: 300, width: 400 }} alt="404 error" />
          </div>
          <button className="err-btn" onClick={handleClick}>Back to Home!</button>
        </div>
    )
}

export default ErrorPage;