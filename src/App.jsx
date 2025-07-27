
import './index.css';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';

const supabase = createClient('https://pyeefbssdgedhifudsar.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5ZWVmYnNzZGdlZGhpZnVkc2FyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMzgzMTMsImV4cCI6MjA2NTkxNDMxM30.-1CNoKdasGpTud1feKiYknrCvhxJTJ7aKuQXn7L5BAs');

export default function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
    }, [])

    if (!session) {
      return (
        <Login />
      )
    }
    else {
      return (
      <>
        <Header />
        <Home />
        <Footer />
      </>
      )
    }
}
