import React from "react";
import Card from "./card";

const Proj = () => {
    return(
        <div className="flex justify-center items-baseline py-8 mx-14">
            <Card />
            <div className="Skills w-4/6">
                <div className="flex justify-between items-baseline">
                    <p className="font-semibold text-lg">Skills</p>
                    <p><a href="/">See More </a></p>
                </div>
                <div className="skil bg-bg1 py-2 px-2 mx-4 mt-4 rounded-md">
                    {/* HTML */}
                    <div className="html">
                        <div className="flex justify-between">
                            <p className="font-semibold">HTML</p>
                            <p>70%</p>
                        </div>
                        <div className="w-full bg-neutral-200 h-2">
                            <div className="bg-yellow-300 w-[70%] h-2"></div>
                        </div>
                    </div>
                    {/* Dart */}
                    <div className="Dart mt-2">
                        <div className="flex justify-between">
                            <p className="font-semibold">Dart</p>
                            <p>50%</p>
                        </div>
                        <div className="w-full bg-neutral-200 h-2">
                            <div className="bg-blue-300 w-[50%] h-2"></div>
                        </div>
                    </div>
                    {/* PHP */}
                    <div className="PHP mt-2">
                        <div className="flex justify-between">
                            <p className="font-semibold">HTML</p>
                            <p>40%</p>
                        </div>
                        <div className="w-full bg-neutral-200 h-2">
                            <div className="bg-red-300 w-[40%] h-2"></div>
                        </div>
                    </div>
                    {/* CSS */}
                    <div className="CSS mt-2">
                        <div className="flex justify-between">
                            <p className="font-semibold">CSS</p>
                            <p>60%</p>
                        </div>
                        <div className="w-full bg-neutral-200 h-2">
                            <div className="bg-green-300 w-[60%] h-2"></div>
                        </div>
                    </div>
                    {/* SCSS */}
                    <div className="SCSS mt-2">
                        <div className="flex justify-between">
                            <p className="font-semibold">SCSS</p>
                            <p>50%</p>
                        </div>
                        <div className="w-full bg-neutral-200 h-2">
                            <div className="bg-orange-300 w-[50%] h-2"></div>
                        </div>
                    </div>
                    {/* JS */}
                    <div className="JS mt-2">
                        <div className="flex justify-between">
                            <p className="font-semibold">JS</p>
                            <p>65%</p>
                        </div>
                        <div className="w-full bg-neutral-200 h-2">
                            <div className="bg-purple-300 w-[65%] h-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Proj