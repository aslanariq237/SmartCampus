export default function Event({img}){
    return(
        <div className="card bg-grays rounded-xl shadow-lg w-96 @container">
        <div className="my-4">
            <div className="grid @sm:flex @sm:items-center mx-2 @md:mx-20 justify-center">
                <div className="card-header">
                    <img src={img} alt="" className="h-52 w-48"/>
                </div>
                <div className="card-body mx-2 w-40">
                    <h3 className="text-head-font text-2xl font-bold">Dollar Kuning</h3>
                    <div className="flex justify-end">
                        <div className=""></div>
                        <div className="items-right">
                            <p className="text-xs justify-end">2016-12-12</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment mx-2 text-comm-font text-lg mt-3">
                <p>lorem ipsum dolor amet sit cuko baita pinluk bansoi pantarlih is barang dalang pelok is the most
                    people which doensn't know what bayi means.
                </p>
            </div>
        </div>
    </div>
    )
}