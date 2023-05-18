// components/Login.js
import { useEffect } from "react";

import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { useNavigate, useLocation } from 'react-router';

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

export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);

  return (
    <View className="auth-wrapper">
      <Authenticator> </Authenticator>
    </View>
  );
}