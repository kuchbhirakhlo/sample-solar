import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, orderBy, where, Timestamp, onSnapshot } from 'firebase/firestore';
import { getDbService } from './firebase';

// Reviews
export interface Review {
  id?: string;
  name: string;
  rating: number;
  date: string;
  text: string;
  createdAt: Date;
}

export const addReview = async (review: Omit<Review, 'id' | 'createdAt'>) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  const docRef = await addDoc(collection(db, 'reviews'), {
    ...review,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getReviews = async (): Promise<Review[]> => {
  const db = await getDbService();
  if (!db) return [];

  const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate() || new Date(),
  })) as Review[];
};

// Subscribe to real-time reviews updates
export const subscribeToReviews = (callback: (reviews: Review[]) => void, limit: number = 10) => {
  let unsubscribe: (() => void) | null = null;
  
  const setupSubscription = async () => {
    const db = await getDbService();
    if (!db) {
      callback([]);
      return;
    }

    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));
    unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reviews = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate() || new Date(),
      })) as Review[];
      callback(reviews.slice(0, limit));
    });
  };

  setupSubscription();

  return () => {
    if (unsubscribe) {
      unsubscribe();
    }
  };
};

// Contact Submissions
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
  status: 'new' | 'contacted' | 'closed';
  createdAt: Date;
}

export const addContactSubmission = async (submission: Omit<ContactSubmission, 'id' | 'createdAt'>) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  const docRef = await addDoc(collection(db, 'contactSubmissions'), {
    ...submission,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getContactSubmissions = async (): Promise<ContactSubmission[]> => {
  const db = await getDbService();
  if (!db) return [];

  const q = query(collection(db, 'contactSubmissions'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    date: doc.data().createdAt?.toDate()?.toISOString().split('T')[0] || new Date().toISOString().split('T')[0],
    createdAt: doc.data().createdAt?.toDate() || new Date(),
  })) as ContactSubmission[];
};

export const updateContactStatus = async (id: string, status: ContactSubmission['status']) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  await updateDoc(doc(db, 'contactSubmissions', id), { status });
};

export const deleteContactSubmission = async (id: string) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  await deleteDoc(doc(db, 'contactSubmissions', id));
};

// Jobs
export interface Job {
  id?: string;
  title: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  isActive: boolean;
  createdAt: Date;
}

export const addJob = async (job: Omit<Job, 'id' | 'createdAt'>) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  const docRef = await addDoc(collection(db, 'jobs'), {
    ...job,
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getJobs = async (): Promise<Job[]> => {
  const db = await getDbService();
  if (!db) return [];

  const q = query(collection(db, 'jobs'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate() || new Date(),
  })) as Job[];
};

export const updateJob = async (id: string, updates: Partial<Job>) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  await updateDoc(doc(db, 'jobs', id), updates);
};

export const deleteJob = async (id: string) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  await deleteDoc(doc(db, 'jobs', id));
};

// Employees
export interface Employee {
  id?: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'manager' | 'employee';
  isActive: boolean;
  createdAt: Date;
  lastLogin: Date;
}

export const addEmployee = async (employee: Omit<Employee, 'id' | 'createdAt' | 'lastLogin'>) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  const docRef = await addDoc(collection(db, 'employees'), {
    ...employee,
    createdAt: Timestamp.now(),
    lastLogin: Timestamp.now(),
  });
  return docRef.id;
};

export const getEmployees = async (): Promise<Employee[]> => {
  const db = await getDbService();
  if (!db) return [];

  const q = query(collection(db, 'employees'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate() || new Date(),
    lastLogin: doc.data().lastLogin?.toDate() || new Date(),
  })) as Employee[];
};

export const updateEmployee = async (id: string, updates: Partial<Employee>) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  await updateDoc(doc(db, 'employees', id), updates);
};

export const deleteEmployee = async (id: string) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  await deleteDoc(doc(db, 'employees', id));
};

// Job Applications
export interface JobApplication {
  id?: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  resumeUrl?: string;
  status: 'new' | 'reviewed' | 'shortlisted' | 'rejected';
  appliedAt: Date;
}

export const addJobApplication = async (application: Omit<JobApplication, 'id' | 'appliedAt' | 'status'>) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  const docRef = await addDoc(collection(db, 'jobApplications'), {
    ...application,
    status: 'new',
    appliedAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getJobApplications = async (): Promise<JobApplication[]> => {
  const db = await getDbService();
  if (!db) return [];

  const q = query(collection(db, 'jobApplications'), orderBy('appliedAt', 'desc'));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    appliedAt: doc.data().appliedAt?.toDate() || new Date(),
  })) as JobApplication[];
};

// Service Bookings
export interface ServiceBooking {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  description: string;
  status: 'new' | 'confirmed' | 'completed' | 'cancelled';
  createdAt: Date;
}

export const addServiceBooking = async (booking: Omit<ServiceBooking, 'id' | 'createdAt' | 'status'>) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  const docRef = await addDoc(collection(db, 'serviceBookings'), {
    ...booking,
    status: 'new',
    createdAt: Timestamp.now(),
  });
  return docRef.id;
};

export const getServiceBookings = async (): Promise<ServiceBooking[]> => {
  const db = await getDbService();
  if (!db) return [];

  const q = query(collection(db, 'serviceBookings'), orderBy('createdAt', 'desc'));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
    createdAt: doc.data().createdAt?.toDate() || new Date(),
  })) as ServiceBooking[];
};

export const updateServiceBookingStatus = async (id: string, status: ServiceBooking['status']) => {
  const db = await getDbService();
  if (!db) throw new Error('Database not available');

  await updateDoc(doc(db, 'serviceBookings', id), { status });
};