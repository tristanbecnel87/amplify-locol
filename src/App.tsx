import React, {Fragment} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
// import logo from './logo.svg';
import { Navbar } from "./Navbar";
//import  Homepage  from "./homepage/homepage";
//import { Marketplace } from "./marketplace/marketplace";
//import { Board } from "./board/board";
//import { Community } from "./community/community";
import { Login } from "./frontend/login/login";
//import { Signup_what_are_you } from "./signup/what_are_you/signup_what_are_you";
//import { BusinesssignupRootRootRootRoot } from "./signup/services_interest/business_services";
//import { BusinesssignupRootRootRoot1 } from "./signup/create/business_create";
//import { BusinesssignupRootRoot1 } from "./signup/business_info/business_information";
//import { Signup_type_of_account } from "./signup/what_type_of_account/signup_type_of_account";
//import  Signup_education  from "./signup/education/signup_education";
//import  Signup_about_you  from "./signup/about_you/signup_about_you";
//import { Signup_create } from "./signup/create/signup_create";
//import { Calendar } from "./calendar/calendar";
//import { Services } from "./services/services";
//import { Student_profile } from "./student_profile/student_profile";
//import { Business_profile } from "./business_profile/business_profile";
import styled from "styled-components";


const RoutesContainer = (props: {}) => {
    // tuple of text displayed on the button and the link it leads to
    const links: [string, string][] = [
        // const links = [

    // [<Text13>Home</Text13>, "\home"],
    // [<Text14>Marketplace</Text14>, "market"],
    // [<Text15>Board</Text15>, "\bord"],
    // [<Text16>Community</Text16>, "community"]
    ["Home", "/home"],
    ["Marketplace", "/market"],
    ["Board", "/board"],
    ["Community", "/community"],
    ["Login", "/login"], //change and make a generic login page that asks if student/business
    ["Signup", "/signup_person"],
    // ["Account", "/signup_account"],
    // ["Education", "/signup_education"],
    // ["About", "/signup_about_you"],
    // ["Create", "/signup_create"],
    // ["Calendar", "/calendar"],
    // ["Services", "/services"],
    // ["StudentProfile", "/student_profile"],
    // ["BusinessProfile", "/business_profile"]
  ];

    const path = useLocation().pathname;
    const onLoginPage = ["/"].includes(path);

    return (
        <Fragment>
            <div className="content">
                <Navbar options={links} currPath={path} simple={onLoginPage}/>

        {/* <div>current path: {path}</div> */}
        <Routes>
          <Route path={"/login"} element={<Login/>} />
        </Routes>
      </div>
    </Fragment>
  );
};

function App() {
    return (
        <BrowserRouter>
            <RoutesContainer/>
        </BrowserRouter>
    );

}


export default App;