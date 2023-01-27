import React from 'react'
import Signup from "./Signup";
import Dashboard from "./dashboard";

export default function Home() {
  const [user, setUser] = React.useState(null)
  return (
    <>
      {user ? <Dashboard /> : <Signup setUser={setUser} />}
    </>
  )
}