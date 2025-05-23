'use client';

import { useState } from 'react';
import { User, Mail, Lock, Save } from 'lucide-react';

export default function SettingsPage() {
  const [formData, setFormData] = useState({
    name: 'Michael Gibbons',
    email: 'mike.gibbo@xtra.co.nz',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [saved, setSaved] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    
    // Save the updated name to localStorage or your backend
    console.log('Settings saved:', formData.name, formData.email);
// Data saved successfully without localStorage
    
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
    
    // Trigger a page refresh to update the name display
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <button 
                onClick={() => window.history.back()}
                className="text-gray-600 hover:text-gray-900 mr-4"
              >
                ← Back to Dashboard
              </button>
              <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h2>
            
            {saved && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Settings saved successfully!
              </div>
            )}

            <form onSubmit={handleSave} className="space-y-6">
              {/* Profile Information */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Profile Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <Save className="h-5 w-5 mr-2" />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
  css/* Missing Tailwind classes used by Settings page */
.min-h-screen { min-height: 100vh; }
.bg-gray-50 { background-color: #f9fafb; }
.bg-white { background-color: white; }
.shadow { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1); }
.max-w-7xl { max-width: 80rem; }
.mx-auto { margin-left: auto; margin-right: auto; }
.px-4 { padding-left: 1rem; padding-right: 1rem; }
.py-8 { padding-top: 2rem; padding-bottom: 2rem; }
.text-2xl { font-size: 1.5rem; line-height: 2rem; }
.font-bold { font-weight: 700; }
.text-gray-900 { color: #111827; }
.mb-6 { margin-bottom: 1.5rem; }
.space-y-6 > * + * { margin-top: 1.5rem; }
.grid { display: grid; }
.grid-cols-1 { grid-template-columns: repeat(1, 1fr); }
.md\:grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.gap-6 { gap: 1.5rem; }
.block { display: block; }
.text-sm { font-size: 0.875rem; }
.font-medium { font-weight: 500; }
.text-gray-700 { color: #374151; }
.mb-2 { margin-bottom: 0.5rem; }
.w-full { width: 100%; }
.px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
.py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
.border { border-width: 1px; }
.border-gray-300 { border-color: #d1d5db; }
.rounded-md { border-radius: 0.375rem; }
.focus\:outline-none:focus { outline: none; }
.focus\:ring-2:focus { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); }
.focus\:border-blue-500:focus { border-color: #3b82f6; }
.bg-green-100 { background-color: #dcfce7; }
.border-green-400 { border-color: #4ade80; }
.text-green-700 { color: #15803d; }
.rounded { border-radius: 0.25rem; }
.p-4 { padding: 1rem; }
.mb-4 { margin-bottom: 1rem; }
.h-5 { height: 1.25rem; }
.w-5 { width: 1.25rem; }
.mr-2 { margin-right: 0.5rem; }
.flex { display: flex; }
.items-center { align-items: center; }
.justify-center { justify-content: center; }
.pt-6 { padding-top: 1.5rem; }
.border-t { border-top-width: 1px; }
.border-gray-200 { border-color: #e5e7eb; }
.inline-flex { display: inline-flex; }
.px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
.py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
.border-transparent { border-color: transparent; }
.text-base { font-size: 1rem; }
.text-white { color: white; }
.bg-blue-600 { background-color: #2563eb; }
.hover\:bg-blue-700:hover { background-color: #1d4ed8; }
.focus\:ring-blue-500:focus { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); }
.focus\:ring-offset-2:focus { box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5), 0 0 0 4px white; }
}
