import { Outlet } from 'react-router';
import { lazy, Suspense } from 'react';

import { AuthSplitLayout } from 'src/layouts/auth-split';
import { AuthCenteredLayout } from 'src/layouts/auth-centered';

import { SplashScreen } from 'src/components/loading-screen';

import { GuestGuard } from 'src/auth/guard';

// ----------------------------------------------------------------------

/** **************************************
 * Jwt
 *************************************** */
const Jwt = {
  SignInPage: lazy(() => import('src/pages/auth/jwt/sign-in')),
  SignUpPage: lazy(() => import('src/pages/auth/jwt/sign-up')),
};

const authJwt = {
  path: 'jwt',
  children: [
    {
      path: 'sign-in',
      element: (
        <GuestGuard>
          <AuthSplitLayout
            slotProps={{
              section: { title: 'Hi, Welcome back' },
            }}
          >
            <Jwt.SignInPage />
          </AuthSplitLayout>
        </GuestGuard>
      ),
    },
    {
      path: 'sign-up',
      element: (
        <GuestGuard>
          <AuthSplitLayout>
            <Jwt.SignUpPage />
          </AuthSplitLayout>
        </GuestGuard>
      ),
    },
  ],
};

/** **************************************
 * Supabase
 *************************************** */
const Supabase = {
  SignInPage: lazy(() => import('src/pages/auth/supabase/sign-in')),
  SignUpPage: lazy(() => import('src/pages/auth/supabase/sign-up')),
  VerifyPage: lazy(() => import('src/pages/auth/supabase/verify')),
  UpdatePasswordPage: lazy(() => import('src/pages/auth/supabase/update-password')),
  ResetPasswordPage: lazy(() => import('src/pages/auth/supabase/reset-password')),
};

const authSupabase = {
  path: 'supabase',
  children: [
    {
      path: 'sign-in',
      element: (
        <GuestGuard>
          <AuthCenteredLayout
            slotProps={{
              section: { title: 'Hi, Welcome back' },
            }}
          >
            <Supabase.SignInPage />
          </AuthCenteredLayout>
        </GuestGuard>
      ),
    },
    {
      path: 'sign-up',
      element: (
        <GuestGuard>
          <AuthCenteredLayout>
            <Supabase.SignUpPage />
          </AuthCenteredLayout>
        </GuestGuard>
      ),
    },
    {
      path: 'verify',
      element: (
        <AuthCenteredLayout>
          <Supabase.VerifyPage />
        </AuthCenteredLayout>
      ),
    },
    {
      path: 'reset-password',
      element: (
        <AuthCenteredLayout>
          <Supabase.ResetPasswordPage />
        </AuthCenteredLayout>
      ),
    },
    {
      path: 'update-password',
      element: (
        <AuthCenteredLayout>
          <Supabase.UpdatePasswordPage />
        </AuthCenteredLayout>
      ),
    },
  ],
};

// ----------------------------------------------------------------------

export const authRoutes = [
  {
    path: 'auth',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [authJwt, authSupabase],
  },
];
