import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const Settings = () => {
  interface FormData {
    name: string;
    username: string;
    email: string;
    password: string;
    dob: string;
    presentAddress: string;
    permanentAddress: string;
    city: string;
    postalCode: string;
    country: string;
  }

  const [formData, setFormData] = useState<FormData>({
    name: '',
    username: '',
    email: '',
    password: '',
    dob: '',
    presentAddress: '',
    permanentAddress: '',
    city: '',
    postalCode: '',
    country: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    if (!formData.dob) newErrors.dob = 'Date of Birth is required';
    if (!formData.presentAddress) newErrors.presentAddress = 'Present Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.postalCode || !/^\d+$/.test(formData.postalCode)) {
      newErrors.postalCode = 'Valid Postal Code is required';
    }
    if (!formData.country) newErrors.country = 'Country is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
    }
  };

  return (
    <div className="h-screen">
      <div className="bg-white h-auto w-[800px] mx-auto my-10 p-6 rounded-lg">
        <Tabs defaultValue="profile" className=" w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="profile" className="text-gray-600">Profile</TabsTrigger>
            <TabsTrigger value="preferences" className="text-gray-600">Preferences</TabsTrigger>
            <TabsTrigger value="security" className="text-gray-600">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="p-4">
           
            <form onSubmit={handleSubmit} className="space-y-4 text-left mt-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">User Name</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">Present Address</label>
                  <input
                    type="text"
                    name="presentAddress"
                    value={formData.presentAddress}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.presentAddress && <p className="text-red-500 text-sm">{errors.presentAddress}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">Permanent Address</label>
                  <input
                    type="text"
                    name="permanentAddress"
                    value={formData.permanentAddress}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.postalCode && <p className="text-red-500 text-sm">{errors.postalCode}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-600">Country</label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                </div>
              </div>

                <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                >
                  Save
                </button>
                </div>
            </form>
          </TabsContent>

          <TabsContent value="preferences" className="p-4">
            <h3 className="text-lg font-semibold">Preferences</h3>
            {/* Add your preferences settings here */}
          </TabsContent>

          <TabsContent value="security" className="p-4">
            <h3 className="text-lg font-semibold">Security</h3>
            {/* Add your security settings here */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
