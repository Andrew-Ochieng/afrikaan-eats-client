import { Link } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const MenuList = ({filteredMenus, loading, error}) => {
    return ( 
        <>
            <div className="md:m-8 m-4">
                {loading ? (
                    <div className="pt-4 pr-4">
                        <FadeLoader 
                            color="#36d7b7" 
                            loading={loading}
                            size={50}
                            aria-label="Loading Content..."
                            data-testid="loader"
                        />
                    </div>
                ) : (
                    
                    <div className="grid md:grid-cols-4 gap-4">
                        { error && <h4 className="text-red-500">{ error }</h4>}
                        {filteredMenus && filteredMenus.map((menu_item, index) => (
                            <div key={index} className=" py-2 px-3 rounded-xl border space-y-3">
                                <Link to={`/menu_item/${menu_item.id}`}>
                                    <img className="rounded-xl w-full h-40 md:h-44 hover:scale-105 duration-500 ease-in-out" src={menu_item.imageUrl} alt="" />
                                    <h3 className="text-gray-700 md:text-xl text-lg font-semibold mt-3">{menu_item.name}</h3>
                                </Link>
                                <div className="flex justify-between items-center">
                                    <h4 className="text-green-400 font-light ">Ksh {menu_item.price}</h4>
                                    <button className="py-1 px-2 rounded-md text-sm bg-green-500 text-white font-semibold">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                
            </div>
        </>
     );
}
 
export default MenuList;