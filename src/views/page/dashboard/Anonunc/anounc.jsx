import React from "react";
import User from './../../../images/user.jpeg'

const Anounc = () => {
    return(
        <React.Fragment>
            <div className="py-7 font-poppins @container">
                <div className="tittle mx-10 @lg:mt-10">
                    <h2 className="font-semibold text-2xl text-comm-font">Anouc</h2>
                </div>
                <div className="ml-10 mt-4 mb-20 flex">
                    <div className="w-80 h-64 bg-slate-300 rounded-md grid justify-center">
                        <img src={User} alt="" className="rounded-lg"/>
                        {/* <div className="w-52 h-52 bg-bg1 mt-5 rounded-md"></div> */}
                    </div>
                    <div className="card w-full h-48 bg-bg2 mt-12 p-6">
                        <h2 className="text-grays text-2xl font-bold font-inter">Hai Nama Saya Jhondoe</h2>
                        <p className="text-paragraph mt-3 @lg:text-md">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit consequuntur neque laudantium veritatis quo quibusdam pariatur sequi quod ea itaque tenetur, asperiores possimus ad! Expedita quisquam rem itaque officiis consequuntur!
                            Culpa eaque placeat nostrum numquam necessitatibus neque ullam fugiat asperiores eos odio molestias laboriosam explicabo perferendis impedit nesciunt quis delectus, dolore ad sit esse ex soluta. Suscipit laboriosam nisi mollitia!
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Anounc