
import React from 'react';

import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
//import { ThemeSupa } from '@supabase/auth-ui-shared';

import './Login.css';
import logo from '../../public/history-icon.jpg';

const supabase = createClient(
  'https://pyeefbssdgedhifudsar.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
);

const customTheme = {
  default: {
    colors: {
      brand: '#1877F2',
      brandAccent: '#166FE5',
      brandButtonText: 'white',
      defaultButtonBackground: '#f5f6f7',
      defaultButtonBackgroundHover: '#e4e6eb',
      defaultButtonBorder: 'none',
      inputBorder: '#ccd0d5',
      inputLabelText: '#1c1e21',
      inputText: '#050505',
      messageText: '#ff0000',
    },
  },
};

const Login = () => {
  return (
    <div className="login-container min-h-screen bg-[#f0f2f5] flex items-center justify-center px-4">
      <div className="w-full max-w-lg">
        <div className="text-center mb-6">
          <div className='login-logo d-flex'>
            <img src={logo} alt="" />
            <h1 className="text-[#1877F2] text-5xl font-bold">History.com</h1>
          </div>
          <p className="text-lg text-gray-700 mt-2">
            Conecte-se ao History.com para continuar.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 flex justify-center">
          <div className="w-full max-w-[500px]">
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: customTheme }}
              providers={['google', 'facebook']}
              theme="default"
              localization={{
                variables: {
                  sign_in: {
                    email_label: 'Email ou telefone',
                    password_label: 'Senha',
                    button_label: 'Entrar',
                    loading_button_label: 'Entrando...',
                    link_text: 'Criar nova conta',
                  },
                  forgotten_password: {
                    link_text: 'Esqueceu a senha?',
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
