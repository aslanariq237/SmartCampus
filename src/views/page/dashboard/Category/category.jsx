import React from "react";

const Category = () => {
    return(
        <React.Fragment>
            <div className="bg-bg3 grid justify-center py-14">
                <div className="flex justify-center">
                    <div className="text w-96 text-center mb-8">
                        <div className="flex justify-center">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                strokeWidth={1.5} stroke="currentColor" 
                                className="w-9 h-9"
                                >
                                <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" 
                                />
                            </svg>
                        </div>
                            <p>Ya allah berikanlah saya iman yang kuat untuk menunaikan ibadah mu ya allah
                            saya ingin sekali menunaikan ibadah sholat dengan khusyu
                            </p>
                    </div>
                </div>
                <div className="flex space-x-80 items-center">
                    <div className="cat1">
                        <div className="flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-9 h-9"
                        >
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" 
                            />
                        </svg>
                        </div>
                        <p>WorldWide Shipping</p>
                    </div>
                    <div className="cat2">
                        <div className="flex justify-center">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-9 h-9"
                        >
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                            />
                        </svg>
                        </div>
                        <p>Payment Useless</p>
                    </div>
                    <div className="cat3">
                        <div className="flex justify-center">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-9 h-9">
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" 
                            />
                        </svg>
                        </div>
                        <p>Open Minded</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Category