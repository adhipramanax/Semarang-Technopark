import React from "react";

import ig from "../../assets/images/ig.svg";
import twiter from "../../assets/images/twiter.svg";
import fb from "../../assets/images/fb.svg";

const index = () => {
  return (
    <>
      <div className="bg-[#2F3133]">
        <footer className="flex p-10 text-white container  mx-auto justify-between">
          <div className="lg:w-1/4">
            <span className="font-medium text-[24px] text-white">Semarang Technopark</span>
            <div>
              Semarang Technopark memiliki berbagai program dan pengelolaan Inkubasi untuk
              menghasilkan berbagai terobosan inovasi
            </div>
            <span className="flex gap-5 pt-4">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.9999 11.0946C12.8495 11.0946 11.0946 12.8495 11.0946 14.9999C11.0946 17.1503 12.8495 18.9052 14.9999 18.9052C17.1503 18.9052 18.9052 17.1503 18.9052 14.9999C18.9052 12.8495 17.1503 11.0946 14.9999 11.0946ZM26.7128 14.9999C26.7128 13.3827 26.7275 11.7802 26.6366 10.1659C26.5458 8.29091 26.1181 6.62685 24.747 5.25575C23.373 3.88173 21.7118 3.45693 19.8368 3.36611C18.2196 3.27529 16.6171 3.28993 15.0028 3.28993C13.3856 3.28993 11.7831 3.27529 10.1688 3.36611C8.29384 3.45693 6.62978 3.88466 5.25869 5.25575C3.88466 6.62978 3.45986 8.29091 3.36904 10.1659C3.27822 11.7831 3.29286 13.3856 3.29286 14.9999C3.29286 16.6141 3.27822 18.2196 3.36904 19.8339C3.45986 21.7089 3.88759 23.3729 5.25869 24.744C6.63271 26.118 8.29384 26.5429 10.1688 26.6337C11.786 26.7245 13.3886 26.7098 15.0028 26.7098C16.62 26.7098 18.2226 26.7245 19.8368 26.6337C21.7118 26.5429 23.3759 26.1151 24.747 24.744C26.121 23.37 26.5458 21.7089 26.6366 19.8339C26.7304 18.2196 26.7128 16.6171 26.7128 14.9999ZM14.9999 21.0087C11.6747 21.0087 8.99111 18.3251 8.99111 14.9999C8.99111 11.6747 11.6747 8.9911 14.9999 8.9911C18.3251 8.9911 21.0087 11.6747 21.0087 14.9999C21.0087 18.3251 18.3251 21.0087 14.9999 21.0087ZM21.2548 10.1483C20.4784 10.1483 19.8515 9.52138 19.8515 8.74501C19.8515 7.96864 20.4784 7.34169 21.2548 7.34169C22.0312 7.34169 22.6581 7.96864 22.6581 8.74501C22.6583 8.92936 22.6222 9.11195 22.5518 9.28231C22.4813 9.45267 22.378 9.60747 22.2476 9.73782C22.1172 9.86818 21.9625 9.97154 21.7921 10.042C21.6217 10.1124 21.4391 10.1486 21.2548 10.1483Z" fill="white" />
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_102_713)">
                  <path d="M24 2.84287C23.3317 4.06666 22.5117 5.10989 21.5402 5.97254C21.5498 6.2039 21.5546 6.4654 21.5546 6.75703C21.5546 8.3774 21.3627 9.99973 20.9789 11.624C20.5951 13.2483 20.0088 14.8031 19.2201 16.2882C18.4314 17.7734 17.4918 19.0892 16.4015 20.2355C15.3112 21.3818 14.0006 22.2958 12.4697 22.9775C10.9388 23.6592 9.29815 24 7.54763 24C4.81566 24 2.29978 23.0921 0 21.2762C0.408184 21.3321 0.799667 21.3601 1.17445 21.3601C3.45679 21.3601 5.49529 20.4947 7.28994 18.7638C6.22578 18.7398 5.27275 18.3365 4.43084 17.554C3.58894 16.7715 3.00956 15.7716 2.6927 14.5543C3.00589 14.6277 3.315 14.6645 3.62003 14.6645C4.05909 14.6645 4.49112 14.594 4.91613 14.453C3.78047 14.173 2.83835 13.4766 2.08976 12.364C1.3412 11.2514 0.966919 9.9672 0.966919 8.51146V8.43643C1.66399 8.91157 2.40752 9.1643 3.19752 9.19464C2.52477 8.64251 1.99138 7.92252 1.59735 7.03466C1.20329 6.14681 1.00626 5.18599 1.00626 4.15222C1.00626 3.06193 1.22819 2.04666 1.67205 1.10642C2.90705 2.97214 4.40352 4.46327 6.16144 5.57983C7.91939 6.69641 9.80534 7.31652 11.8193 7.44017C11.7334 6.99948 11.6903 6.5396 11.6902 6.06053C11.6902 4.38779 12.171 2.95952 13.1327 1.77571C14.0945 0.591904 15.2547 0 16.6135 0C18.0361 0 19.2344 0.637688 20.2083 1.91306C21.3211 1.64172 22.363 1.15093 23.3341 0.440688C22.96 1.89013 22.2391 3.00827 21.1714 3.79512C22.1527 3.65157 23.0955 3.33415 24 2.84287H24Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_102_713">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.7463 26.2465V16.0015H20.2025L20.7163 11.9902H16.7463V9.43521C16.7463 8.27771 17.0688 7.48521 18.73 7.48521H20.835V3.90896C19.8108 3.7992 18.7813 3.7462 17.7513 3.75021C14.6963 3.75021 12.5988 5.61521 12.5988 9.03896V11.9827H9.16504V15.994H12.6063V26.2465H16.7463Z" fill="white" />
              </svg>
            </span>
          </div>
          <div className="w-1/5 lg:flex hidden flex-col ">
            <span className="font-medium text-[24px] text-white">Layanan</span>
            <a href="/inkubasi" className="link link-hover">
              Incubator Event
            </a>
            <a href="/co-working" className="link link-hover">
              Co-Working Space
            </a>
            <a href="/sewa-alat" className="link link-hover">
              Sewa Alat
            </a>
            <a href="/pelatihan" className="link link-hover">
              Pelatihan
            </a>
          </div>
          <div className="w-1/5 lg:flex hidden flex-col">
            <span className="font-medium text-[24px] text-white">Profil STP</span>
            <a href="/" className="link link-hover">
              Tentang
            </a>
            <a href="/" className="link link-hover">
              Visi & Misi Mentor
            </a>
            <a href="/" className="link link-hover">
              Mentor
            </a>
            <a href="/" className="link link-hover ">
              Partners
            </a>
          </div>
          <div className="w-1/4 lg:flex hidden flex-col">
            <span className="font-medium text-[24px] text-white">Call Us</span>
            <span className="flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              Semarang, Indonesia
            </span>
            <span className="flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +25470000000
            </span>
            <span className="flex gap-2 items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              stp@gmail.com
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default index;
