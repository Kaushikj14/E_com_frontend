// import React from "react";

// const HomeSectionCard = ({ product }) => {
//   return (
//     <div className=" cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 px-3 border ">
//       <div className="h-[13rem] w-[10rem]">
//         <img
//           className="object-cover object-top w-full h-full"
//           src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvsDwDGuGHmOjCLanwI-htKIesvi2QIlyRNniPW1E9TsFOFSDN3_RitITTM8LGdjAe80yKVT_3ndKO0s8fI9eQfHqwxNsNHgfMIhZpGaaa"
//           alt=""
//         />
//       </div>

//       {/* content */}
//       <div className="p-4">
//         <h3 className="text-lg font-medium text-gray-900">NoFilter</h3>
//         <p className="mt-2 text-sm text-gray-500">
//           Mens Solid Pure Cotton Straight Kurta
//         </p>
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCard;
import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] px-3 py-4 border mx-2">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSvsDwDGuGHmOjCLanwI-htKIesvi2QIlyRNniPW1E9TsFOFSDN3_RitITTM8LGdjAe80yKVT_3ndKO0s8fI9eQfHqwxNsNHgfMIhZpGaaa"
          alt=""
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-medium text-gray-900">NoFilter</h3>
        <p className="mt-2 text-sm text-gray-500">
          Mens Solid Pure Cotton Straight Kurta
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
