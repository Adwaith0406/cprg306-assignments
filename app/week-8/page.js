"use client";

import React from 'react';
import Link from 'next/link';
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName} ({user.email})</p>
          <button onClick={firebaseSignOut}>Logout</button>
          <br/>
          <Link href="/week-8/shopping-list">Go to Shopping List
          </Link>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Login with GitHub</button>
      )}
    </div>
  );
};

export default Page;
