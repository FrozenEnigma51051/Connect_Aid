import React, { useState } from 'react';

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showSavedToast, setShowSavedToast] = useState(false);

  const handleSave = () => {
    setShowSavedToast(true);
    setTimeout(() => setShowSavedToast(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="bg-white rounded-t-xl shadow-sm p-6 mb-1">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Customize your Experience
          </p>
        </div>

        {/* Main Settings Container */}
        <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
          {/* Language Settings */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Language</h2>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>

          {/* Theme Settings */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Theme</h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(false)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  !isDarkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Light Mode
              </button>
              <button
                onClick={() => setIsDarkMode(true)}
                className={`px-6 py-3 rounded-lg transition-colors ${
                  isDarkMode
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Dark Mode
              </button>
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Notifications</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <div>
                  <span className="text-gray-800 font-medium">Email Notifications</span>
                  <p className="text-sm text-gray-600">Receive updates via email</p>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <div>
                  <span className="text-gray-800 font-medium">SMS Notifications</span>
                  <p className="text-sm text-gray-600">Get alerts on your phone</p>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
              </label>
            </div>
          </div>

          {/* Privacy Settings */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Privacy</h2>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <div>
                  <span className="text-gray-800 font-medium">Public Profile</span>
                  <p className="text-sm text-gray-600">Make your profile visible to others</p>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
              </label>

              <label className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <div>
                  <span className="text-gray-800 font-medium">Search Engine Visibility</span>
                  <p className="text-sm text-gray-600">Allow search engines to index your profile</p>
                </div>
                <input
                  type="checkbox"
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-4">
            <button
              onClick={handleSave}
              className="w-full md:w-auto float-right px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showSavedToast && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up">
          Settings saved successfully!
        </div>
      )}
    </div>
  );
};

export default Settings;