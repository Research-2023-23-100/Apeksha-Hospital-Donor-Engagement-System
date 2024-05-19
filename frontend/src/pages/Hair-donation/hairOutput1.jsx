import React from "react";
import { useLocation, Link } from "react-router-dom";
import Home2 from '../../assets/hair/1.jpg';

const HairOutput1 = () => {
  const location = useLocation();
  const message = location.state?.message;

  return (
    <section>
      <div className="bg-white-100">
        <table className="w-full" style={{ marginTop: '120px' }}>
          <tbody>
            <tr>
              <td className="w-1/2">
                <img
                  src={Home2}
                  alt="Hair donation"
                  className="rounded-lg  mx-auto"
                  style={{ display: 'block', paddingLeft: '25px', paddingRight: '25px' }}
                />
              </td>
              <td className="w-1/2 bg-red-100">
                <div className="min-h-screen bg-red flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                  <section>
                    <div className="sm:mx-auto sm:w-full sm:max-w-md">
                      <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">Upload Your Hair Sample Images - Step I</h2>
                    </div>
                  </section>
                  <section className="bg-white-100 py-16">
                    <div className="max-w-4xl mx-auto px-4">
                      <h2 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h2>
                      <ul className="list-disc list-inside">
                        <li className="text-lg text-red-700 mb-4">
                          <span className="font-semibold">1. Be honest in uploading photos of the hair of those who wish to donate.</span>
                        </li>
                        <li className="text-lg text-red-700 mb-4">
                          <span className="font-semibold">2. For this, enter only photos of hair. Do not enter other things or make fun of the system.</span>
                        </li>
                        <li className="text-lg text-red-700 mb-4">
                          <span className="font-semibold">3. Include clear and unedited photos.</span>
                        </li>
                      </ul>
                    </div>
                  </section>
                  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                      <form className="space-y-6" action="#" method="POST">
                        <div>
                          <label htmlFor="output" className="block text-sm font-medium text-gray-700">
                         
                          </label>
                          <p className="mt-1 text-center text-lg text-gray-700">{message}</p>
                        </div>
                        <div>
                          <Link to="/donor/hair_sample2">
                            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              NEXT
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default HairOutput1;
