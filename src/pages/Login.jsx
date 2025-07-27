
import React from 'react';

import { createClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const supabase = createClient('https://pyeefbssdgedhifudsar.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5ZWVmYnNzZGdlZGhpZnVkc2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMzgzMTMsImV4cCI6MjA2NTkxNDMxM30.-1CNoKdasGpTud1feKiYknrCvhxJTJ7aKuQXn7L5BAs');

const Login = () => {

  return (
    <>
      <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} theme=""/>
    </>
  );
};

export default Login;
