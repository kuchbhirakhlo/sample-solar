'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { getAuthService, getDbService } from '@/lib/firebase';

interface AuthContextType {
  user: User | null;
  isAdmin: boolean;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>({
  user: null,
  isAdmin: false,
  loading: true,
  login: async () => {},
  logout: async () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Only initialize auth on client side
    if (typeof window === 'undefined') {
      setLoading(false);
      return;
    }

    let unsubscribe: (() => void) | undefined;

    const initAuth = async () => {
      const auth = await getAuthService();
      if (!auth) {
        setLoading(false);
        return;
      }

      unsubscribe = onAuthStateChanged(auth, async (user) => {
        setUser(user);
        if (user) {
          const db = await getDbService();
          if (db) {
            try {
              // Check if user is admin by checking Firestore
              const userDoc = await getDoc(doc(db, 'users', user.uid));
              const userData = userDoc.data();
              const isUserAdmin = userData?.role === 'admin';
              // Temporary: allow demo admin email
              const isDemoAdmin = user.email === 'admin@orinteksolar.com';
              setIsAdmin(isUserAdmin || isDemoAdmin);
            } catch (error) {
              console.error('Error checking admin status:', error);
              setIsAdmin(false);
            }
          }
        } else {
          setIsAdmin(false);
        }
        setLoading(false);
      });
    };

    initAuth();

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  const login = async (email: string, password: string) => {
    const auth = await getAuthService();
    if (!auth) throw new Error('Auth not initialized');
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    const auth = await getAuthService();
    if (!auth) return;
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}