import React, { useState } from 'react'


const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti",
    "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea",
    "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania",
    "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
    "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova",
    "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau",
    "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
    "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone",
    "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
    "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste",
    "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];


const AdminSignUp = () => {
    const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <div>
    <form className="w-full max-w-lg mx-auto py-8">
 <div className="flex flex-wrap -mx-3 mb-6">
   <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
       First Name
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"/>
   </div>
   <div className="w-full md:w-1/2 px-3">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
       Last Name
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" />
   </div>
 </div>

 <div className="flex flex-wrap -mx-3 mb-6">
   <div className="w-full px-3">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
       Email
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email"/>
   </div>
 </div>


 <div className="flex flex-wrap -mx-3 mb-6">
   <div className="w-full px-3">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
       Password
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" />
     {/* <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
   </div>
 </div>

 <div className="flex flex-wrap -mx-3 mb-6">
   <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-address">
       Street
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type='text'/>
   </div>

   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
       Postcode
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-postcode" type="text" />
   </div>
   
 </div>


 <div className="flex flex-wrap -mx-3 mb-6">
   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-country">
       Country
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-country" type='text'/>
   </div>

   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state_county">
       State/County
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state_county" type='text'/>
   </div>

   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city_town">
       City/Town
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city_town" type='text'/>

     {/* <div className="relative">
       <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city">
         <option></option>
         <option>Ikeja</option>
         <option>Bariga</option>
         <option>Lekki</option>
       </select>
       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
         <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
       </div>
     </div> */}
   </div>

 </div>
 <div className="flex flex-wrap -mx-3 mb-6">
   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-age">
       Age
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-age" type='date'/>
   </div>

   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-sex">
       Sex
     </label>
       <input type="radio" id="male" name="fav_language" value="MALE"/>
       <label for="male">Male</label><br/>
       <input type="radio" id="female" name="fav_language" value="FEMALE"/>
       <label for="female">Female</label><br/>        
   </div>

   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-sex">
       Marital Status
     </label>
       <input type="radio" id="single" name="fav_language" value="SINGLE"/>
       <label for="single">Single</label><br/>
       <input type="radio" id="married" name="fav_language" value="MARRIED"/>
       <label for="married">Married</label><br/>        
   </div>
   
 </div>

 <div className="flex flex-wrap -mx-3 mb-6">
   <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
     <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
       Phone Number
     </label>
     <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" type='text'/>
   </div>

   <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
   <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-nationality">
       Nationality
     </label>

     <div className="relative">
     <select 
     id="country"
     value={selectedCountry}
     onChange={(e) => setSelectedCountry(e.target.value)}
     className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
   >
     <option value="" disabled>Select country</option>
     {countries.map((country) => (
       <option key={country} value={country}>
         {country}
       </option>
     ))}
   </select>
   {/* {selectedCountry && (
     <p className="mt-4 text-gray-700">You have selected: {selectedCountry}</p>
   )} */}
       <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
         <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
       </div>
     </div>
   </div>
   
 </div>

 <button id='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
   Submit
 </button>
 
</form>
</div>
  )
}

export default AdminSignUp