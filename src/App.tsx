import React, {Fragment} from "react";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import { Navbar } from "./Navbar";
import  Homepage  from "./frontend/homepage/homepage";
import { Marketplace } from "./frontend/marketplace/marketplace";
import { Board } from "./frontend/board/board";
import { Community } from "./frontend/community/community";
import { Login } from "./frontend/login/login";
import { BusinesssignupRootRootRootRoot } from "./frontend/signup/services_interest/business_services";
import { BusinesssignupRootRootRoot1 } from "./frontend/signup/create/business_create";
import { BusinesssignupRootRoot1 } from "./frontend/signup/business_info/business_information";
import { Signup_what_are_you } from "./frontend/signup/what_are_you/signup_what_are_you";
import { Signup_type_of_account } from "./frontend/signup/what_type_of_account/signup_type_of_account";
import  Signup_education  from "./frontend/signup/education/signup_education";
import  Signup_about_you  from "./frontend/signup/about_you/signup_about_you";
import { Signup_create } from "./frontend/signup/create/signup_create";
import { Student_profile } from "./frontend/student_profile/student_profile";
import { Calendar } from "./frontend/calendar/calendar";
import { Services } from "./frontend/services/services";
//import squadLoco from "./frontend/assets/images/squadLoco.png";
import { Business_profile } from "./frontend/business_profile/business_profile";
import styled from "styled-components";
import "@aws-amplify/ui-react/styles.css";
import { Protected } from './Protected';
import { RequireAuth } from './RequireAuth';
import { ProtectedSecond } from './ProtectSecond';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);
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
     ["StudentProfile", "/student_profile"],
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
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/home"} element={<Homepage />} />
          <Route path={"/login"} element={<Login/>} />
          <Route path={"/market"} element={<Marketplace />} />
          <Route path={"/community"} element={<Community />} />
          <Route path={"/calendar"} element={<Calendar/>} />
          <Route path={"/services"} element={<Services/>} />
          <Route path={"/board"} element={<Board />} />
          <Route path={"/signup_person"} element={<Signup_what_are_you/>} />
          <Route path={"/signup_account"} element={<Signup_type_of_account/>} />
          <Route path={"/signup_education"} element={<Signup_education/>} />
          <Route path={"/signup_about_you"} element={<Signup_about_you/>} />
          <Route path={"/signup_create"} element={<Signup_create/>} />
          <Route path={"/student_profile"} element={<Student_profile/>} />
          <Route path={"/business_profile"} element={<Business_profile/>} />
          <Route path={"/business_information"} element={<BusinesssignupRootRoot1/>} />
          <Route path={"/business_services"} element={<BusinesssignupRootRootRootRoot/>} />
          <Route path={"/business_create"} element={<BusinesssignupRootRootRoot1/>} />
          <Route path={"/protected"} element={<Protected/>} />
          <Route path={"/protectedsec"} element={<ProtectedSecond/>} />


        </Routes>
      </div>
    </Fragment>
  );
};
//function App() {
//    return (
//        <BrowserRouter>
//            <RoutesContainer/>
//        </BrowserRouter>
//    );
//
//}

//export default App;
 //<Image src={squadLoco} className="App-logo" alt="Squad Loco" />
// function App({ signOut }: { signOut: () => void }) {
//   return (
//
//     <View className="App">
//       <Card>
//         <BrowserRouter>
//             <RoutesContainer/>
//         </BrowserRouter>
//       </Card>
//       <Button onClick={signOut}>Sign Out</Button>
//     </View>
//   );
//}

 const formFields = {
    signUp: {
      email: {
        order:1
      },
      password: {
        order: 2
      },
      confirm_password: {
        order: 3
      },
      'custom: Business': {
          key:'Business',
          type:'string',
          required:true,
          label:'Business',
          placeholder: 'Enter your Business Name',
          order: 4
      },
        'custom: university': {
          key:'university',
          type:'string',
          required:true,
          label:'What university do you attend? ',
          placeholder: 'Type Here',
          order: 5
      },
         'custom: study': {
          key:'study',
          type:'string',
          required:true,
          label:'What do you study? ',
          placeholder: 'Type Here',
          order: 6
      },
         'custom: classification': {
          key:'classification',
          type:'integer',
          required:true,
          label:'What is your classification? ',
          placeholder: 'Type Here',
          order: 7
      },
          'custom: graduate': {
          key:'graduate',
          type:'integer',
          required:true,
          label:'When do you graduate? ',
          placeholder: 'Type Here',
          order: 8
      },
          'custom: skills': {
          key:'skills',
          type:'string',
          required:true,
          label:'List your skills',
          placeholder: 'Proficient in C++, Graphic Design, Web Analytics, Etc.',
          order: 9
      },



    },
  }
  const signUpConfig = {
  header: 'My Customized Sign Up',
  hideAllDefaults: true,
  defaultCountryCode: '1',
  signUpFields: [
    {
      label: 'My user name',
      key: 'username',
      required: true,
      displayOrder: 1,
      type: 'string'
    },
    {
      label: 'Password',
      key: 'password',
      required: true,
      displayOrder: 2,
      type: 'password'
    },
    {
      label: 'PhoneNumber',
      key: 'phone_number',
      required: true,
      displayOrder: 3,
      type: 'string'
    },
    {
      label: 'Email',
      key: 'email',
      required: true,
      displayOrder: 4,
      type: 'string'
    }
  ]
};

//formFields={formFields}
function MyRoutes() {
  return (
    <BrowserRouter>
        <RoutesContainer></RoutesContainer>
    </BrowserRouter>
  );
}
      // <Routes>
      //   <Route path="/" element={<Homepage />}>
      //     <Route path={"/home"} element={<Homepage />} />
      //     <Route path={"/login"} element={<Login/>} />
      //     <Route path={"/market"} element={<Marketplace />} />
      //     <Route
      //       path="/protected"
      //       element={
      //         <RequireAuth>
      //           <Protected />
      //         </RequireAuth>
      //       }
      //     />
      //     <Route
      //       path="/protected2"
      //       element={
      //         <RequireAuth>
      //           <ProtectedSecond />
      //         </RequireAuth>
      //       }
      //     />
      //     <Route path="/login" element={<Login />} />
      //   </Route>
      // </Routes>
function App() {
  return (
    <Authenticator formFields={formFields} >
      <MyRoutes />
    </Authenticator>
  );
}

export default App;