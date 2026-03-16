import { initializeApp, getApps } from 'firebase/app';

// Lazy-loaded Firebase services
export const getAuthService = async () => {
  // Only initialize on client side
  if (typeof window === 'undefined') return null;

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  };

  // Check if all required config values are present
  const isConfigValid = Object.values(firebaseConfig).every(value => value && typeof value === 'string');

  if (!isConfigValid) {
    console.warn('Firebase config is invalid:', {
      isClient: typeof window !== 'undefined',
      configKeys: Object.keys(firebaseConfig).map(key => ({
        key,
        hasValue: !!firebaseConfig[key as keyof typeof firebaseConfig],
        type: typeof firebaseConfig[key as keyof typeof firebaseConfig]
      }))
    });
    return null;
  }

  let app;
  if (!getApps().length) {
    try {
      app = initializeApp(firebaseConfig);
    } catch (error) {
      console.error('Failed to initialize Firebase:', error);
      return null;
    }
  } else {
    app = getApps()[0];
  }

  const { getAuth } = await import('firebase/auth');
  return getAuth(app);
};

export const getDbService = async () => {
  if (typeof window === 'undefined') return null;

  let app;
  if (!getApps().length) {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    const isConfigValid = Object.values(firebaseConfig).every(value => value && typeof value === 'string');
    if (!isConfigValid) return null;

    try {
      app = initializeApp(firebaseConfig);
    } catch (error) {
      console.error('Failed to initialize Firebase:', error);
      return null;
    }
  } else {
    app = getApps()[0];
  }

  const { getFirestore } = await import('firebase/firestore');
  return getFirestore(app);
};

export const getStorageService = async () => {
  if (typeof window === 'undefined') return null;

  let app;
  if (!getApps().length) {
    const firebaseConfig = {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    };

    const isConfigValid = Object.values(firebaseConfig).every(value => value && typeof value === 'string');
    if (!isConfigValid) return null;

    try {
      app = initializeApp(firebaseConfig);
    } catch (error) {
      console.error('Failed to initialize Firebase:', error);
      return null;
    }
  } else {
    app = getApps()[0];
  }

  const { getStorage } = await import('firebase/storage');
  return getStorage(app);
};

export default null;
