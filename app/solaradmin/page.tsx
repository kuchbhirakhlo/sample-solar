'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { useAuth } from '@/lib/auth-context';
import {
  Shield,
  Users,
  Briefcase,
  MessageSquare,
  LogOut,
  Plus,
  Trash2,
  Edit,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle,
  Search,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Lock,
  Unlock,
  UserPlus,
  UserX,
  FileText
} from 'lucide-react';
import {
  getContactSubmissions,
  updateContactStatus,
  deleteContactSubmission,
  getJobs,
  addJob,
  updateJob,
  deleteJob,
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
  getJobApplications,
  ContactSubmission,
  Job,
  Employee,
  JobApplication
} from '@/lib/firebase-db';

export default function SolarAdminPage() {
    const { user, isAdmin, loading, login, logout } = useAuth();
    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [loginError, setLoginError] = useState('');

    // Data states
    const [contacts, setContacts] = useState<ContactSubmission[]>([]);
    const [jobs, setJobs] = useState<Job[]>([]);
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [jobApplications, setJobApplications] = useState<JobApplication[]>([]);
    const [dataLoading, setDataLoading] = useState(false);

    // Load data when admin logs in
    useEffect(() => {
        if (user && isAdmin) {
            loadData();
        }
    }, [user, isAdmin]);

    const loadData = async () => {
        setDataLoading(true);
        try {
            const [contactsData, jobsData, employeesData, applicationsData] = await Promise.all([
                getContactSubmissions(),
                getJobs(),
                getEmployees(),
                getJobApplications()
            ]);
            setContacts(contactsData);
            setJobs(jobsData);
            setEmployees(employeesData);
            setJobApplications(applicationsData);
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            setDataLoading(false);
        }
    };

    // Check if current user has admin privileges
    const currentUserRole = employees.find(e => e.email === user?.email)?.role || 'employee';
    const isCurrentUserAdmin = currentUserRole === 'admin';

    // Dialog states
    const [contactDialogOpen, setContactDialogOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
    const [jobDialogOpen, setJobDialogOpen] = useState(false);
    const [employeeDialogOpen, setEmployeeDialogOpen] = useState(false);

    // Form states
    const [newJob, setNewJob] = useState<Partial<Job>>({
        title: '',
        location: '',
        type: 'Full-time',
        description: '',
        requirements: [],
        isActive: true
    });
    const [newEmployee, setNewEmployee] = useState<Partial<Employee>>({
        name: '',
        email: '',
        phone: '',
        role: 'employee',
        isActive: true
    });
    const [requirementInput, setRequirementInput] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await login(loginForm.email, loginForm.password);
            setLoginError('');
        } catch (error: any) {
            setLoginError(error.message || 'Login failed');
        }
    };

    const handleLogout = async () => {
        await logout();
        setLoginForm({ email: '', password: '' });
    };

    const handleViewContact = (contact: ContactSubmission) => {
        setSelectedContact(contact);
        setContactDialogOpen(true);
    };

    const handleUpdateContactStatus = async (id: string, status: ContactSubmission['status']) => {
        try {
            await updateContactStatus(id, status);
            setContacts(contacts.map(c => c.id === id ? { ...c, status } : c));
        } catch (error) {
            console.error('Error updating contact status:', error);
            alert('Failed to update contact status');
        }
    };

    const handleDeleteContact = async (id: string) => {
        if (!confirm('Are you sure you want to delete this contact?')) return;
        try {
            await deleteContactSubmission(id);
            setContacts(contacts.filter(c => c.id !== id));
        } catch (error) {
            console.error('Error deleting contact:', error);
            alert('Failed to delete contact');
        }
    };

    const handleToggleJobActive = async (id: string) => {
        const job = jobs.find(j => j.id === id);
        if (!job) return;

        try {
            await updateJob(id, { isActive: !job.isActive });
            setJobs(jobs.map(j => j.id === id ? { ...j, isActive: !j.isActive } : j));
        } catch (error) {
            console.error('Error updating job:', error);
            alert('Failed to update job status');
        }
    };

    const handleDeleteJob = async (id: string) => {
        if (!confirm('Are you sure you want to delete this job?')) return;
        try {
            await deleteJob(id);
            setJobs(jobs.filter(j => j.id !== id));
        } catch (error) {
            console.error('Error deleting job:', error);
            alert('Failed to delete job');
        }
    };

    const handleAddJob = async () => {
        if (!newJob.title || !newJob.description) {
            alert('Please fill in title and description');
            return;
        }

        try {
            const jobId = await addJob({
                title: newJob.title,
                location: newJob.location || 'Lucknow, Uttar Pradesh',
                type: newJob.type || 'Full-time',
                description: newJob.description,
                requirements: newJob.requirements || [],
                isActive: true,
            });

            const job: Job = {
                id: jobId,
                title: newJob.title,
                location: newJob.location || 'Lucknow, Uttar Pradesh',
                type: newJob.type || 'Full-time',
                description: newJob.description,
                requirements: newJob.requirements || [],
                isActive: true,
                createdAt: new Date()
            };
            setJobs([...jobs, job]);
            setNewJob({
                title: '',
                location: '',
                type: 'Full-time',
                description: '',
                requirements: [],
                isActive: true
            });
            setJobDialogOpen(false);
        } catch (error) {
            console.error('Error adding job:', error);
            alert('Failed to add job');
        }
    };

    const handleAddRequirement = () => {
        if (requirementInput.trim()) {
            setNewJob({
                ...newJob,
                requirements: [...(newJob.requirements || []), requirementInput.trim()]
            });
            setRequirementInput('');
        }
    };

    const handleRemoveRequirement = (index: number) => {
        setNewJob({
            ...newJob,
            requirements: newJob.requirements?.filter((_, i) => i !== index)
        });
    };

    const handleToggleEmployeeActive = async (id: string) => {
        const employee = employees.find(e => e.id === id);
        if (!employee) return;

        try {
            await updateEmployee(id, { isActive: !employee.isActive });
            setEmployees(employees.map(e => e.id === id ? { ...e, isActive: !e.isActive } : e));
        } catch (error) {
            console.error('Error updating employee:', error);
            alert('Failed to update employee status');
        }
    };

    const handleDeleteEmployee = async (id: string) => {
        // Check if current user is admin - only admins can delete employees
        const currentUser = employees.find(e => e.email === user?.email);
        if (currentUser?.role !== 'admin') {
            alert('Only administrators can delete employees');
            return;
        }

        if (!confirm('Are you sure you want to delete this employee?')) return;
        try {
            await deleteEmployee(id);
            setEmployees(employees.filter(e => e.id !== id));
        } catch (error) {
            console.error('Error deleting employee:', error);
            alert('Failed to delete employee');
        }
    };

    const handleAddEmployee = async () => {
        if (!newEmployee.name || !newEmployee.email) {
            alert('Please fill in name and email');
            return;
        }

        try {
            const employeeId = await addEmployee({
                name: newEmployee.name,
                email: newEmployee.email,
                phone: newEmployee.phone || '',
                role: newEmployee.role as Employee['role'] || 'employee',
                isActive: true,
            });

            const employee: Employee = {
                id: employeeId,
                name: newEmployee.name,
                email: newEmployee.email,
                phone: newEmployee.phone || '',
                role: newEmployee.role as Employee['role'] || 'employee',
                isActive: true,
                createdAt: new Date(),
                lastLogin: new Date()
            };
            setEmployees([...employees, employee]);
            setNewEmployee({
                name: '',
                email: '',
                phone: '',
                role: 'employee',
                isActive: true
            });
            setEmployeeDialogOpen(false);
        } catch (error) {
            console.error('Error adding employee:', error);
            alert('Failed to add employee');
        }
    };

    const getStatusBadge = (status: string) => {
        switch (status) {
            case 'new':
                return <Badge className="bg-blue-500">New</Badge>;
            case 'contacted':
                return <Badge className="bg-yellow-500">Contacted</Badge>;
            case 'closed':
                return <Badge className="bg-green-500">Closed</Badge>;
            default:
                return <Badge>{status}</Badge>;
        }
    };

    const getRoleBadge = (role: string) => {
        switch (role) {
            case 'admin':
                return <Badge className="bg-purple-500">Admin</Badge>;
            case 'manager':
                return <Badge className="bg-blue-500">Manager</Badge>;
            case 'employee':
                return <Badge className="bg-gray-500">Employee</Badge>;
            default:
                return <Badge>{role}</Badge>;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-white">Loading...</div>
            </div>
        );
    }

    // Login Page
    if (!user || !isAdmin) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-4">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
                </div>

                <Card className="w-full max-w-md relative z-10 shadow-2xl">
                    <CardHeader className="text-center pb-2">
                        <div className="mx-auto w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-2xl font-bold text-blue-900">Orintek Solar Admin</CardTitle>
                        <CardDescription>Login to manage your solar business</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="email"
                                    value={loginForm.email}
                                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                                    className="mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    value={loginForm.password}
                                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                                    className="mt-1"
                                />
                            </div>
                            {loginError && (
                                <p className="text-red-500 text-sm">{loginError}</p>
                            )}
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                <Shield className="w-4 h-4 mr-2" />
                                Login to Admin Panel
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Admin Dashboard
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Shield className="w-8 h-8" />
                        <div>
                            <h1 className="text-xl font-bold">Orintek Solar Admin</h1>
                            <p className="text-blue-200 text-sm">Management Dashboard</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button variant="ghost" className="text-white hover:bg-blue-700" onClick={handleLogout}>
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </Button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 py-8">
                <Tabs defaultValue="contacts" className="space-y-6">
                    <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:inline-grid">
                        <TabsTrigger value="contacts" className="gap-2">
                            <MessageSquare className="w-4 h-4" />
                            <span className="hidden sm:inline">Contact Inquiries</span>
                            <Badge variant="secondary" className="ml-1">{contacts.filter(c => c.status === 'new').length}</Badge>
                        </TabsTrigger>
                        <TabsTrigger value="jobs" className="gap-2">
                            <Briefcase className="w-4 h-4" />
                            <span className="hidden sm:inline">Jobs</span>
                        </TabsTrigger>
                        <TabsTrigger value="applications" className="gap-2">
                            <FileText className="w-4 h-4" />
                            <span className="hidden sm:inline">Applications</span>
                            <Badge variant="secondary" className="ml-1">{jobApplications.length}</Badge>
                        </TabsTrigger>
                        <TabsTrigger value="employees" className="gap-2">
                            <Users className="w-4 h-4" />
                            <span className="hidden sm:inline">Employees</span>
                        </TabsTrigger>
                        <TabsTrigger value="settings" className="gap-2">
                            <Shield className="w-4 h-4" />
                            <span className="hidden sm:inline">Settings</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* Contact Inquiries Tab */}
                    <TabsContent value="contacts">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5" />
                                    Contact Form Inquiries
                                </CardTitle>
                                <CardDescription>
                                    View and manage customer inquiries from the contact form
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {contacts.map((contact) => (
                                        <div
                                            key={contact.id}
                                            className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 gap-4"
                                        >
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-semibold">{contact.name}</h4>
                                                    {getStatusBadge(contact.status)}
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <Mail className="w-3 h-3" />
                                                        {contact.email}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Phone className="w-3 h-3" />
                                                        {contact.phone}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {contact.date}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    <strong>Subject:</strong> {contact.subject}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Dialog open={contactDialogOpen && selectedContact?.id === contact.id} onOpenChange={setContactDialogOpen}>
                                                    <DialogTrigger asChild>
                                                        <Button variant="outline" size="sm" onClick={() => handleViewContact(contact)}>
                                                            <Eye className="w-4 h-4 mr-1" />
                                                            View
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-2xl">
                                                        <DialogHeader>
                                                            <DialogTitle>Inquiry Details</DialogTitle>
                                                            <DialogDescription>
                                                                Submitted on {selectedContact?.date}
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        {selectedContact && (
                                                            <div className="space-y-4">
                                                                <div className="grid grid-cols-2 gap-4">
                                                                    <div>
                                                                        <Label className="text-gray-500">Name</Label>
                                                                        <p className="font-semibold">{selectedContact.name}</p>
                                                                    </div>
                                                                    <div>
                                                                        <Label className="text-gray-500">Email</Label>
                                                                        <p className="font-semibold">{selectedContact.email}</p>
                                                                    </div>
                                                                    <div>
                                                                        <Label className="text-gray-500">Phone</Label>
                                                                        <p className="font-semibold">{selectedContact.phone}</p>
                                                                    </div>
                                                                    <div>
                                                                        <Label className="text-gray-500">Subject</Label>
                                                                        <p className="font-semibold">{selectedContact.subject}</p>
                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <Label className="text-gray-500">Message</Label>
                                                                    <p className="mt-1 p-3 bg-gray-50 rounded-lg">{selectedContact.message}</p>
                                                                </div>
                                                                <div className="flex items-center justify-between pt-4 border-t">
                                                                    <div className="flex items-center gap-2">
                                                                        <Label>Status:</Label>
                                                                        {getStatusBadge(selectedContact.status)}
                                                                    </div>
                                                                    <div className="flex gap-2">
                                                                        <Button
                                                                            size="sm"
                                                                            variant="outline"
                                                                            onClick={() => handleUpdateContactStatus(selectedContact!.id!, 'new')}
                                                                            disabled={!isCurrentUserAdmin}
                                                                        >
                                                                            Mark New
                                                                        </Button>
                                                                        <Button
                                                                            size="sm"
                                                                            variant="outline"
                                                                            onClick={() => handleUpdateContactStatus(selectedContact!.id!, 'contacted')}
                                                                            disabled={!isCurrentUserAdmin}
                                                                        >
                                                                            Mark Contacted
                                                                        </Button>
                                                                        <Button
                                                                            size="sm"
                                                                            variant="outline"
                                                                            onClick={() => handleUpdateContactStatus(selectedContact!.id!, 'closed')}
                                                                            disabled={!isCurrentUserAdmin}
                                                                        >
                                                                            Mark Closed
                                                                        </Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </DialogContent>
                                                </Dialog>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                    onClick={() => handleDeleteContact(contact.id!)}
                                                    disabled={!isCurrentUserAdmin}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Jobs Tab */}
                    <TabsContent value="jobs">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2">
                                        <Briefcase className="w-5 h-5" />
                                        Career & Job Postings
                                    </CardTitle>
                                    <CardDescription>
                                        Manage job openings posted on the careers page
                                    </CardDescription>
                                </div>
                                <Dialog open={jobDialogOpen} onOpenChange={setJobDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button className="bg-blue-600 hover:bg-blue-700" disabled={currentUserRole === 'manager'}>
                                            <Plus className="w-4 h-4 mr-2" />
                                            Add New Job
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl">
                                        <DialogHeader>
                                            <DialogTitle>Add New Job Opening</DialogTitle>
                                            <DialogDescription>
                                                Create a new job posting for the careers page
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4">
                                            <div>
                                                <Label>Job Title *</Label>
                                                <Input
                                                    value={newJob.title}
                                                    onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                                                    placeholder="e.g., Solar Installation Engineer"
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <Label>Location</Label>
                                                    <Input
                                                        value={newJob.location}
                                                        onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                                                        placeholder="e.g., Lucknow, UP"
                                                        className="mt-1"
                                                    />
                                                </div>
                                                <div>
                                                    <Label>Job Type</Label>
                                                    <select
                                                        value={newJob.type}
                                                        onChange={(e) => setNewJob({ ...newJob, type: e.target.value })}
                                                        className="w-full mt-1 px-3 py-2 border rounded-md"
                                                    >
                                                        <option value="Full-time">Full-time</option>
                                                        <option value="Part-time">Part-time</option>
                                                        <option value="Contract">Contract</option>
                                                        <option value="Internship">Internship</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div>
                                                <Label>Description *</Label>
                                                <Textarea
                                                    value={newJob.description}
                                                    onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                                                    placeholder="Job description..."
                                                    rows={4}
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div>
                                                <Label>Requirements</Label>
                                                <div className="flex gap-2 mt-1">
                                                    <Input
                                                        value={requirementInput}
                                                        onChange={(e) => setRequirementInput(e.target.value)}
                                                        placeholder="Add a requirement"
                                                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddRequirement())}
                                                    />
                                                    <Button type="button" onClick={handleAddRequirement} variant="outline">
                                                        <Plus className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {newJob.requirements?.map((req, index) => (
                                                        <Badge key={index} variant="secondary" className="gap-1">
                                                            {req}
                                                            <button onClick={() => handleRemoveRequirement(index)} className="ml-1">
                                                                <XCircle className="w-3 h-3" />
                                                            </button>
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Switch
                                                    checked={newJob.isActive}
                                                    onCheckedChange={(checked) => setNewJob({ ...newJob, isActive: checked })}
                                                />
                                                <Label>Active (visible on website)</Label>
                                            </div>
                                            <div className="flex justify-end gap-2 pt-4">
                                                <Button variant="outline" onClick={() => setJobDialogOpen(false)}>
                                                    Cancel
                                                </Button>
                                                <Button onClick={handleAddJob} className="bg-blue-600">
                                                    Create Job
                                                </Button>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {jobs.map((job) => (
                                        <div
                                            key={job.id}
                                            className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 gap-4"
                                        >
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-semibold">{job.title}</h4>
                                                    <Badge variant={job.isActive ? 'default' : 'secondary'}>
                                                        {job.isActive ? 'Active' : 'Inactive'}
                                                    </Badge>
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <MapPin className="w-3 h-3" />
                                                        {job.location}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {job.createdAt.toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleToggleJobActive(job.id!)}
                                                    className={job.isActive ? 'text-yellow-500' : 'text-green-500'}
                                                    disabled={!isCurrentUserAdmin}
                                                >
                                                    {job.isActive ? (
                                                        <>
                                                            <EyeOff className="w-4 h-4 mr-1" />
                                                            Deactivate
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Eye className="w-4 h-4 mr-1" />
                                                            Activate
                                                        </>
                                                    )}
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                    onClick={() => handleDeleteJob(job.id!)}
                                                    disabled={!isCurrentUserAdmin}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Job Applications Tab */}
                    <TabsContent value="applications">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className="w-5 h-5" />
                                    Job Applications
                                </CardTitle>
                                <CardDescription>
                                    Review and manage job applications
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {jobApplications.length === 0 ? (
                                        <p className="text-gray-500 text-center py-8">No job applications yet</p>
                                    ) : (
                                        jobApplications.map((application) => (
                                            <div
                                                key={application.id}
                                                className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 gap-4"
                                            >
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <h4 className="font-semibold">{application.name}</h4>
                                                        <Badge variant="outline">{application.status}</Badge>
                                                    </div>
                                                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                        <span className="flex items-center gap-1">
                                                            <Mail className="w-3 h-3" />
                                                            {application.email}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Phone className="w-3 h-3" />
                                                            {application.phone}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Briefcase className="w-3 h-3" />
                                                            {application.position}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Calendar className="w-3 h-3" />
                                                            {application.appliedAt.toLocaleDateString()}
                                                        </span>
                                                    </div>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        Experience: {application.experience}
                                                    </p>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Employees Tab */}
                    <TabsContent value="employees">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between">
                                <div>
                                    <CardTitle className="flex items-center gap-2">
                                        <Users className="w-5 h-5" />
                                        Employee Management
                                    </CardTitle>
                                    <CardDescription>
                                        Manage employee access and permissions
                                    </CardDescription>
                                </div>
                                <Dialog open={employeeDialogOpen} onOpenChange={setEmployeeDialogOpen}>
                                    <DialogTrigger asChild>
                                        <Button className="bg-blue-600 hover:bg-blue-700" disabled={!isCurrentUserAdmin}>
                                            <UserPlus className="w-4 h-4 mr-2" />
                                            Add Employee
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Add New Employee</DialogTitle>
                                            <DialogDescription>
                                                Grant access to a new employee
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4">
                                            <div>
                                                <Label>Full Name *</Label>
                                                <Input
                                                    value={newEmployee.name}
                                                    onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
                                                    placeholder="Employee name"
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div>
                                                <Label>Email Address *</Label>
                                                <Input
                                                    type="email"
                                                    value={newEmployee.email}
                                                    onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
                                                    placeholder="employee@orinteksolar.com"
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div>
                                                <Label>Phone Number</Label>
                                                <Input
                                                    value={newEmployee.phone}
                                                    onChange={(e) => setNewEmployee({ ...newEmployee, phone: e.target.value })}
                                                    placeholder="+91 98765 43210"
                                                    className="mt-1"
                                                />
                                            </div>
                                            <div>
                                                <Label>Role</Label>
                                                <select
                                                    value={newEmployee.role}
                                                    onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value as Employee['role'] })}
                                                    className="w-full mt-1 px-3 py-2 border rounded-md"
                                                >
                                                    <option value="employee">Employee</option>
                                                    <option value="manager">Manager</option>
                                                    <option value="admin">Admin</option>
                                                </select>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Switch
                                                    checked={newEmployee.isActive}
                                                    onCheckedChange={(checked) => setNewEmployee({ ...newEmployee, isActive: checked })}
                                                />
                                                <Label>Active (can login)</Label>
                                            </div>
                                            <div className="flex justify-end gap-2 pt-4">
                                                <Button variant="outline" onClick={() => setEmployeeDialogOpen(false)}>
                                                    Cancel
                                                </Button>
                                                <Button onClick={handleAddEmployee} className="bg-blue-600">
                                                    Add Employee
                                                </Button>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {employees.map((employee) => (
                                        <div
                                            key={employee.id}
                                            className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 gap-4"
                                        >
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <h4 className="font-semibold">{employee.name}</h4>
                                                    {getRoleBadge(employee.role)}
                                                    {employee.isActive ? (
                                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                                    ) : (
                                                        <XCircle className="w-4 h-4 text-red-500" />
                                                    )}
                                                </div>
                                                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                    <span className="flex items-center gap-1">
                                                        <Mail className="w-3 h-3" />
                                                        {employee.email}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Phone className="w-3 h-3" />
                                                        {employee.phone || 'Not provided'}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        Last login: {employee.lastLogin.toLocaleDateString()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={() => handleToggleEmployeeActive(employee.id!)}
                                                    className={employee.isActive ? 'text-red-500' : 'text-green-500'}
                                                    disabled={!isCurrentUserAdmin}
                                                >
                                                    {employee.isActive ? (
                                                        <>
                                                            <Lock className="w-4 h-4 mr-1" />
                                                            Block
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Unlock className="w-4 h-4 mr-1" />
                                                            Grant Access
                                                        </>
                                                    )}
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                    onClick={() => handleDeleteEmployee(employee.id!)}
                                                    disabled={!isCurrentUserAdmin}
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Settings Tab */}
                    <TabsContent value="settings">
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Shield className="w-5 h-5" />
                                    Admin Settings
                                </CardTitle>
                                <CardDescription>
                                    Manage your admin account and preferences
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="p-4 border rounded-lg">
                                        <h4 className="font-semibold mb-4">Change Password</h4>
                                        <div className="space-y-3">
                                            <div>
                                                <Label>Current Password</Label>
                                                <Input type="password" className="mt-1" />
                                            </div>
                                            <div>
                                                <Label>New Password</Label>
                                                <Input type="password" className="mt-1" />
                                            </div>
                                            <div>
                                                <Label>Confirm New Password</Label>
                                                <Input type="password" className="mt-1" />
                                            </div>
                                            <Button className="bg-blue-600">Update Password</Button>
                                        </div>
                                    </div>

                                    <div className="p-4 border rounded-lg">
                                        <h4 className="font-semibold mb-4">Account Info</h4>
                                        <div className="space-y-3 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Email:</span>
                                                <span className="font-medium">admin@orinteksolar.com</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Role:</span>
                                                <Badge className="bg-purple-500">Super Admin</Badge>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Account Created:</span>
                                                <span className="font-medium">January 1, 2024</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Last Login:</span>
                                                <span className="font-medium">Today</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 border rounded-lg">
                                    <h4 className="font-semibold mb-4">Notification Settings</h4>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">Email Notifications</p>
                                                <p className="text-sm text-gray-500">Receive email for new contact inquiries</p>
                                            </div>
                                            <Switch defaultChecked />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">Job Application Alerts</p>
                                                <p className="text-sm text-gray-500">Get notified when someone applies for a job</p>
                                            </div>
                                            <Switch defaultChecked />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium">Daily Summary</p>
                                                <p className="text-sm text-gray-500">Receive daily summary of all activities</p>
                                            </div>
                                            <Switch />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
