import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Dashboard Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-8">
              <Link href="/dashboard" className="flex items-center">
                <h1 className="text-xl font-bold text-gray-900">CCC Marketing Pro</h1>
                <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">AI</span>
              </Link>
              
              <nav className="hidden md:flex space-x-6">
                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 font-medium">
                  Dashboard
                </Link>
                <Link href="/dashboard/content" className="text-gray-600 hover:text-gray-900 font-medium">
                  Create Content
                </Link>
                <Link href="/dashboard/history" className="text-gray-600 hover:text-gray-900 font-medium">
                  Content History
                </Link>
                <Link href="/dashboard/settings" className="text-gray-600 hover:text-gray-900 font-medium">
                  Settings
                </Link>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Michael Gibbons</span>
              <Link href="/auth/signout" className="text-sm text-gray-600 hover:text-gray-900">
                Sign Out
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  )
}
