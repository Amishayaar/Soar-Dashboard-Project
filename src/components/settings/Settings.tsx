import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { PencilIcon } from "lucide-react";
import ProfileImage from "../../assets/christina.jpg";

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

const ProfileImageSection = ({ onClick }: { onClick: () => void }) => (
  <div className="w-[100px]">
    <div className="flex flex-col items-center space-y-4">
      <div className="relative w-[90px] h-[90px]">
        <div className="w-full h-full border-gray-300 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={ProfileImage}
            alt="profile"
            className="w-[110px] h-full rounded-full object-cover"
          />
        </div>
        <div 
          onClick={onClick}
          className="absolute bottom-0 right-0 bg-[#232323] rounded-full p-1 shadow-md cursor-pointer"
        >
          <PencilIcon color="white" className="w-4 h-4 m-[2px]" />
        </div>
      </div>
      <input type="file" accept="image/*" className="hidden" id="profile-image" />
    </div>
  </div>
);

const useFormValidation = (formData: FormData) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.dob) newErrors.dob = "Date of Birth is required";
    if (!formData.presentAddress) newErrors.presentAddress = "Present Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.postalCode || !/^\d+$/.test(formData.postalCode)) {
      newErrors.postalCode = "Valid Postal Code is required";
    }
    if (!formData.country) newErrors.country = "Country is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return { errors, validate };
};

const Settings = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "", username: "", email: "", password: "", dob: "",
    presentAddress: "", permanentAddress: "", city: "", postalCode: "", country: ""
  });
  const [isLoading, setIsLoading] = useState(true);
  const { errors, validate } = useFormValidation(formData);

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const [user] = await response.json();
        if (user) {
          setFormData(prev => ({
            ...prev,
            name: user.name,
            username: user.username,
            email: user.email,
            presentAddress: user.address.street,
            permanentAddress: user.address.suite,
            city: user.address.city,
            postalCode: user.address.zipcode,
            country: "USA",
          }));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const renderInput = (label: string, name: keyof FormData, type: string = "text") => (
    <div>
      <label className="block text-sm font-medium mb-2 text-gray-600">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full border border-gray-300 rounded-md p-2 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
    </div>
  );

  if (isLoading) {
    return <div className="h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen p-4">
      <div className="bg-white w-full max-w-[800px] mx-auto my-4 lg:my-10 p-4 lg:p-6 rounded-lg">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="flex flex-wrap justify-start gap-4 lg:gap-8 mb-6">
            <TabsTrigger value="profile" className="text-gray-600">Profile</TabsTrigger>
            <TabsTrigger value="preferences" className="text-gray-600">Preferences</TabsTrigger>
            <TabsTrigger value="security" className="text-gray-600">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="p-2 lg:p-4">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <ProfileImageSection 
                onClick={() => document.getElementById("profile-image")?.click()} 
              />

              <form onSubmit={handleSubmit} className="space-y-4 text-left w-full lg:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderInput("Your Name", "name")}
                  {renderInput("User Name", "username")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderInput("Email", "email", "email")}
                  {renderInput("Password", "password", "password")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderInput("Date of Birth", "dob", "date")}
                  {renderInput("Present Address", "presentAddress")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderInput("Permanent Address", "permanentAddress")}
                  {renderInput("City", "city")}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {renderInput("Postal Code", "postalCode")}
                  {renderInput("Country", "country")}
                </div>

                <div className="flex justify-end pt-4">
                  <button
                    type="submit"
                    className="bg-black text-white px-6 py-2.5 rounded-md hover:bg-gray-800 transition-colors w-full md:w-auto"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="preferences" className="p-4">
            <h3 className="text-lg font-semibold">Preferences</h3>
          </TabsContent>

          <TabsContent value="security" className="p-4">
            <h3 className="text-lg font-semibold">Security</h3>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Settings;
